import { useState } from "react";


const DisplayImg = ({displayImg, displaImg}) => {
  const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);

 
    return ( 
      <>
     <div className={showOne? `fixed inset-0  w-full bg-gray-800 bg-opacity-20 flex justify-center items-center` : `mr-1`} onClick={() => showOne ?  setShowOne(false) : setShowOne(true)}>
         <img src={displayImg} alt="heaven estate property" className={ showOne? `h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]  mx-auto flex my-auto` : ` h-20 w-full rounded-lg mt-1 mr-1`} onClick={() => setShowOne(true)}/>
      </div>
     <div className={showTwo? `fixed inset-0  w-full bg-gray-800 bg-opacity-20 flex justify-center items-center` : `mr-1`} onClick={() => showTwo ?  setShowTwo(false) : setShowTwo(true)}>
         <img src={displayImg} alt="heaven estate property" className={ showTwo? `h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]  mx-auto flex my-auto` : ` h-20 w-full rounded-lg mt-1 mr-1`} onClick={() => setShowTwo(true)}/>
      </div> 
     <div className={showThree? `fixed inset-0  w-full bg-gray-800 bg-opacity-20 flex justify-center items-center` : `mr-1`} onClick={() => showThree ?  setShowThree(false) : setShowThree(true)}>
         <img src={displayImg} alt="heaven estate property" className={ showThree? `h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]  mx-auto flex my-auto` : ` h-20 w-full rounded-lg mt-1 mr-1`} onClick={() => setShowThree(true)}/>
      </div>

      </>
     );
}
 
export default DisplayImg;