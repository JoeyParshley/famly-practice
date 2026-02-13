import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test/test-utils'
import DashboardSkeleton from './DashboardSkeleton'

describe('DashboardSkeleton', () => {
  it('renders skeleton placeholders', () => {
    render(<DashboardSkeleton />)
    
    const skeletons = document.querySelectorAll('.MuiSkeleton-root')
    expect(skeletons.length).toBeGreaterThan(0)
  })
  
  it('matches the structure of the real dashboard', () => {
    render(<DashboardSkeleton />)
    
    const skeletons = document.querySelectorAll('.MuiSkeleton-root')
    expect(skeletons.length).toBe(4)
  })
})