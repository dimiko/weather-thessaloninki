import axios from 'axios'

export const getWeather = () => {
    return axios ({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric`,
    })
}





