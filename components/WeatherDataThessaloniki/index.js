import React, {useState, useEffect} from 'react'
import {Box, Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';
import useWeather from "../../hooks/useWeather";
import Loader from "../Loader";
import CurrentWrapper from "./CurrentWrapper";
import SelectedWrapper from "./SelectedWrapper";
import ChartWrapper from "./ChartWrapper";

const WeatherDataThessaloniki = () => {
    const { weatherData, isLoading } = useWeather()
    const [chartWeatherData, setChartWeatherData] = useState([])

    useEffect(() => {
        createChartData()
    }, [weatherData]);

    const createChartData = () => {
        const chartData = weatherData?.daily?.map((item) => {
            const timestamp = item?.dt * 1000;
            const date = new Date(timestamp);
            return {
                name: `${date.getDate()}/${date.getMonth()}`,
                date: Math.floor(item?.temp?.max)
            };
        });

        setChartWeatherData(chartData)
    };

    return (
        <Box my={'25px'}>
            <Box>
                {
                    isLoading ?
                    <Loader /> :
                    <Box>
                        <Box as={'h1'} textStyle={'h1'} bg={'white'} p={'20px'} borderRadius={'15px'} mb={'5px'}>
                            {"Thessaloniki"}
                        </Box>

                        <Tabs pb={'10px'}>
                            <TabList bg={'white'} borderRadius={'15px'} p={'10px 20px'}>
                                <Tab>Today</Tab>
                                <Tab>Select Date</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel p={'15px 0 0 0'}>
                                    <CurrentWrapper weatherData={weatherData} />
                                </TabPanel>
                                <TabPanel p={'15px 0 0 0'}>
                                    <SelectedWrapper weatherData={weatherData} />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                        <ChartWrapper weatherData={chartWeatherData} />
                    </Box>
                }
            </Box>
        </Box>

    )
}

export default WeatherDataThessaloniki;
