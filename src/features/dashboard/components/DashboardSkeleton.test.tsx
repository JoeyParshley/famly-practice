import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test/test-utils'
import DashboardSkeleton from './DashboardSkeleton'

describe('DashboardSkeleton', () => {
  it('renders all section skeletons', () => {
    render(<DashboardSkeleton />)
    
    expect(screen.getByText('Members')).toBeInTheDocument()
    expect(screen.getByText('Budgets')).toBeInTheDocument()
    expect(screen.getByText('Debts')).toBeInTheDocument()
    
    // Check for skeleton elements (material-ui skeletons have this class)
    const skeletons = document.querySelectorAll('.MuiSkeleton-root')
    expect(skeletons.length).toBeGreaterThan(5) // Should have multiple skeleton elements
  })
  
  it('matches the structure of the real dashboard', () => {
    render(<DashboardSkeleton />)
    
    // Should show expected number of member skeletons (3)
    const membersSection = screen.getByText('Members').closest('div')
    const memberSkeletons = membersSection?.querySelectorAll('.MuiSkeleton-root')
    expect(memberSkeletons).toHaveLength(9) // 3 members × 3 skeleton elements each
    
    // Should show expected number of budget skeletons (2) 
    const budgetsSection = screen.getByText('Budgets').closest('div')
    const budgetSkeletons = budgetsSection?.querySelectorAll('.MuiSkeleton-root')
    expect(budgetSkeletons).toHaveLength(6) // 2 budgets × 3 skeleton elements each
  })
})