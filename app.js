'use strtct'

const lugar = require('./lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// argv.direccion

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)
//     // lugar.getLugarLatLng(argv.direccion).then(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(arg.direccion)
    .then(console.log)
    .catch(console.log);