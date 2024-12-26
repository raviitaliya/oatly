import { create } from 'zustand'
import api from '../api/api'

export const useProductStore = create((set, get) => ({
  // Initial state
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,

  // Actions - using get() to check current state when needed
  setProducts: (products) => set((state) => ({ products })),
  setSelectedProduct: (product) => set((state) => ({ selectedProduct: product })),
  setLoading: (loading) => set((state) => ({ loading })),
  setError: (error) => set((state) => ({ error })),

  // Async actions
  fetchProducts: async () => {
    if (get().loading) return; // Prevent multiple simultaneous fetches
    
    set({ loading: true, error: null })
    try {
      const response = await api.get('/admin/getAllProduct');
      
      set({ products: response.data.products, loading: false })
    } catch (error) {
      set({ 
        error: error.response?.data?.message || 'Failed to fetch products', 
        loading: false 
      })
    }
  },
}))
