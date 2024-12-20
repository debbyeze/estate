import { createContext, useContext, useState } from "react";
import PageTitle from "../page-title";

const cartContext = createContext();
const Cart = ({children}) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId)=> {
    setCartItems((prevItems)=> prevItems.filter((item) => item.id !== itemId))
  };
  
  const clearCart = () => {
    setCartItems([]);
  }
    return ( 
    <>
       <PageTitle title="Cart | Heaven estate"/>

       <cartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
         {children}
       </cartContext.Provider>

    
    
    </>
    
     );
};

export const useCart = () => useContext(cartContext);
 
export default Cart;