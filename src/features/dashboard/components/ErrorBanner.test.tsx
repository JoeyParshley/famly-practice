import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test/test-utils'
import ErrorBanner from './ErrorBanner'

describe('ErrorBanner', () => {
  it('renders the error message', () => {
    const errorMessage = 'Something went wrong'
    render(<ErrorBanner error={errorMessage} />)
    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument()
  })

  it('renders as an error alert', () => {
    render(<ErrorBanner error="test error" />)
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveClass('MuiAlert-standardError')
  })
})