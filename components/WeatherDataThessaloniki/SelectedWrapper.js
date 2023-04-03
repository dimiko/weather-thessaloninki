import React, {useState} from 'react'
import {Box, Button, Flex} from '@chakra-ui/react';
import SelectedItem from "./SelectedItem";

const SelectedWrapper = ({ weatherData }) => {
    const [selectedDayData, setSelectedDayData] = useState(0)

    const dataDaySelected = (dataDay) => {
        setSelectedDayData(dataDay)
    }

    return (
    <Box>
        <Box overflow={'hidden'} pb={'12px'}>
            <Flex overflowX={'scroll'}>
                {
                    weatherData?.daily?.map((day, index) => {
                        const timestamp = day?.dt * 1000;
                        const date = new Date(timestamp);
                        const today = new Date();

                        if (date.getDate() === today.getDate() && date.getMonth() + 1 === today.getMonth() + 1) {

                        }else {
                            return (
                                <Button key={index} minW={'auto'} bg={'white'} mr={'6px'} onClick={() => dataDaySelected(index)}>{date.getDate()}{' '}{date.toLocaleString('default', { month: 'long' })}</Button>
                            )
                        }
                    })
                }
            </Flex>
        </Box>

        {
            selectedDayData ? <SelectedItem weatherData={weatherData} selectedDayData={selectedDayData} /> : null
        }
    </Box>

    )
}

export default SelectedWrapper;
