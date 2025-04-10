import { useState } from 'react'
import listing from "../../assets/listing.json";
import PageTitle from "../page-title";
import PropertyCard from "../PropertyCard";
import {useNavigate} from 'react-router-dom';



const Properties = () =>{

const [searchTerm, setSearchTerm] = useState("");
const [searchCategory, setSearchCategory] = useState("");

const navigate = useNavigate();

  const handleSearch =() =>{
   const searchTermed = searchTerm.toLowerCase().replace(/[\s,]+/g, ' ').trim();
   if (searchTermed) {
       navigate(`/properties/${searchCategory}?search=${searchTermed}`);
   
   }
  
  };
      
   return (
   <>
   
   <PageTitle title="Properties | Heaven estate"/>
   
    <section className=" bg-brown pt-16">
      <div className=" relative px-5 bg-offwhite flex md:hidden pt-2">
  <select id="countries" className="bg-brown border-2 border-r-0 border-brown text-white font-bold text-sm focus:ring-brown focus:border-brown display-inline p-6 pt-2.5 pb-2.5" value={searchCategory}
      onChange={(e) => setSearchCategory(e.target.value)}>
    <option>Location</option>
    <option>Type</option>
    <option>features</option>
    <option>description</option>

  </select>
    <input
      className="w-full bg-transparent placeholder:text-slate-400 text-brown text-sm  pl-3 pr-4 py-2 transition duration-300 ease focus:outline-none border  border-slate focus:border-brown hover:border-brown shadow-sm focus:shadow"
      placeholder="Search properties" value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button onClick={handleSearch}
      className="absolute top-4 right-5 mr-2 flex items-center rounded bg-white py-1 px-2.5 border border-transparent text-center text-sm text-brown transition-all shadow-sm hover:shadow focus:bg-brown focus:shadow-none focus:text-offwhite hover:text-offwhite 
      active:text-offwhite active:bg-brown hover:bg-brown active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
      </svg>
    </button> 
  </div>
   <div className="bg-offwhite relative isolate px-6 pt-1">
    <h2 className="text-3xl font-semibold tracking-tight text-brown pt-20 text-center sm:text-4xl">PROPERTIES FOR SALE</h2>
    <div className=" mx-auto max-w-2xl px-2 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-16 lg:py-8">
        <div className="grid container  grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-12">
      {listing.properties.map((property)=>(
       <PropertyCard key={property.id} property= {property}/>
        ))};
       </div>
      </div>
      </div>
      </section> 

      </>
    );
  }

  export default Properties;