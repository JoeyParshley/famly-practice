import { describe, it, expect } from 'vitest'
import { render, screen } from '../test/test-utils'
import AppHeader from './AppHeader'

describe('AppHeader', () => {
  it('renders the app title', () => {
    render(<AppHeader />)
    expect(screen.getByText('FAMLY')).toBeInTheDocument()
  })

  it('renders as an h4 element', () => {
    render(<AppHeader />)
    const header = screen.getByText('FAMLY')
    expect(header.tagName).toBe('H4')
  })
})