const axios = require('axios');

const getClima = async(lat,lng)=>{

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ee9d71919701be3b75e9fc3084cf7085`)
    
    return resp.data.main.temp;
}



module.exports = {

    getClima
}