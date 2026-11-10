const assert=require('node:assert/strict');const {calculate,parseSeries}=require('./calculator.js');const lib=require('./data.js');const d=lib.defaults;
const baseline=calculate(d,lib);assert.deepEqual(baseline.errors,[]);
for(const [cell,expected]of Object.entries(lib.baseline)){if(typeof expected==='number'){assert.ok(Math.abs(baseline.values[cell]-expected)<Math.max(1e-8,Math.abs(expected)*1e-10),`${cell}: ${baseline.values[cell]} != ${expected}`);}}
for(const shape of ['Cube','Cylinder','Sphere','Rectangular cuboid']){const r=calculate({...d,C17:shape},lib);assert.equal(r.errors.length,0,shape+': '+r.errors);assert.ok(r.values.G18>r.values.G8);assert.ok(r.values.G19>=r.values.G9);}
assert.equal(calculate({...d,C8:10},lib).values.G7,10);
assert.equal(calculate({...d,C8:0},lib).values.G8,0);
assert.equal(calculate({...d,C12:null},lib).values.G7,baseline.values.G7);
assert.equal(calculate({...d,C12:2},lib).values.G8,baseline.values.G8*2);
assert.equal(calculate({...d,solarSeries:'10,20,30',demandSeries:'10\n20'},lib).values.G7,15);
assert.equal(calculate({...d,solarSeries:'0,0'},lib).values.G5,0);
for(const changes of [{C7:101},{C9:30},{C15:0},{C15:100},{C19:-1},{C18:.5},{C17:'Rectangular cuboid',C19:.1,C20:.1,C21:.1},{C24:-1},{C13:'EPS : BEWI S80'}])assert.ok(calculate({...d,...changes},lib).errors.length,JSON.stringify(changes));
assert.throws(()=>parseSeries('1,hello,2'));assert.throws(()=>parseSeries(Array(5001).fill('1').join(',')));assert.throws(()=>parseSeries('-1'));
const pcm=calculate({...d,C11:'Paraffin : n-docosane (C22)'},lib);assert.equal(pcm.errors.length,0);assert.ok(Math.abs(pcm.values.G8-d.C5*d.C6*d.C7/100/3.6*3600/(1.69*70+249))<1e-8);
assert.ok(calculate({...d,C11:'Paraffin : n-docosane (C22)',C10:44},lib).errors.length);
const curve=calculate({...d,C13:'Aerogel : ArmaGel HT'},lib);assert.equal(curve.thermal.k,.023);assert.equal(curve.errors.length,0);
const missing=calculate({...d,C13:'PIR : Celotex CW4000 FF'},lib);assert.ok(missing.values.G10>0);assert.equal(missing.values.G18,undefined);assert.match(missing.errors[0],/density/);
const custom=calculate({...d,C13:'Custom',customInsulation:{k:.04,max:200,density:100,basis:'Custom'}},lib);assert.equal(custom.errors.length,0);
console.log('PASS: all 15 numeric workbook summary outputs match cached results; all four shapes, demand precedence, PCM, conductivity curves, custom properties and invalid-input boundaries pass.');
