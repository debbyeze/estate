export default function Testimonial() {
 const testimonies = [
     {
       id:'1',
       quote:'As a seasoned investor, I’ve worked with many real estate agents, but none have impressed me as much as heaven estate. Their attention to detail and market insight led me to a fantastic property that I wouldn’t have found on my own. They negotiated an excellent price and made the closing process smooth and stress-free. I highly recommend them to anyone looking to buy or sell real estate.',
       img:"https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?cs=srgb&dl=pexels-pixabay-262391.jpg&fm=jpg&_gl=1*gjx4g4*_ga*ODQ5MzUwMjY1LjE3MjYxNDk4NjI.*_ga_8JE65Q40S6*MTcyNzI2MTA4Mi40LjEuMTcyNzI2MTcyOS4wLjAuMA..",
       client:'Robert Smith'
     },
     {
       id:'2',
       quote:'We couldn’t have asked for a better experience in buying our first home! Our agent was incredibly knowledgeable and patient, guiding us through every step of the process. They listened to our needs and found us the perfect place in a great neighborhood. We felt supported and confident throughout the entire transaction. Thank you for making our dream a reality!',
       img:'https://images.pexels.com/photos/254069/pexels-photo-254069.jpeg?cs=srgb&dl=pexels-j-carter-53083-254069.jpg&fm=jpg&_gl=1*1q4r93k*_ga*ODQ5MzUwMjY1LjE3MjYxNDk4NjI.*_ga_8JE65Q40S6*MTcyNzI2MTA4Mi40LjEuMTcyNzI2MTk1MS4wLjAuMA..',
       client:'Sarah & Mike Johnson'
     },
     {
       id:'3',
       quote:'Selling our home was a big decision, and we were nervous about the process. Thankfully, Heaven estate was there for us every step of the way. They provided an accurate market analysis, staged our home beautifully, and marketed it effectively. We received multiple offers within days and sold for above our asking price! We couldn’t be happier with the outcome and highly recommend their services!',
       img:'https://images.pexels.com/photos/7741590/pexels-photo-7741590.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-7741590.jpg&fm=jpg&_gl=1*1ld7334*_ga*ODQ5MzUwMjY1LjE3MjYxNDk4NjI.*_ga_8JE65Q40S6*MTcyNzI2MTA4Mi40LjEuMTcyNzI2MTg4OC4wLjAuMA..',
       client:'Maria & Carlos Martinez'
     }
 ];
  return (
  <>
    {testimonies.map((testimony)=>(
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center  text-brown text-sm">
            <p>
              {testimony.quote}
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="heaven estate testimonial"
              src={testimony.img}
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-brown uppercase">- {testimony.client}</div>
            </div>
          </figcaption>
        </figure>
      </div>
      ))}
      </>
  )
}
