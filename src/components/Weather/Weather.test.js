import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Weather render', async () => {
    //AAA Arrange, act, assert

    const temperature = 10

    const { findByRole } = render(<Weather temperature={temperature} state='clear' />)

    const temp = await findByRole('heading')

    expect(temp).toHaveTextContent('10')
})