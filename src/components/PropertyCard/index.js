

export default function PropertyCard({property}) {


  return (
        
            <a  href={property.href} className="group">
          
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
               <span className="bg-light uppercase font-light text-brown font-light text-sm p-2 ">{property.type}</span>
                <img
                  src={property.img} alt="heaven estate property"
                  className="h-64 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h6 className="mt-4 text-brown font-semibold">{property.location}</h6>
              <p className="text-sm text-brown">{property.features}</p>
              <p className="mt-1 text-md font-medium text-brown">&#x20A6;{property.price}</p>
            </a>
      
  );
};
