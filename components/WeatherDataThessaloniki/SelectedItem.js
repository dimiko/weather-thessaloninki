import React, {useState} from 'react'
import {Box, Grid} from '@chakra-ui/react';
import WeatherCurrentData from "./WeatherCurrentData";

const SelectedItem = ({ selectedDayData, weatherData }) => {

    return (
        <Box p={'20px'} borderRadius={'15px'} bg={'white'}>
            <Box as={'h1'} textStyle={'h1'} fontWeight={'700'} pl={'4px'} pb={'8px'}>
                {(Math.floor(weatherData?.daily[selectedDayData]?.temp?.day) + Math.floor(weatherData?.daily[selectedDayData]?.temp?.night))}{'°C'}
            </Box>
            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={6}>
                <WeatherCurrentData text={'Feels like'} data={weatherData?.daily[selectedDayData]?.feels_like} value={`${Math.floor((weatherData?.daily[selectedDayData]?.feels_like?.day + weatherData?.daily[selectedDayData]?.feels_like?.night)/2)}°C`} />
                <WeatherCurrentData text={'Wind'} data={weatherData?.daily[selectedDayData]?.wind_speed} value={`${weatherData?.daily[selectedDayData]?.wind_speed} m/s`} />
                <WeatherCurrentData text={'Wind Gust'} data={weatherData?.daily[selectedDayData]?.wind_gust} value={`${weatherData?.daily[selectedDayData]?.wind_gust} m/s`} />
                <WeatherCurrentData text={'Wind Deg'} data={weatherData?.daily[selectedDayData]?.wind_deg} value={weatherData?.daily[selectedDayData]?.wind_deg} />
                <WeatherCurrentData text={'Humidity'} data={weatherData?.daily[selectedDayData]?.humidity} value={`${weatherData?.daily[selectedDayData]?.humidity}%`} />
                <WeatherCurrentData text={'Pressure'} data={weatherData?.daily[selectedDayData]?.pressure} value={`${weatherData?.daily[selectedDayData]?.pressure}mbar`} />
            </Grid>
        </Box>
    )
}

export default SelectedItem;
