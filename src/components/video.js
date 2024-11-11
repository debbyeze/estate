import { useState } from "react";
import ReactPlayer from "react-player";
const Video = () => {
       const[isOpen, setIsOpen] = useState(false);

    return ( 
    <div>
        <a onClick={() => setIsOpen(true)}  className="bg-white px-3.5 text-sm font-semibold leading-6 text-brown px-3.5 py-2.5 uppercase hover:px-6 cursor-pointer">    WATCH NOW          </a>

        {isOpen && (

           <div className="overlay flex justify-top">
             <ReactPlayer url={'https://youtu.be/HHBsvKnCkwI?si=m1JnQlhUwsi8YN2l'} controls={true}/>
             <a onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold cursor-pointer mx-4">x</a>
           </div>

        )}
    </div>
    
     );
}
 
export default Video;