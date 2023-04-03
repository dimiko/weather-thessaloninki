import React, from 'react'
import { Box, Flex, GridItem } from '@chakra-ui/react';

const WeatherCurrentData = ({text, value, data}) => {

    return (
        data ?
            <GridItem>
                <Flex direction={'column'} border={'1px solid rgba(128,128,128, .2)'} borderRadius={'10px'} p={'25px 15px'}>
                    <Box textStyle={'h2'} fontWeight={'700'}>
                        {value}
                    </Box>
                    <Box color={'grey'} fontWeight={'600'}>
                        {text}
                    </Box>
                </Flex>
            </GridItem> : null
    )
}

export default WeatherCurrentData;
