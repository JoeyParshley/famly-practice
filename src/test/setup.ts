import '@testing-library/jest-dom'

// Mock the environment variables
Object.defineProperty(import.meta, 'env', {
  value: {
    DEV: true,
    VITE_API_MODE: 'mock',
    VITE_API_BASE_URL: 'http://localhost:4000',
  },
  writable: true,
})