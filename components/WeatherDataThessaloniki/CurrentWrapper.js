import React, {useState} from 'react'
import {Box, Flex, Grid, Image} from '@chakra-ui/react';
import WeatherCurrentData from "./WeatherCurrentData";

const CurrentWrapper = ({ weatherData }) => {

    return (
        <Box>
            <Flex justifyContent={'space-between'} p={'20px'} borderRadius={'15px'} mb={'5px'} bg={'white'}>
                <Box>
                    <Box as={'h1'} textStyle={'h1'} fontWeight={'700'}>
                        {Math.floor(weatherData?.current?.temp)}{'°C'}
                    </Box>
                    <Box color={'grey'}>
                        {weatherData?.current?.weather[0]?.main}{' - '}{weatherData?.current?.weather[0]?.description}
                    </Box>
                </Box>
                <Image w={'60px'} objectFit={'cover'} src={`https://openweathermap.org/img/wn/${weatherData?.current?.weather[0]?.icon}.png`} />
            </Flex>
            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={6} p={'20px'} borderRadius={'15px'} bg={'white'}>
                <WeatherCurrentData text={'Feels like'} data={weatherData?.current?.feels_like} value={`${Math.floor(weatherData?.current?.feels_like)}°C`} />
                <WeatherCurrentData text={'Wind'} data={weatherData?.current?.wind_speed} value={`${weatherData?.current?.wind_speed} m/s`} />
                <WeatherCurrentData text={'Wind Gust'} data={weatherData?.current?.wind_gust} value={`${weatherData?.current?.wind_gust} m/s`} />
                <WeatherCurrentData text={'Wind Deg'} data={weatherData?.current?.wind_deg} value={weatherData?.current?.wind_deg} />
                <WeatherCurrentData text={'Humidity'} data={weatherData?.current?.humidity} value={`${weatherData?.current?.humidity}%`} />
                <WeatherCurrentData text={'Pressure'} data={weatherData?.current?.pressure} value={`${weatherData?.current?.pressure}mbar`} />
            </Grid>
        </Box>

    )
}

export default CurrentWrapper;
