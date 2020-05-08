const axios = require('axios')

module.exports.getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=dbb6bcb4afd10c9bb21899677e6ff017&units=metric`)
    return resp.data.main.temp;
}

