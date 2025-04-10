import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: async (email, password) => {
        try {
          const response = await fetch('http://localhost:8000/api/admin/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          })

          if (response.status === 200) {
            set({ isAuthenticated: true, user: { email } })
            return true
          } else {
            throw new Error('Invalid credentials')
          }
        } catch (error) {
          throw error
        }
      },
      logout: () => {
        set({ isAuthenticated: false, user: null })
      },
    }),
    {
      name: 'admin-auth-storage',
    }
  )
)

export default useAuthStore ;