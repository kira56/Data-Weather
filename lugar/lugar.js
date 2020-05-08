const axios = require('axios');

module.exports.getLugarLatLng = async (dir) => {
    const encodeUrl = encodeURI(dir)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '5497c389fdmsha5a6a69df1d05ffp112c5bjsn6908a034d352' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon
    return {
        direccion,
        lat,
        lng
    }

}
