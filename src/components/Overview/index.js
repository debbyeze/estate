import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import listing from "../../assets/listing.json";
import PropertyCard from "../PropertyCard";
import NoPage from "../NoPage";
import PageTitle from "../page-title";
import {useCart} from "../Cart";

export default function Overview() {
  const { id } = useParams();

  const house = listing.properties.find(
    (entry) => entry.type + "-" + entry.id + "-" + entry.features === id
  );

  const msg = `Hello, I am interested in purchasing the property ${id}. Could you provide more details?`;
  const encodedMessage = encodeURIComponent(msg);
  const whatsappLink = `https://wa.me/2348149623877?text=${encodedMessage}`;
  const shuffleArray = (array) => array.sort(() => 0.5 - Math.random());

  const featuredProperties = shuffleArray(
    listing.properties.filter(
      (entry) => entry.type === house.type && entry.id !== house.id
    )
  );

  const oppositeProperties = shuffleArray(
    listing.properties.filter((entry) => entry.type !== house.type)
  );

  const {addToCart} = useCart();

  const handleAddToCart = () => {
     addToCart(house);
  }

  if (!house) {
    return (
      <>
        <NoPage />
      </>
    );
  }
  return (
  <>
     <PageTitle title={id + " | Heaven estate"}/>
    <section className="pt-16 bg-brown">
      <div className="bg-offwhite relative isolate px-6 pt-8">
        <div className="relative flex w-full items-center px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 bg-white">
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 ">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img  src={house.img} className="object-cover object-center h-[320px] w-full" alt="heaven property" />
            </div>
            <div className="sm:col-span-8 lg:col-span-7 text-brown">
            <span className="bg-light  font-light rounded text-brown font-light text-sm p-2 ">{house.type}</span>
              <h2 className="text-2xl font-bold sm:pr-12 my-3">Location: {house.location}</h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  Product information
                </h3>
                <p>Features: {house.features}</p>
                <p className="my-5">{house.description}</p>
                <p className="text-2xl">&#x20A6;{house.price}</p>
                 <div className="md:flex">
                    <a
                        href={whatsappLink} target="_blank" rel="noopener noreferrer"
                        className="mt-6 flex w-full items-center justify-center rounded-md border-2 border-brown bg-offwhite  px-8 py-3 text-base font-medium  text-brown focus:outline-none focus:ring-offset-2"
                      >

                      <i className='text-2xl m-1'><FontAwesomeIcon icon={faWhatsapp} /></i>
                       ENQUIRY
                      </a>
                       <button
                        type="submit"
                        className="mt-6 flex w-full items-center justify-center sm:mx-0 md:mx-3 rounded-md border-2 border-brown  px-8 py-3 text-base font-medium text-brown focus:outline-none focus:ring-offset-2"
                      ><i className='sm:text-1xl md:text-1xl m-1' onClick={handleAddToCart}><FontAwesomeIcon icon={faCartPlus} /></i>
                       ADD TO CART
                      </button>
                 </div>
                </section>
             </div>
          </div>
          </div>





{/* featured houses */}
        <section className="  bg-offwhite py-10">
          <h3 className="text-2xl font-semibold tracking-tight text-brown pt-20 text-start sm:text-3xl uppercase px-4 md:px-16">
            Featured {house.type}s
          </h3>
            <div className=" mx-auto max-w-2xl px-2 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-16 lg:py-8">
              <div className="grid container  grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-12">
                {featuredProperties.length > 0 ? (
                  featuredProperties
                    .slice(0, 3)
                    .map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))
                ) : (
                  <p>No featured properties available.</p>
                )}
              </div>
            </div>

            {/* oppositeProperties */}
            <div className="border-2 border-white bg-white mx-auto max-w-2xl px-2 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-16 lg:py-8">
              <div className="grid container  grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-12">
                <h4 className="text-2xl font-semibold tracking-tight text-brown pt-10 text-start sm:text-3xl uppercase  sm:mb-4 ">
                  You may also like
                </h4>

                {oppositeProperties.length > 0 ? (
                  oppositeProperties
                    .slice(0, 2)
                    .map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))
                ) : (
                  <p>No featured properties available.</p>
                )}
              </div>
            </div>
        </section>
      </div>
    </section>
    </>
  );
}
