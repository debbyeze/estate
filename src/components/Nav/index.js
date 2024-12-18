'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouzz} from "@fortawesome/free-brands-svg-icons";
import {useNavigate} from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'List your property', href: `mailto:deborahsong7@gmail.com?subject= I want to list a property` },
  { name: 'Contact', href: '/contact' },
]
const Nav = () => {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


const [searchTerm, setSearchTerm] = useState("");
const [searchCategory, setSearchCategory] = useState("");

const navigate = useNavigate();

  const handleSearch =() =>{
   const searchTermed = searchTerm.toLowerCase().replace(/[\s,]+/g, ' ').trim();
   if (searchTermed) {
       navigate(`/properties/${searchCategory}?search=${searchTermed}`);
   
   }
  
  };

 return(
   <>
     <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 ">
          <div className="flex lg:flex-1">
           <a href="/" className="-m-1.5 p-1.5">
               <i className='text-3xl m-1'><FontAwesomeIcon icon={faHouzz} color="#f4f1ec"/></i> 
               <span className='text-offwhite font-semibold'>HEAVEN ESTATE</span>
              </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-offwhite"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-offwhite">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:ml-10 lg:pl-10">
            <div className="w-full w-[200px]">
  <div className="relative flex bg-white rounded-md">
  <select id="countries" className="bg-brown border border-offwhite text-white text-sm focus:ring-brown focus:border-brown display-inline p-6 pt-2.5 pb-2.5" value={searchCategory}
      onChange={(e) => setSearchCategory(e.target.value)}>
      <option>Category...</option>
    <option>Location</option>
    <option>Type</option>
    <option>features</option>
    <option>description</option>

  </select>
    <input
      className=" placeholder:text-slate-400 text-brown text-sm border border-slate-200  pl-3 pr-4 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
      placeholder="Search properties" 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button onClick={handleSearch}
      className="absolute top-1 right-1 flex items-center rounded bg-offwhite py-1 px-2.5 border border-transparent text-center text-sm text-brown transition-all shadow-sm hover:shadow focus:bg-brown focus:shadow-none active:bg-brown hover:bg-brown active:shadow-none
      active:text-white 
      focus:text-white 
       hover:text-white  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
      </svg>
    </button> 
  </div>
            </div>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
               <i className='text-3xl m-1'><FontAwesomeIcon icon={faHouzz} color="#A7A7A7"/></i> 
               <span className='text-brown font-semibold'>HEAVEN ESTATE</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-brown"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brown hover:bg-brown hover:text-light"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* search */}
                <div className="py-6">
                  <div className="w-full max-w-sm max-w-[200px]">
  <div className="relative flex rounded-md ">
  <select id="countries" className="bg-brown border border-offwhite text-white text-sm focus:ring-brown focus:border-brown display-inline p-6 pt-2.5 pb-2.5" value={searchCategory}
      onChange={(e) => setSearchCategory(e.target.value)}>
    <option>Location</option>
    <option>Type</option>
    <option>features</option>
    <option>description</option>

  </select>
    <input
      className="w-full bg-transparent placeholder:text-slate-400 text-brown text-sm border border-slate-200 rounded-md pl-3 pr-4 py-2 transition duration-300 ease focus:outline-none focus:border-brown hover:border-brown shadow-sm focus:shadow"
      placeholder="Search properties" value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button onClick={handleSearch}
      className="absolute top-1 right-1 flex items-center rounded bg-offwhite py-1 px-2.5 border border-transparent text-center text-sm text-brown transition-all shadow-sm hover:shadow focus:bg-brown focus:shadow-none focus:text-offwhite hover:text-offwhite 
      active:text-offwhite active:bg-brown hover:bg-brown active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
      </svg>
    </button> 
  </div>
            </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
   
   </>
 
 )

};

export default Nav;