import { render } from '@testing-library/react'
import { Sample } from '../Sample'

describe('Sample', () => {
  test('should always be truthy', () => {
    expect(true).toBeTruthy()
  })
  test('should have sample text', () => {
    const { getByText } = render(<Sample />)
    expect(getByText('This is a Sample.')).toBeTruthy()
  })
})
