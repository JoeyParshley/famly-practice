import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test/test-utils'
import Spinner from './Spinner'

describe('Spinner', () => {
  it('renders loading text', () => {
    render(<Spinner />)
    expect(screen.getByText('Loading ...')).toBeInTheDocument()
  })

  it('renders a progress indicator', () => {
    render(<Spinner />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })
})