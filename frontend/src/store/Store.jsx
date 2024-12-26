import { create } from 'zustand'
import api from '../api/api'

export const useProductStore = create((set, get) => ({
  // Initial state
  products: [],
  oatDrinkProducts: [],
  chilledoatdrinks: [],

  selectedProduct: null,
  loading: false,
  error: null,

  // Actions - using get() to check current state when needed
  setProducts: (products) => set((state) => ({ products })),
  setoatDrinkProducts: (oatDrinkProducts) => set((state) => ({ oatDrinkProducts })),
  setchilledoatdrinks: (chilledoatdrinks) => set((state) => ({ chilledoatdrinks })),

  // setSelectedProduct: (product) => set((state) => ({ selectedProduct: product })),
  
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

  getOatDrink: async () => {
    if (get().loading) return; 
    
    set({ loading: true, error: null })
    try {
      const response = await api.get('/admin/oatdrink');

      console.log(response.data.products);
      

      set({ oatDrinkProducts: response.data.products, loading: false })
      
    } catch (error) {
      set({ 
        error: error.response?.data?.message || 'Failed to fetch products', 
        loading: false 
      })
    }
  },

  getchilledoatdrinks: async () => {
    if (get().loading) return; 
    
    set({ loading: true, error: null })
    try {
      const response = await api.get('/admin/chilledoatdrinks');

      console.log(response.data.products);
      

      set({ chilledoatdrinks: response.data.products, loading: false })
      
    } catch (error) {
      set({ 
        error: error.response?.data?.message || 'Failed to fetch products', 
        loading: false 
      })
    }
  },
}))
