import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './Cityinfo'

test('Cityinfo render', async () => {
    //AAA
    //Arrange
    //Act
    const city = 'Buenos Aires'
    const country = 'Argentina'

    //render
    const { findAllByRole } = render(<CityInfo city={city} country={country} />)

    //Assert

    const cityAndCountyComponent = await findAllByRole('heading')


    expect(cityAndCountyComponent[0]).toHaveTextContent(city)
    expect(cityAndCountyComponent[1]).toHaveTextContent(country)

})