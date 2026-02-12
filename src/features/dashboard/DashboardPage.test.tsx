import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '../../test/test-utils'
import DashboardPage from './DashboardPage'
import * as famlyApi from '../../api/famly'

// Mock the API module
vi.mock('../../api/famly', () => ({
  getDashboard: vi.fn()
}))

const mockDashboard = {
  householdName: 'Test Household',
  members: [
    { id: '1', name: 'Test User', role: 'Parent' as const },
  ],
  budgets: [
    { id: '1', category: 'Test Budget', planned: 100, actual: 80 },
  ],
  debts: [
    { id: '1', name: 'Test Debt', balance: 1000, apr: 0.15 },
  ],
}

describe('DashboardPage Integration', () => {
  it('renders loading state initially', () => {
    // Mock a promise that doesn't resolve immediately
    vi.mocked(famlyApi.getDashboard).mockReturnValue(new Promise(() => {}))
    
    render(<DashboardPage />)
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Members')).toBeInTheDocument()
    expect(screen.getByText('Budgets')).toBeInTheDocument() 
    expect(screen.getByText('Debts')).toBeInTheDocument()
    // Check for skeleton elements (Material-UI skeletons have specific classes)
    expect(document.querySelector('.MuiSkeleton-root')).toBeInTheDocument()
  })

  it('renders dashboard data after successful fetch', async () => {
    vi.mocked(famlyApi.getDashboard).mockResolvedValue(mockDashboard)
    
    render(<DashboardPage />)
    
    // Wait for loading to complete and data to render
    await waitFor(() => {
      expect(screen.getByText('Test Household')).toBeInTheDocument()
    })
    
    expect(screen.getByText('Test User')).toBeInTheDocument()
    expect(screen.getByText('Test Budget')).toBeInTheDocument()
    expect(screen.getByText('Test Debt')).toBeInTheDocument()
  })

  it('renders error state when fetch fails', async () => {
    const errorMessage = 'API Error'
    vi.mocked(famlyApi.getDashboard).mockRejectedValue(new Error(errorMessage))
    
    render(<DashboardPage />)
    
    await waitFor(() => {
      expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument()
    })
    
    expect(screen.queryByText('Members')).not.toBeInTheDocument() // No skeleton sections
  })
})