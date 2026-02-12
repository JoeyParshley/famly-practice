import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchJson } from './http'

// Mock fetch
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('fetchJson', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('successfully fetches and returns JSON data', async () => {
    const mockData = { message: 'success' }
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    })

    const result = await fetchJson('/test-endpoint')
    
    expect(mockFetch).toHaveBeenCalledWith(
      'http://localhost:4000/test-endpoint',
      expect.objectContaining({
        headers: { 'Content-Type': 'application/json' }
      })
    )
    expect(result).toEqual(mockData)
  })

  it('handles HTTP errors correctly', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
      text: () => Promise.resolve('Resource not found'),
    })

    await expect(fetchJson('/nonexistent')).rejects.toThrow(
      'Request failed (404): Resource not found'
    )
  })

  it('handles absolute URLs correctly', async () => {
    const mockData = { data: 'test' }
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    })

    await fetchJson('https://api.example.com/data')
    
    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.example.com/data',
      expect.any(Object)
    )
  })
})