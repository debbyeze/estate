import Hero from "../Hero";
import listing from "../../assets/listing.json"
import PropertyCard from "../PropertyCard";
import Stats from "../Stats";
import Video from "../video";
import "./index.scss";
import Testimonial from "../testimonial";

const Home = () => {
return(
  <>
    <Hero/>
     <div className='about-us bg-brown h-screen px-5 lg:px-60 flex justify-center items-center ' id="about">
      <div className='container text-center text-offwhite'>
        <p className='mb-4'>Welcome to HEAVEN ESTATE, your trusted partner in real estate. Whether you're looking to buy your dream home, sell a property, or invest in real estate, we are here to guide you through every step of the journey. With a deep understanding of the market, personalized service, and a commitment to excellence, we make the process seamless and rewarding.</p>
        <p>At HEAVEN ESTATE, we believe in building relationships based on trust, transparency, and results. Our team of experienced agents is dedicated to providing expert advice, cutting-edge marketing strategies, and local market insights to ensure you achieve your real estate goals.</p>
        <div className="mt-10">
              <a href="/contact" className="border-2 border-white px-3.5 text-sm font-semibold leading-6 text-offwhite px-3.5 py-2.5 uppercase hover:px-6 cursor-pointer">
                Consult Today
              </a>
            </div>
      </div>
    </div>
    <section className="  bg-offwhite">
    <h2 className="text-3xl font-semibold tracking-tight text-brown pt-20 text-center sm:text-4xl">HOMES FOR SALE</h2>
    <div className=" mx-auto max-w-2xl px-8 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-16 lg:py-8">
        <div className="grid container  grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-12">

        {listing.properties.slice(-3).map((property)=>(
       <PropertyCard key={property.id} property= {property}/>
        ))};
       </div>
      </div>
      </section>

      <section className="bg-brown">
        <h2 className="text-3xl font-semibold tracking-tight text-white text-center pt-20 sm:text-4xl">WHAT SETS US APART</h2>
        <Stats/>
      </section>

      <section className="tour h-screen px-5 lg:px-60 flex justify-center items-center">
         <div className="container text-center text-white ">
           <h4 className="font-semibold tracking-tight text-2xl sm:text-3xl">EXPLORE A VIDEO TOUR</h4>
           <p className="py-2 mb-3">Experience your dream property from the comfort of your own home with our immersive video tours! Walk through stunning interiors, explore every detail of the layout, and visualize yourself in each space—all with just a click.
          </p>
          <Video/>
         </div>
      </section>
      <section className="bg-light py-10" id="testimonial">
            <h2 className="text-3xl font-semibold tracking-tight text-brown pt-20 text-center sm:text-4xl uppercase">Client Testimonials</h2>

          <div className=" mx-auto max-w-2xl px-8 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-16 lg:py-8 lg:pb-24">
        <div className="grid container  grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-12">
            <Testimonial/>
       </div>
       </div>

      </section>
  </>


)

}
export default Home;
