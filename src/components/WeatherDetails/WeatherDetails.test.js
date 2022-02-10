import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetail from './WeatherDetail'

test('WeatherDetails render', async () => {
    const { findByText} = render(<WeatherDetail wind={10} humidity={80} />)

    const wind = await findByText(/10/)

    const humidity = await findByText(/80/)

    
    expect(wind).toHaveTextContent('Viento: 10 Km/h')
    expect(humidity).toHaveTextContent('Humedad: 80%')
})