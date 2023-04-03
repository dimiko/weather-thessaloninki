import React, {useState} from 'react'
import { Box } from '@chakra-ui/react';
import Container from "../components/Container";
import WeatherDataThessaloniki from "../components/WeatherDataThessaloniki";

export default function Home() {

  return (
      <Box bg={'mainBg'}>
          <Container>
              <WeatherDataThessaloniki />
          </Container>
      </Box>
  )
}
