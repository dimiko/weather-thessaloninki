import React, {useState} from 'react'
import {Box} from '@chakra-ui/react';
import LineChartDay from '/components/WeatherDataThessaloniki/LineChartDay';

const ChartWrapper = ({ weatherData }) => {

    return (
        <Box bg={'white'} p={'20px'} borderRadius={'15px'} mb={'5px'}>
            <Box textStyle={'title'} pl={'10px'} pb={'12px'}>{'Weekly Variation'}</Box>
            <Box color={'grey'} pl={'10px'} pb={'4px'}>{'Temperature'}</Box>
            <LineChartDay weatherData={weatherData} />
        </Box>

    )
}

export default ChartWrapper;
