import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'



export default {
    title: 'CityList',
    component: CityList
}


const cities = [
    { city: 'Buenos Aires', country: 'Argentina' },
    { city: 'Roma', country: 'Italia' },
    { city: 'Bogota', country: 'Colombia' },
    { city: 'Ciudad de Mexico', country: 'Mexico' }
]





export const CitylistExample = () => <CityList cities={cities} onClickCity = {action('Click in city')} />