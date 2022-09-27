const listmobil = require("./data.js")
    // const filterCarByAvailability = (listmobil) =>
// {
//     let hasilfilter = [];
//     for (let i=0;i < listmobil.length; i++)
//     {
//         if(listmobil[i].available === true)
//         {
//            hasilfilter.push(listmobil[i])
//         }
//     }
//     return hasilfilter;
// }

const resultfilter = listmobil.filter(function(mobil)
{
    return mobil.available === true;
})

//filterCarByAvailability(listmobil);
console.log(resultfilter)
