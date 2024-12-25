import { create } from 'zustand'
import api from '../api/api'

export const useProductStore = create((set) => ({
  // Initial state
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,

  // Actions
  setProducts: (products) => set({ products }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  // Async actions
  fetchProducts: async () => {
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
