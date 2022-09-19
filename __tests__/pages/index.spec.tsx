import { render } from '@testing-library/react'

import Home from '@/pages'

describe('/', () => {
  test('always should be truthy', () => {
    expect(true).toBeTruthy()
  })
  test('snapshot', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})
