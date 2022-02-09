import React from 'react'
import Weather from './Weather'


export default {
    title: 'weather',
    component: Weather
}

export const WeatherExampleCloudy = () => <Weather temperature={10} state = 'cloud'/>