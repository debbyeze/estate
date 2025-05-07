// stores/cartStore.js
import { create } from 'zustand';
import {persist} from 'zustand/middleware';

const useCartStore = create(persist((set) => ({
  cart: [],
  addToCart: (house) => 
    set((state) => {
      const existingItem = state.cart.find(item => item.id === house.id);
      if (existingItem) {
        return {
          cart: state.cart.map(item =>
            item.id === house.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return { cart: [...state.cart, { ...house, quantity: 1 }] };
    }),
  removeFromCart: (propertyId) =>
    set((state) => {
             return { cart: state.cart.filter(item => item.id !== propertyId) };
    }),
  clearCart: () => set({ cart: [] }),


}),

  {
    name: 'heaven estate saved property',
    getStorage: () => localStorage
  }
));



export default useCartStore;