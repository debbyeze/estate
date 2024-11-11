import listing from "../../assets/listing.json";
import PropertyCard from "../PropertyCard";
import Testimonial from "../testimonial";
const Properties = () =>{

  return (
   <>
   <section className=" bg-brown pt-16">
   <div className="bg-offwhite relative isolate px-6 pt-1">
    <h2 className="text-3xl font-semibold tracking-tight text-brown pt-20 text-center sm:text-4xl">HOMES FOR SALE</h2>
    <div className=" mx-auto max-w-2xl px-8 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-16 lg:py-8">
        <div className="grid container  grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-12">

        {listing.properties.map((property)=>(
       <PropertyCard key={property.id} property= {property}/>
        ))};
       </div>
      </div>
      </div>
      </section>
<section className="bg-light " id="testimonial">
            <h2 className="text-3xl font-semibold tracking-tight text-brown pt-20 text-center sm:text-4xl uppercase">Client Testimonials</h2>

          <div className=" mx-auto max-w-2xl px-8 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-16 lg:py-8 lg:pb-24">
        <div className="grid container  grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-12">
            <Testimonial/>
       </div>
       </div>
      </section>  
      
       </>
  
  )};

  export default Properties;