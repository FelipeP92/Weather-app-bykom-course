import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    {city: 'Buenos Aires' ,country:'Argentina'},
    {city: 'Roma', country:'Italia'},
    {city: 'Bogota', country:'Colombia'},
    {city: 'Ciudad de Mexico', country:'Mexico'}
]

test('CityList render', async () => {
    //AAA
    //Arrange
    //Act


    //render
    const { findAllByRole } = render(<CityList cities ={cities} />)

    //Assert

    const items = await findAllByRole('listitem')


    expect(items).toHaveLength(4)
})


test ('CityList click on item', async () => {
    const fnClickOnItem = jest.fn() 

    const { findAllByRole } = render(<CityList  cities={cities} onClickCity = {fnClickOnItem} />)

    const item = await findAllByRole('listitem')

    fireEvent.click(item[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})