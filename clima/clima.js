const axios = require('axios');

let getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=20a8841d45b57368cc4b7754e8e9698b`);

    return resp.data.main.temp;


}

module.exports = {
    getClima
}