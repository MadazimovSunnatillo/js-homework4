let Nom = prompt('Nomatonro navised:');
let Sol = +prompt("Soli tavalludatonro navised");

let SoliTavallud =(2022-Sol);
let Xafta = ((Sol*365.25)/7);
let Ruz =Sol*365.25;
let Soat= Sol*365.25*24;
let Daqiqa = Sol * 365.25 * 24 * 60; 
let Soniya =Sol * 365.25 * 24 * 60*60;
let MilliSekund = Sol * 365.25 * 24 * 60 * 60 * 1000;

alert(
  `Nomaton:${Nom}.
Solaton:${Sol}.
Baroi didani ma'lumotho Tugmaro zer kuned!!`
);
alert(
  "Chan sol umr didaed:"
  + Math.floor(SoliTavallud) + "\n" +

  "Chan xafta umr didaed:"
  + Math.floor(Xafta)  + "\n" +
  
  "Chan ruz umr didaed:"
  + Math.floor(Ruz) + "\n" +
  
  "Chan soat umr didaed:"
  + Math.floor(Soat) + "\n" +
  
  "Chan daqiqa umr didaed:"
  + Math.floor(Daqiqa) + "\n" +
  
  "Chan soniya umr didaed:"
  + Math.floor(Soniya) + "\n" +
  
  "Chan millisekund umr didaed:"
  + Math.floor(MilliSekund) + "\n"
)
