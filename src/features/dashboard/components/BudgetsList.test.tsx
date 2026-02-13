import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test/test-utils'
import BudgetsList from './BudgetsList'
import type { Budget } from '../../../api/famly'

const mockBudgets: Budget[] = [
  { id: '1', category: 'Groceries', planned: 600, actual: 520 },
  { id: '2', category: 'Dining', planned: 200, actual: 265 },
]

describe('BudgetsList', () => {
  it('renders the budgets section title', () => {
    render(<BudgetsList budgets={mockBudgets} />)
    expect(screen.getByText('Budgets')).toBeInTheDocument()
  })

  it('renders budget data correctly', () => {
    render(<BudgetsList budgets={mockBudgets} />)
    
    // Check for budget category names
    expect(screen.getByText('Groceries')).toBeInTheDocument()
    expect(screen.getByText('Dining')).toBeInTheDocument()
    
    // Use textContent to check the full formatted content
    const groceriesContainer = screen.getByText('Groceries').closest('p')
    expect(groceriesContainer).toHaveTextContent('Groceries — 520 / 600')
    
    const diningContainer = screen.getByText('Dining').closest('p')
    expect(diningContainer).toHaveTextContent('Dining — 265 / 200')
  })

  it('shows actual vs planned spending format', () => {
    render(<BudgetsList budgets={[mockBudgets[0]]} />)
    
    // Should show "actual / planned" format
    expect(screen.getByText(/520 \/ 600/)).toBeInTheDocument()
  })
})