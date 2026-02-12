import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test/test-utils'
import MembersList from './MembersList'
import type { Member } from '../../../api/famly'

const mockMembers: Member[] = [
  { id: '1', name: 'Homer', role: 'Parent' },
  { id: '2', name: 'Bart', role: 'Kid' },
  { id: '3', name: 'Santa\'s Little Helper', role: 'Pet' },
]

describe('MembersList', () => {
  it('renders the members section title', () => {
    render(<MembersList members={mockMembers} />)
    expect(screen.getByText('Members')).toBeInTheDocument()
  })

  it('renders all members with their names and roles', () => {
    render(<MembersList members={mockMembers} />)
    
    // Check for member names (in bold elements)
    expect(screen.getByText('Homer')).toBeInTheDocument()
    expect(screen.getByText('Bart')).toBeInTheDocument()
    expect(screen.getByText('Santa\'s Little Helper')).toBeInTheDocument()
    
    // Use a more flexible approach for the full text content
    const container = screen.getByText('Homer').closest('p')
    expect(container).toHaveTextContent('Homer - Parent')
    
    const bartContainer = screen.getByText('Bart').closest('p')
    expect(bartContainer).toHaveTextContent('Bart - Kid')
    
    const petContainer = screen.getByText('Santa\'s Little Helper').closest('p')
    expect(petContainer).toHaveTextContent('Santa\'s Little Helper - Pet')
  })

  it('renders empty list when no members provided', () => {
    render(<MembersList members={[]} />)
    expect(screen.getByText('Members')).toBeInTheDocument()
    expect(screen.queryByText(/Homer/)).not.toBeInTheDocument()
  })
})