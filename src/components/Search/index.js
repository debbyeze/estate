import listing from "../../assets/listing.json";
import PropertyCard from "../PropertyCard";
import { useLocation } from "react-router-dom";


const Search = () =>{
      //  const { category } = useParams();
       const location = useLocation();
       const searchParams = new URLSearchParams(location.search);
       const searchTerm = searchParams.get("search");

       const filterProperties = listing.properties.filter(property => property.location?.toLowerCase().trim().includes(searchTerm) || property.type?.toLowerCase().trim().includes(searchTerm) || property.features?.toLowerCase().trim().includes(searchTerm)|| property.description?.toLowerCase().trim().includes(searchTerm));

  
   return (
   <>
    <section className=" bg-brown pt-16">
   <div className="bg-offwhite relative isolate px-6 pt-1">
    <h2 className="text-3xl font-semibold tracking-tight text-brown pt-20 text-center sm:text-4xl">PROPERTIES FOR SALE</h2>
    <div className=" mx-auto max-w-2xl px-2 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-16 lg:py-8">
        <div className="grid container  grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-12">
        { filterProperties.length > 0 ? (filterProperties.map((property)=>(
       <PropertyCard key={property.id} property= {property}/>
        ))): (
          <p className="text-brown ">No {searchTerm} property found</p>
        )};
       </div>
      </div>
      </div>
      </section> 

      </>
    );
  }

  export default Search;