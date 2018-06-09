const axios = require('axios');


let getLugarLatLng = async(direccion) => {

    let encodeURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyBvu0jNPYADpd19P2lD2Hoe-txacuN1qyY`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No existe ${direccion}`);
    }

    let location = resp.data.results[0];

    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    }

}

module.exports = {
    getLugarLatLng
}