const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org./data/2.5/weather?lat=${lat}&lon=${lng}&appid=5a3e2cff52bf18594c8ecc101db1d40e`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}