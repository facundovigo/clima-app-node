const axios = require('axios');

const getLugarLatLng = async(dir) => {


    const encodeUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': 'efef6612ddmshfd4a600466fd8efp15de0djsn0764c787811e' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}