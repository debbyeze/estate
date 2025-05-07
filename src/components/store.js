// stores/cartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
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
      const existingItem = state.cart.find(item => item.id === propertyId);
      if (existingItem.quantity > 1) {
        return {
          cart: state.cart.map(item =>
            item.id === propertyId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        };
      }
      return { cart: state.cart.filter(item => item.id !== propertyId) };
    }),
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;