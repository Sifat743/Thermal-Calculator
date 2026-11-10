const LIBRARY = {
  "storage": [
    {
      "name": "Average dry sand",
      "type": "Sensible",
      "density": 1555,
      "cp": 0.8,
      "latent": null,
      "melt": 1700,
      "source": "10.1038/s41598-025-93054-w"
    },
    {
      "name": "APY local quartz-rich sand",
      "type": "Sensible",
      "density": 1607,
      "cp": 0.75,
      "latent": null,
      "melt": null,
      "source": "10.1038/s41598-025-93054-w"
    },
    {
      "name": "Rock / gravel",
      "type": "Sensible",
      "density": 2560,
      "cp": 0.88,
      "latent": null,
      "melt": null,
      "source": "10.3390/su10010191"
    },
    {
      "name": "Concrete",
      "type": "Sensible",
      "density": 2200,
      "cp": 0.75,
      "latent": null,
      "melt": null,
      "source": "10.1016/j.jobe.2023.108302"
    },
    {
      "name": "Water",
      "type": "Sensible",
      "density": 1000,
      "cp": 4.19,
      "latent": 333.5,
      "melt": 0,
      "source": "https://iapws.org/relguide/Ice-Rev2009.pdf"
    },
    {
      "name": "Paraffin : n-docosane (C22)",
      "type": "Latent",
      "density": 763,
      "cp": 1.69,
      "latent": 249,
      "melt": 44,
      "source": "https://www.tmt-ipe.com/_files/ugd/4ab2a3_20ddb338c49240f9b8580b315a1e70d2.pdf"
    },
    {
      "name": "Salt hydrate : CaCl2·6H2O",
      "type": "Latent",
      "density": 1562,
      "cp": 1.42,
      "latent": 190.8,
      "melt": 29.5,
      "source": "10.1016/j.applthermaleng.2024.123618"
    },
    {
      "name": "Paraffin : n-eicosane (C20)",
      "type": "Latent",
      "density": 778,
      "cp": 1.92,
      "latent": 247,
      "melt": 36.4,
      "source": "https://www.tmt-ipe.com/_files/ugd/4ab2a3_20ddb338c49240f9b8580b315a1e70d2.pdf"
    },
    {
      "name": "Paraffin : n-octacosane (C28)",
      "type": "Latent",
      "density": 779,
      "cp": 1.59,
      "latent": 253,
      "melt": 61.6,
      "source": "https://www.tmt-ipe.com/_files/ugd/4ab2a3_20ddb338c49240f9b8580b315a1e70d2.pdf"
    },
    {
      "name": "Salt hydrate : Na2SO4·10H2O",
      "type": "Latent",
      "density": 1485,
      "cp": 1.8,
      "latent": 252,
      "melt": 32,
      "source": "10.3390/en14165195"
    },
    {
      "name": "Salt hydrate : Na2HPO4·12H2O",
      "type": "Latent",
      "density": 1552,
      "cp": 1.9,
      "latent": 270,
      "melt": 40,
      "source": "10.3390/en14165195"
    },
    {
      "name": "sss",
      "type": "Sensible",
      "density": 556,
      "cp": 5,
      "latent": 855,
      "melt": 55,
      "source": null
    }
  ],
  "insulation": [
    {
      "name": "Aerogel : ArmaGel HT",
      "k": 0.021,
      "test": 24,
      "max": 650,
      "density": 180,
      "basis": "Curve",
      "source": "https://www.armacell.com/en-US/product/technical-specs/armagel-ht"
    },
    {
      "name": "PIR : Celotex CW4000 FF",
      "k": 0.022,
      "test": null,
      "max": null,
      "density": null,
      "basis": "Reference",
      "source": "https://celotex.co.uk/assets/tds-uk-insuk0011b-en-celotex-cw4000-ff.pdf"
    },
    {
      "name": "PUR : rigid board (40 kg/m³)",
      "k": 0.023,
      "test": 22.5,
      "max": null,
      "density": 40,
      "basis": "Reference",
      "source": "https://www.fao.org/4/y5013e/y5013e08.htm"
    },
    {
      "name": "PUR : foamed in place",
      "k": 0.026,
      "test": 22.5,
      "max": null,
      "density": null,
      "basis": "Reference",
      "source": "https://www.fao.org/4/y5013e/y5013e08.htm"
    },
    {
      "name": "EPS : BEWI S80",
      "k": 0.038,
      "test": null,
      "max": 80,
      "density": null,
      "basis": "Reference",
      "source": "https://www.bewi.com/products/drainageboard-eps/"
    },
    {
      "name": "Graphite EPS : BEWI EPS 70N",
      "k": 0.031,
      "test": null,
      "max": null,
      "density": 14.5,
      "basis": "Reference",
      "source": "https://www.bewi.com/products/eps-70n?lang=lt"
    },
    {
      "name": "XPS : BEWI 300 PM",
      "k": 0.035,
      "test": null,
      "max": null,
      "density": null,
      "basis": "Reference",
      "source": "https://www.bewi.com/products/drainage-board-xps/"
    },
    {
      "name": "Phenolic : Kooltherm K112",
      "k": 0.019,
      "test": null,
      "max": null,
      "density": null,
      "basis": "Reference",
      "source": "https://dop.kingspan.com/content/dam/kingspan/kil/products/kooltherm-k112-framing-board/kingspan-kooltherm-k112-brochure-en-gb-ie.pdf"
    },
    {
      "name": "Stone wool : ProRox SL 960",
      "k": 0.038,
      "test": 50,
      "max": 650,
      "density": 100,
      "basis": "Curve",
      "source": "https://brandportal.rockwool.com/original/gallery/39052/files/original/a798c80e-2294-42eb-bf21-25253dff9356.pdf"
    },
    {
      "name": "Basalt wool : MinWool 1260",
      "k": 0.033,
      "test": 24,
      "max": 650,
      "density": 96,
      "basis": "Curve",
      "source": "https://www.jm.com/content/dam/jm/global/en/oem/specialty/minwool_1200/JM_OEM_MinWool_1200_Board_DS.pdf"
    },
    {
      "name": "Basalt wool : MinWool 1280",
      "k": 0.033,
      "test": 24,
      "max": 650,
      "density": 128,
      "basis": "Curve",
      "source": "https://www.jm.com/content/dam/jm/global/en/oem/specialty/minwool_1200/JM_OEM_MinWool_1200_Board_DS.pdf"
    },
    {
      "name": "Glass wool : unfaced batts AU",
      "k": 0.036,
      "test": 23,
      "max": null,
      "density": null,
      "basis": "Reference",
      "source": "https://www.knaufinsulation.com/dopki-iframe"
    },
    {
      "name": "Glass wool : unfaced rolls AU",
      "k": 0.035,
      "test": 23,
      "max": null,
      "density": null,
      "basis": "Reference",
      "source": "https://www.knaufinsulation.com/dopki-iframe"
    },
    {
      "name": "Glass wool : foil-faced rolls AU",
      "k": 0.036,
      "test": 23,
      "max": null,
      "density": null,
      "basis": "Reference",
      "source": "https://www.knaufinsulation.com/dopki-iframe"
    },
    {
      "name": "Cellular glass : FOAMGLAS T4+",
      "k": 0.041,
      "test": null,
      "max": 430,
      "density": 110,
      "basis": "Reference",
      "source": "https://www.foamglas.com/-/media/project/foamglas/public/shared/files/certifications/b---common-certificates/epd-environmental-product-decl/epd-foamglas-t4plus-en.pdf"
    },
    {
      "name": "Calcium silicate : Thermo-1200 block",
      "k": 0.051,
      "test": 38,
      "max": 650,
      "density": null,
      "basis": "Curve",
      "source": "https://www.jm.com/content/dam/jm/global/en/insulation-systems/products/assets/data-sheet/jm-ind-thermo-1200-ds.pdf"
    },
    {
      "name": "AES fibre : Superwool Plus 128",
      "k": 0.05,
      "test": 200,
      "max": 1050,
      "density": 128,
      "basis": "Curve",
      "source": "https://www.morganthermalceramics.com/media/8946/superwool-plus-blankets_eng.pdf"
    },
    {
      "name": "Perlite : loose fill",
      "k": 0.047,
      "test": null,
      "max": null,
      "density": null,
      "basis": "Reference",
      "source": "https://www.fao.org/4/y5013e/y5013e08.htm"
    },
    {
      "name": "Cork : expanded slab",
      "k": 0.04,
      "test": 22.5,
      "max": 65,
      "density": 130,
      "basis": "Reference",
      "source": "https://www.fao.org/4/y5013e/y5013e08.htm"
    },
    {
      "name": "Cork : granulated loose fill",
      "k": 0.052,
      "test": 22.5,
      "max": 65,
      "density": 115,
      "basis": "Reference",
      "source": "https://www.fao.org/4/y5013e/y5013e08.htm"
    },
    {
      "name": "Cellulose : ISOCELL",
      "k": 0.038,
      "test": null,
      "max": null,
      "density": null,
      "basis": "Reference",
      "source": "https://www.isocell.com/en/cellulose-insulation"
    },
    {
      "name": "Wood fibre : STEICOflex 036",
      "k": 0.036,
      "test": null,
      "max": 100,
      "density": 50,
      "basis": "Reference",
      "source": "https://www.steico.com/fileadmin/user_upload/Public_Docs/EUR_en/EUR_en_Technical_Data_Sheets/1._Product_information_wood_fibre_insulation/STEICO_technical-data-sheet_flex-036_EUR_en_i.pdf"
    },
    {
      "name": "Hemp/cotton/flax : Biofib Trio",
      "k": 0.038,
      "test": null,
      "max": null,
      "density": 30,
      "basis": "Reference",
      "source": "https://www.biofib.com/wp-content/uploads/biofib-trio-fdes-60.pdf"
    },
    {
      "name": "Sheep wool : Thermafleece CosyWool",
      "k": 0.039,
      "test": null,
      "max": null,
      "density": null,
      "basis": "Reference",
      "source": "https://thermafleece.com/wp-content/uploads/2023/05/Thermafleece-CosyWool-Roll-Factsheet-2.22.pdf"
    },
    {
      "name": "EPDM foam : HT/ArmaFlex sheets",
      "k": 0.045,
      "test": 40,
      "max": 150,
      "density": null,
      "basis": "Formula",
      "source": "https://www.armacell.com/en-GB/product/technical-specs/htarmaflex"
    },
    {
      "name": "Vacuum panel : va-Q-vip",
      "k": 0.008,
      "test": 10,
      "max": null,
      "density": null,
      "basis": "Reference",
      "source": "https://www.va-q-tec.com/en/products/va-q-vip/"
    },
    {
      "name": "Vermiculite : loose fill 80–96 kg/m³",
      "k": 0.064,
      "test": null,
      "max": null,
      "density": null,
      "basis": "Reference",
      "source": "https://vermiculite.org/wp-content/uploads/2014/09/Vermiculite-Data.pdf"
    },
    {
      "name": "Custom",
      "k": null,
      "test": null,
      "max": null,
      "density": null,
      "basis": null,
      "source": null
    },
    {
      "name": "sdd",
      "k": 555,
      "test": 44,
      "max": 55,
      "density": 4,
      "basis": 4,
      "source": null
    }
  ],
  "curves": [
    {
      "name": "Aerogel : ArmaGel HT",
      "temperature": 24,
      "k": 0.021
    },
    {
      "name": "Aerogel : ArmaGel HT",
      "temperature": 38,
      "k": 0.022
    },
    {
      "name": "Aerogel : ArmaGel HT",
      "temperature": 93,
      "k": 0.023
    },
    {
      "name": "Aerogel : ArmaGel HT",
      "temperature": 149,
      "k": 0.025
    },
    {
      "name": "Aerogel : ArmaGel HT",
      "temperature": 204,
      "k": 0.029
    },
    {
      "name": "Aerogel : ArmaGel HT",
      "temperature": 260,
      "k": 0.032
    },
    {
      "name": "Aerogel : ArmaGel HT",
      "temperature": 316,
      "k": 0.036
    },
    {
      "name": "Aerogel : ArmaGel HT",
      "temperature": 371,
      "k": 0.043
    },
    {
      "name": "Stone wool : ProRox SL 960",
      "temperature": 50,
      "k": 0.038
    },
    {
      "name": "Stone wool : ProRox SL 960",
      "temperature": 100,
      "k": 0.044
    },
    {
      "name": "Stone wool : ProRox SL 960",
      "temperature": 150,
      "k": 0.05
    },
    {
      "name": "Stone wool : ProRox SL 960",
      "temperature": 200,
      "k": 0.057
    },
    {
      "name": "Stone wool : ProRox SL 960",
      "temperature": 250,
      "k": 0.065
    },
    {
      "name": "Stone wool : ProRox SL 960",
      "temperature": 300,
      "k": 0.075
    },
    {
      "name": "Basalt wool : MinWool 1260",
      "temperature": -4,
      "k": 0.032
    },
    {
      "name": "Basalt wool : MinWool 1260",
      "temperature": 24,
      "k": 0.033
    },
    {
      "name": "Basalt wool : MinWool 1260",
      "temperature": 38,
      "k": 0.036
    },
    {
      "name": "Basalt wool : MinWool 1260",
      "temperature": 93,
      "k": 0.043
    },
    {
      "name": "Basalt wool : MinWool 1260",
      "temperature": 149,
      "k": 0.052
    },
    {
      "name": "Basalt wool : MinWool 1260",
      "temperature": 204,
      "k": 0.061
    },
    {
      "name": "Basalt wool : MinWool 1260",
      "temperature": 260,
      "k": 0.076
    },
    {
      "name": "Basalt wool : MinWool 1260",
      "temperature": 316,
      "k": 0.091
    },
    {
      "name": "Basalt wool : MinWool 1260",
      "temperature": 371,
      "k": 0.108
    },
    {
      "name": "Basalt wool : MinWool 1280",
      "temperature": -4,
      "k": 0.032
    },
    {
      "name": "Basalt wool : MinWool 1280",
      "temperature": 24,
      "k": 0.033
    },
    {
      "name": "Basalt wool : MinWool 1280",
      "temperature": 38,
      "k": 0.036
    },
    {
      "name": "Basalt wool : MinWool 1280",
      "temperature": 93,
      "k": 0.043
    },
    {
      "name": "Basalt wool : MinWool 1280",
      "temperature": 149,
      "k": 0.052
    },
    {
      "name": "Basalt wool : MinWool 1280",
      "temperature": 204,
      "k": 0.061
    },
    {
      "name": "Basalt wool : MinWool 1280",
      "temperature": 260,
      "k": 0.071
    },
    {
      "name": "Basalt wool : MinWool 1280",
      "temperature": 316,
      "k": 0.081
    },
    {
      "name": "Basalt wool : MinWool 1280",
      "temperature": 371,
      "k": 0.092
    },
    {
      "name": "Calcium silicate : Thermo-1200 block",
      "temperature": 38,
      "k": 0.051
    },
    {
      "name": "Calcium silicate : Thermo-1200 block",
      "temperature": 93,
      "k": 0.054
    },
    {
      "name": "Calcium silicate : Thermo-1200 block",
      "temperature": 149,
      "k": 0.057
    },
    {
      "name": "Calcium silicate : Thermo-1200 block",
      "temperature": 204,
      "k": 0.062
    },
    {
      "name": "Calcium silicate : Thermo-1200 block",
      "temperature": 260,
      "k": 0.067
    },
    {
      "name": "Calcium silicate : Thermo-1200 block",
      "temperature": 316,
      "k": 0.073
    },
    {
      "name": "Calcium silicate : Thermo-1200 block",
      "temperature": 371,
      "k": 0.081
    },
    {
      "name": "AES fibre : Superwool Plus 128",
      "temperature": 200,
      "k": 0.05
    },
    {
      "name": "AES fibre : Superwool Plus 128",
      "temperature": 400,
      "k": 0.08
    },
    {
      "name": "AES fibre : Superwool Plus 128",
      "temperature": 600,
      "k": 0.12
    },
    {
      "name": "AES fibre : Superwool Plus 128",
      "temperature": 800,
      "k": 0.18
    },
    {
      "name": "AES fibre : Superwool Plus 128",
      "temperature": 1000,
      "k": 0.25
    }
  ],
  "walls": [
    {
      "name": "Stainless steel 304",
      "density": 7900,
      "k": 15,
      "family": "Metal",
      "max": null,
      "note": "EN hot-rolled / plate proof strength at 20°C; expansion 20–100°C.",
      "source": "https://www.outokumpu.com/en/products/product-ranges/-/media/files/products/core/outokumpu-core-range-datasheet.pdf",
      "strength": 210,
      "modulus": 200,
      "expansion": 16
    },
    {
      "name": "Stainless steel 316L",
      "density": 8000,
      "k": 15,
      "family": "Metal",
      "max": null,
      "note": "ASTM annealed plate minimum proof strength at 20°C; expansion 20–100°C.",
      "source": "https://www.outokumpu.com/-/media/files/products/supra/outokumpu-supra-range-datasheet.pdf",
      "strength": 170,
      "modulus": 200,
      "expansion": 16
    },
    {
      "name": "Carbon steel S275",
      "density": 7850,
      "k": 53.334,
      "family": "Metal",
      "max": null,
      "note": "20°C properties; yield depends on product thickness.",
      "source": "https://www.steelconstruction.info/images/archive/8/85/20140311164422%21CFT_Design_Guide_March_2014.pdf",
      "strength": 275,
      "modulus": 210,
      "expansion": 12
    },
    {
      "name": "Copper C11000 : annealed",
      "density": 8910,
      "k": 391.1,
      "family": "Metal",
      "max": null,
      "note": "Annealed C11000: yield 76 MPa; reference E 17,000 ksi converted to GPa.",
      "source": "https://alloys.copper.org/alloy/C11000",
      "strength": 76,
      "modulus": 117.2,
      "expansion": 16.9
    },
    {
      "name": "Aluminium 6061-T6",
      "density": 2712.63,
      "k": 167,
      "family": "Metal",
      "max": null,
      "note": "20°C E from thyssenkrupp; Hydro extrusion yield.",
      "source": "https://www.hydro.com/globalassets/01-products--services/extruded-profiles/americas/ena-resources/alloy-data-sheets/hydro_2019_data_sheet_6061.pdf",
      "strength": 240,
      "modulus": 70,
      "expansion": 23
    },
    {
      "name": "Wood : softwood reference",
      "density": 420,
      "k": null,
      "family": "Timber",
      "max": null,
      "note": "No generic bending design: specify timber grade / moisture / fire design.",
      "source": "https://www.egger.com/get_download/425612c2-67cb-42fa-a594-9a20610908fe/TD_EcoBox_Kurzinfo_en.pdf",
      "strength": null,
      "modulus": null,
      "expansion": null
    },
    {
      "name": "Wood board : EGGER OSB 3",
      "density": 600,
      "k": 0.13,
      "family": "Timber",
      "max": null,
      "note": "Panel orientation / hot moisture behaviour need separate design.",
      "source": "https://www.egger.com/get_download/c1bfe25a-667d-4606-9649-cddc39bf80f9/UKCA-DoC-734-00-EGGER-OSB3E0-en.pdf",
      "strength": null,
      "modulus": null,
      "expansion": null
    },
    {
      "name": "Clay brick : English Red",
      "density": 1700,
      "k": 0.45,
      "family": "Masonry",
      "max": null,
      "note": "Masonry requires mortar, reinforcement and stability design.",
      "source": "https://www.wienerberger.co.uk/content/dam/wienerberger/united-kingdom/marketing/documents-magazines/product-data-sheets/brick/new-versions/UK_MKT_DOC_BRI_11411410_English_Red.pdf",
      "strength": null,
      "modulus": null,
      "expansion": null
    }
  ],
  "defaults": {
    "C5": 25,
    "C6": 10,
    "C7": 85,
    "C8": null,
    "C9": 100,
    "C10": 30,
    "C11": "Average dry sand",
    "C12": 1,
    "C13": "Graphite EPS : BEWI EPS 70N",
    "C14": 20,
    "C15": 15,
    "C16": "Maximum",
    "C17": "Cylinder",
    "C18": 2,
    "C19": 2,
    "C20": 5,
    "C21": 2.5,
    "C22": "Carbon steel S275",
    "C23": "Stainless steel 304",
    "C24": null,
    "C25": null
  },
  "baseline": {
    "G5": 59.02777777777778,
    "G6": 59.02777777777778,
    "G7": 59.02777777777778,
    "G8": 3794.6428571428573,
    "G9": 2.440284795590262,
    "G10": 73.10720092244321,
    "G11": 3.996461985566118,
    "G12": 0.951301369893724,
    "G13": 13.793869863459,
    "G14": 54.679227331955715,
    "G15": 4748.275187644742,
    "G16": 76.38897627579632,
    "G17": 9345.183653500737,
    "G18": 17901.8955681518,
    "G19": 5.179396625249756,
    "G20": "Available solar energy",
    "G21": "Ready",
    "G22": "Screening : service limit unverified",
    "G23": "Preliminary estimate"
  }
};
if(typeof module!=="undefined") module.exports=LIBRARY;
