/* Workbook translation: ASE, SS, InsR and valInOuSt. No network or Excel required. */
const number = x => typeof x === 'number' && Number.isFinite(x);
const present = x => x !== null && x !== undefined && x !== '';
function parseSeries(text) {
  if(!text.trim()) return [];
  const tokens=text.trim().split(/[\s,;]+/);
  if(tokens.length>5000) throw Error('Use no more than 5,000 daily values.');
  const values=tokens.map(Number);
  if(values.some(x=>!Number.isFinite(x)||x<0)) throw Error('Daily data must contain only non-negative numbers, separated by commas or new lines.');
  return values;
}
function calculate(input,lib) {
  const x={...input},r={warnings:[],errors:[],values:{}};
  const put=(id,v)=>r.values[id]=v;
  const fail=message=>{r.errors.push(message);return r;};
  const required=(key,label,min=-Infinity,strict=false)=>{if(!number(x[key])||(strict?x[key]<=min:x[key]<min))throw Error(label+' must be '+(strict?'greater than ':'at least ')+min+'.');};
  try {
    const solar=parseSeries(x.solarSeries||''),demand=parseSeries(x.demandSeries||'');
    const avg=a=>a.reduce((s,v)=>s+v,0)/a.length;
    for(const [k,l] of [['C6','Collector area'],['C7','Collector efficiency']])required(k,l,0,true);
    if(x.C7>100)return fail('Collector efficiency cannot exceed 100%.');
    if(present(x.C5))required('C5','Daily solar exposure',0);
    if(present(x.C8))required('C8','Thermal demand',0);
    const exposure=solar.length?avg(solar):x.C5;
    const available=number(exposure)?exposure*x.C6*x.C7/100/3.6:null;
    const daily=demand.length?avg(demand):present(x.C8)?x.C8:available;
    if(!number(daily))return fail('Enter daily solar exposure or thermal demand.');
    put('G5',available);put('G6',daily);
    put('G20',demand.length?'Average bulk thermal demand':present(x.C8)?'Single-day thermal demand':'Available solar energy');
    x.C12=present(x.C12)?x.C12:1;required('C12','Storage days',0,true);
    required('C9','Maximum temperature');required('C10','Minimum temperature');
    if(x.C9<=x.C10)return fail('Maximum storage temperature must exceed minimum temperature.');
    const material={...lib.storage.find(m=>m.name===x.C11),...(x.customStorage||{})};r.material=material;
    if(!['Sensible','Latent'].includes(material.type)||!number(material.cp)||material.cp<=0||!number(material.density)||material.density<=0)return fail('Storage material needs a valid type, positive density and specific heat.');
    if(material.type==='Latent'&&(!number(material.latent)||material.latent<=0||!number(material.melt)||material.melt<=x.C10||material.melt>=x.C9))return fail('PCM melting point must lie strictly inside the temperature band, with positive latent heat.');
    const energy=daily*x.C12,capacity=material.cp*(x.C9-x.C10)+(material.type==='Latent'?material.latent:0),mass=energy*3600/capacity,volume=mass/material.density;
    put('G7',energy);put('G8',mass);put('G9',volume);put('G21','Ready');
    if(available!==null&&daily>available)r.warnings.push('Daily demand exceeds available solar energy by '+(daily-available).toFixed(2)+' kWh/day.');
    if(energy<=0)return fail('Zero storage demand: mass and volume are zero. Enter positive energy to size insulation and enclosure.');
    required('C14','Ambient temperature');required('C15','Allowed heat loss',0,true);
    if(x.C15>=100)return fail('Allowed heat loss must be less than 100%.');
    if(!['Maximum','Mean'].includes(x.C16))return fail('Choose Maximum or Mean heat-loss basis.');
    const ins={...lib.insulation.find(m=>m.name===x.C13),...(x.customInsulation||{})};r.insulation=ins;
    const hot=x.C16==='Mean'?(x.C9+x.C10)/2:x.C9,mean=(hot+x.C14)/2;
    if(hot<=x.C14)return fail('Ambient temperature must be below the selected hot-side temperature.');
    if(number(ins.max)&&x.C9>ins.max)return fail('Too hot for selected insulation: maximum service temperature is '+ins.max+' °C.');
    let k=ins.k;
    if(ins.basis==='Formula')k=(39.92+0.125*mean+0.0008*(mean-30)**2)/1000;
    if(ins.basis==='Curve'){
      const points=lib.curves.filter(p=>p.name===ins.name&&p.temperature>=mean).sort((a,b)=>a.temperature-b.temperature);
      if(!points.length)return fail('Mean temperature exceeds the insulation conductivity curve.');
      k=points[0].k;r.testTemperature=points[0].temperature;
    }
    if(ins.basis==='Custom'&&!number(ins.max))return fail('Enter a maximum service temperature for custom insulation.');
    if(!number(k)||k<=0)return fail('Enter a positive insulation conductivity.');
    const area=6*volume**(2/3),loss=energy*x.C15/100,t=k*area*(hot-x.C14)*x.C12*24/(1000*loss);
    put('G10',t*1000);put('G22',number(ins.max)?'Preliminary calculation ready':'Screening: service limit unverified');
    r.thermal={k,loss,remaining:energy-loss,heatLeak:loss*1000/(x.C12*24),cubeVolume:(volume**(1/3)+2*t)**3};
    if(!number(ins.max))r.warnings.push('Insulation service limit is unverified in the workbook.');
    if(ins.basis==='Reference')r.warnings.push('Insulation conductivity is a reference value; confirm it at the design temperature.');
    if(!number(ins.density)||ins.density<=0)return fail('Insulation density is missing. Enter a sourced density under Advanced material properties to calculate the enclosure.');
    const inner={...lib.walls.find(m=>m.name===x.C22),...(x.customInner||{})},outer={...lib.walls.find(m=>m.name===x.C23),...(x.customOuter||{})};
    r.inner=inner;r.outer=outer;
    if(inner.family!=='Metal'||outer.family!=='Metal')return fail('Automatic wall sizing supports metals only. Timber and masonry need a separate design.');
    for(const m of [inner,outer])for(const key of ['density','strength','modulus'])if(!number(m[key])||m[key]<=0)return fail('Both walls need positive density, strength and elastic modulus.');
    required('C18','Safety factor',1);
    const a={fabrication:1,corrosion:0,deflection:200,pressure:0,spanFactor:1,gravity:9.80665,strengthFactor:1,stiffnessFactor:1,...x.assumptions};
    for(const key of Object.keys(a))if(!number(a[key])||(['corrosion','pressure'].includes(key)?a[key]<0:a[key]<=0))return fail('Check the advanced enclosure assumption: '+key+'.');
    for(const key of ['C24','C25'])if(present(x[key])&&(!number(x[key])||x[key]<=0))return fail('Minimum wall thickness must be positive or blank.');
    const minI=Math.max(a.fabrication,x.C24||0)/1000,minO=Math.max(a.fabrication,x.C25||0)/1000;
    let dims;
    if(x.C17==='Cube')dims=Array(3).fill(volume**(1/3));
    else if(x.C17==='Sphere')dims=Array(3).fill((6*volume/Math.PI)**(1/3));
    else if(x.C17==='Cylinder'){
      if(present(x.C19))required('C19','Cylinder height',0,true);
      const h=present(x.C19)?x.C19:(4*volume/Math.PI)**(1/3);const d=Math.sqrt(4*volume/(Math.PI*h));dims=[d,d,h];
    } else if(x.C17==='Rectangular cuboid'){
      for(const k of ['C19','C20','C21'])required(k,'Rectangle dimensions',0,true);dims=[x.C21,x.C20,x.C19];
    }else return fail('Select an enclosure shape.');
    const geom=d=>{const [l,w,h]=d;return {volume:x.C17==='Sphere'?Math.PI*l**3/6:x.C17==='Cylinder'?Math.PI*l*l*h/4:l*w*h,base:['Sphere','Cylinder'].includes(x.C17)?Math.PI*l*l/4:l*w,area:x.C17==='Sphere'?Math.PI*l*l:x.C17==='Cylinder'?Math.PI*l*h+Math.PI*l*l/2:2*(l*w+l*h+w*h)};};
    const expand=t=>dims.map(d=>d+2*t),base=geom(dims);
    if(base.volume<volume*(1-1e-9))return fail('The rectangular cavity is too small for the required storage volume.');
    const spanI=Math.max(...dims)*a.spanFactor,spanO=(Math.max(...dims)+2*t+2*minI)*a.spanFactor;
    const thickness=(q,m,span,min,radius)=>Math.max(min,Math.sqrt(.75*x.C18*q*span**2/(m.strength*a.strengthFactor*1e6)),(5*x.C18*q*span**4/(32*m.modulus*a.stiffnessFactor*1e9*(span/a.deflection)))**(1/3),['Cylinder','Sphere'].includes(x.C17)?x.C18*q*radius/((x.C17==='Sphere'?2:1)*m.strength*a.strengthFactor*1e6):0)+a.corrosion/1000;
    let ti=minI,to=minO,change,qi,qo;
    for(let iteration=0;iteration<21;iteration++){
      const vi=geom(expand(ti)).volume,vn=geom(expand(ti+t)).volume,vo=geom(expand(ti+t+to)).volume;
      qi=Math.max((mass+(vi-base.volume)*inner.density)*a.gravity/base.base,material.density*a.gravity*dims[2])+a.pressure*1000;
      qo=(mass+(vi-base.volume)*inner.density+(vn-vi)*ins.density+(vo-vn)*outer.density)*a.gravity/base.base+a.pressure*1000;
      const ni=thickness(qi,inner,spanI,minI,dims[0]/2),no=thickness(qo,outer,spanO,minO,(dims[0]+2*ti+2*t)/2);
      change=Math.max(Math.abs(ni-ti),Math.abs(no-to));ti=ni;to=no;
    }
    if(!Number.isFinite(change)||change>1e-6)return fail('Wall thickness iteration did not converge. Review the enclosure dimensions and assumptions.');
    const di=expand(ti),dn=expand(ti+t),dout=expand(ti+t+to),gi=geom(di),gn=geom(dn),go=geom(dout);
    const mi=(gi.volume-base.volume)*inner.density,mo=(go.volume-gn.volume)*outer.density,iv=gn.volume-gi.volume,im=iv*ins.density,total=mass+mi+mo+im;
    Object.entries({G11:gn.volume,G12:iv,G13:im,G14:ti*1000,G15:mi,G16:to*1000,G17:mo,G18:total,G19:go.volume,G23:'Preliminary estimate'}).forEach(([key,v])=>put(key,v));
    r.geometry={cavity:dims,inner:di,insulation:dn,outer:dout,area:go.area,footprint:go.base,load:total*9.80665/(go.base*1000),change};
    if(x.C17!=='Cube')r.warnings.push('Insulation thickness uses the workbook’s equivalent-cube thermal model; this shape needs separate thermal verification.');
    r.warnings.push('Wall thickness is preliminary screening. Supports, buckling, welds, thermal restraint and pressure-vessel approval are outside this model. Material strength defaults are room-temperature reference values.');
    return r;
  }catch(error){return fail(error.message);}
}
if(typeof module!=='undefined')module.exports={calculate,parseSeries};
