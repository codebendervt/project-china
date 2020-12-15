import React, { useState } from 'react';
import backgroundImage from '../images/galleryImage.jpg';
import backgroundImage2 from '../images/galleryImage2.jpg';
import backgroundImage3 from '../images/galleryImage3.jpg';


const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + backgroundImage + ')',
};
const urlDivStyle = {
  color: 'blue',
  backgroundImage: 'url(' + backgroundImage2 + ')',
};
const thirdDivStyle = {
  color: 'blue',
  backgroundImage: 'url(' + backgroundImage3 + ')',
};




function Gallery(props) {

  const [matches] = useState(window.matchMedia("(min-width: 768px)").matches);

  return (
    <div className="w-screen h-screen  overflow-hidden flex-wrap">


    
        <div className="slider w-screen h-screen py-10 lg:p-24 lg:px-48 flex ">

          <div className="slides bg-black w-full h-full lg:mt-6 overflow-hidden rounded-lg lg:rounded-none">
            <div id="slide-1" className="w-full h-full text-white ">
              {
                matches ? <div className="animate-pulse">optimizing large format images</div>:<div className="w-full bg-center bg-cover h-full lg:relative" style={urlDivStyle}></div>
              }
            </div>
            <div id="slide-2" className="w-full h-full text-white bg-red-600">

            {
                matches ? <div className="animate-pulse">optimizing large format images</div>:<div className="w-full bg-center bg-cover h-full  lg:relative" style={thirdDivStyle}></div>
              }
         
            </div>
          </div>
    
        </div>

        <div className="w-full flex justify-center items-center -my-8 lg:-my-12" >
          <a href="#slide-1" className="mx-2">hello</a>
          <a href="#slide-2">hello</a>
        </div>
     


      {/* <div className=" w-full h-64 p-2 md:h-full lg:w-1/3 lg:h-full lg:p-0">
    
    </div>
    <div className=" w-full h-64 md:h-full p-2 lg:w-1/3  lg:h-full lg:p-0">
   
    </div>
    <div className=" w-full h-64 md:h-full p-2 lg:h-full lg:w-1/3 lg:p-0">
    <div className="  w-full bg-center lg:bg-bottom bg-cover h-full  lg:h-screen lg:relative" style={thirdDivStyle}></div>
    </div> */}

    </div>
  );
}

export default Gallery;