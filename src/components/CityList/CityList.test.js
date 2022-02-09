import React from 'react'
import { render } from '@testing-library/react'
import CityList from './CityList'

test('CityList render', async () => {
    //AAA
    //Arrange
    //Act
    const cities = [
        {city: 'Buenos Aires' ,country:'Argentina'},
        {city: 'Roma', country:'Italia'},
        {city: 'Bogota', country:'Colombia'},
        {city: 'Ciudad de Mexico', country:'Mexico'}
    ]
    

    //render
    const { findAllByRole } = render(<CityList cities ={cities} />)

    //Assert

    const items = await findAllByRole('listitem')


    expect(items).toHaveLength(4)
})