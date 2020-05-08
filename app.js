const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        des: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
// argv.direccion
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

// clima.getClima(41.660000, -4.720000)
//     .then(console.log)
//     .catch(console.log)

// const getInfo = async (direccion) => {
//     const dir = await lugar.getLugarLatLng(direccion)
//     const temp = await clima.getClima(41.660000, -4.720000);
//     if (dir === null) {
//        return  throw new Error('Hubo un error')
//     } else {
//         return console.log(`El temperatura de ${direccion} es de ${temp}`)
//     }
//     // return ubicacion.data.name

//    
// }
const getInfo = async (direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng)
        return `La temperatura de ${coords.direccion} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar la temperatura de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)


