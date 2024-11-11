import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouzz, faTwitter, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons";
import foot from "../../assets/images/real9.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row">
        
        <div className="flex-1 md:text-left bg-brown py-10 px-20 text-white" id="contact">
        <div className="flex lg:flex-1">
           <a href="/" className="-m-1.5 p-1.5">
               <i className='text-3xl m-1'><FontAwesomeIcon icon={faHouzz} color="#f4f1ec"/></i> 
               <span className='text-offwhite font-semibold'>HEAVEN ESTATE</span>
              </a>
          </div>
           <div className="my-12 flex">
              <a href="#" className="border-2 border-white px-3.5 text-sm font-semibold leading-6 text-offwhite px-3.5 py-2.5 uppercase hover:px-6 cursor-pointer mb-2">
                LIST YOUR HOUSE
              </a>
               <a href="/properties" className="bg-white px-3.5 text-sm font-semibold leading-6 text-brown px-3.5 py-2.5 uppercase hover:px-6 cursor-pointer lg:mx-3 mb-2">
                BUY A HOME
              </a>
            </div>
          <h3 className="text-xl font-bold mb-8 uppercase">GET IN TOUCH</h3>
          <p className="mb-1">Main Office</p>
          <p className="mb-1">123 Adekunle street,</p>
          <p className="mb-1">Port Harcourt, Rivers,</p>
          <p className="mb-4">Nigeria.</p>

          <p className="mb-1">Email: deborahsong7@gmail.com</p>
          <p className="mb-5">Phone: +1 123 456 7890</p>
          

          <p>
          <i className='text-1xl m-1 rounded-full p-1 border-1'><FontAwesomeIcon icon={faFacebook} color="#f4f1ec"/></i> 
          <i className='text-1xl m-1 rounded-full p-1 border-1'><FontAwesomeIcon icon={faTwitter} color="#f4f1ec"/></i> 
          <i className='text-1xl m-1 rounded-full p-1 border-1'><FontAwesomeIcon icon={faInstagram} color="#f4f1ec"/></i> 
          
          </p>

        </div>
      
      <div className="flex-1">
          <img
            src={foot}
            alt="Company "
            className="h-screen w-full"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
