import { Link } from "react-router-dom";
import {X} from 'lucide-react';
import useCartStore from "../store";
const Favourite = () => {

const cart = useCartStore((state) =>state.cart );
 console.log("props"+cart);

    const removeFromCart = useCartStore((state) => state.removeFromCart);


    return ( 
       <main className="pt-16 bg-brown">
        <section className="relative bg-white py-5 px-2 sm:px-6 ">
        
<div className="mx-auto   shadow-2xl py-5 max-w-[1000px] bg-white h-screen">
{cart.length>0?
<h2 className="text-2xl font-semibold tracking-tight text-brown my-3 mx-3 sm:mx-5 text-left lg:px-20 sm:text-3xl">Saved Favourite Propert{cart.length>1? "ies": "y"}</h2>
:
<div className="flex justify-center items-center">
<h2 className="text-2xl font-semibold tracking-tight text-brown my-3 mx-3 sm:mx-5 text-left lg:px-20 sm:text-3xl"> No Saved Property</h2>
</div>
}
{cart.map((prop) => (
       <div key={prop.id} className=" flex  justify-between  sm:items-center mx-1 sm:mx-5 shadow-md pb-2 px-3 lg:px-20 my-5">
       <Link to={prop.to} className=" flex justify-between sm:items-center py-4 ">
         <img src={prop.img} alt="heaven estate property" className="h-20 w-20 md:h-36 md:w-36  object-cover object-center group-hover:opacity-75"/>

          <div  className="flex flex-col md:flex-row justify-between md:items-center flex-nowrap ml-5">
         <div>
           <h6 className=" text-brown font-semibold">{prop.location}</h6>
            <p className="text-sm text-brown">{prop.features}</p>
         </div>
         <div className="md:ml-20">
          <h6 className="mt-4 text-brown font-semibold">&#x20A6;{prop.price}</h6>
       </div>
       </div>
       </Link>
       
       
       <div className="py-4">
        <X size={18} color="black" className="cursor-pointer sm:mt-3 md:pl-1" onClick={() => removeFromCart(prop.id)}/>
       </div>
       </div>
     ))}
     </div>
    </section>
       </main>
    
     );
}
 
export default Favourite;