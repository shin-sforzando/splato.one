import { render, screen } from '@testing-library/react'
import { Sample } from '@/components/Sample'

describe('Sample', () => {
  test('always should be truthy', () => {
    expect(true).toBeTruthy()
  })
  test('should have sample text', () => {
    render(<Sample />)
    expect(screen.getByText('This is a Sample.')).toBeInTheDocument()
  })
})
