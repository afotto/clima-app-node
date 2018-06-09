const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Ciudad a consultar',
        demand: true
    }
}).argv;


//console.log(argv.direccion);


// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         //console.log(resp);
//         return clima.getClima(resp.lat, resp.lng);
//     })
//     .then(temp => {
//         console.log(temp);
//     })
//     .catch(e => {
//         console.log(e);
//     });

let getInfo = async(dir) => {

    try {
        coords = await lugar.getLugarLatLng(dir);
        temp = await clima.getClima(coords.lat, coords.lng);

        return `La temperatura en ${coords.direccion} es de: ${temp}`;
    } catch (e) {
        return `No se pudo determinar la temp en: ${dir}`;
    }

}

getInfo(argv.direccion)
    .then(ret => {
        console.log(ret);
    })
    .catch(e => console.log(e));