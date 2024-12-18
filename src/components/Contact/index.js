/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'

import { useState } from 'react'
export default function Contact() {

  const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
      const [msg, setMsg] = useState('');
        const [submit, setSubmit] = useState(false);

      const handleSubmit = (event)=>{
        event.preventDefault();
        setSubmit(true);
      }





  return (
  <section className=" bg-brown pt-16">
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-brown sm:text-5xl">Contact Us</h2>
        <p className="mt-2 text-lg/8 text-brown">Don't hesitate to get in touch with us - we'll be happy to talk to you!</p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-brown" >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-brown focus:ring-2 focus:ring-inset focus:ring-brown sm:text-sm/6" value={fname} onChange={(event)=> setFname(event.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-brown" >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-brown focus:ring-2 focus:ring-inset focus:ring-brown sm:text-sm/6" value={lname} onChange={(event)=> setLname(event.target.value)}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-brown">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-brown focus:ring-2 focus:ring-inset focus:ring-brown sm:text-sm/6" value={email} onChange={(event)=> setEmail(event.target.value)}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-brown">
              Phone number
            </label>
            <div className=" mt-2.5">
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-brown focus:ring-2 focus:ring-inset focus:ring-brown sm:text-sm/6" value={phone} onChange={(event)=> setPhone(event.target.value)}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-brown">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-brown focus:ring-2 focus:ring-inset focus:ring-brown sm:text-sm/6"
                defaultValue={''} value={msg} onChange={(event)=> setMsg(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit" 
            className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold bg-brown text-white shadow-sm"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
    </section>
  )
}
