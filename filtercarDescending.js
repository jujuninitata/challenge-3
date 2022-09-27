const listmobil = require("./data.js")

const sortmobildesc = (mobil) =>
{
  for (let i=0; i<mobil.length;i++)
  {
    for (let j=0; j<mobil.length-1; j++)
    {
      let tempmobil;
      if(mobil[j].year < mobil[j+1].year)
      {
        tempmobil = mobil[j];
        mobil[j] = mobil[j+1];
        mobil[j+1]= tempmobil;
      }
    }
  }
  return mobil
}

console.log(sortmobildesc(listmobil))

