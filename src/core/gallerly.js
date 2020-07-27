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
  return (
  <div className="w-screen h-screen  lg:flex ">
    
    <div className=" w-full h-64 p-2 md:h-full lg:w-1/3 lg:h-full lg:p-0">
    <div className=" lg:p-0 bg-bottom lg:bg-bottom bg-cover h-full  lg:h-screen lg:relative" style={divStyle}></div>
    </div>
    <div className=" w-full h-64 md:h-full p-2 lg:w-1/3  lg:h-full lg:p-0">
    <div className="  w-full bg-bottom lg:bg-bottom bg-cover h-full lg:h-screen lg:relative" style={urlDivStyle}></div>
    </div>
    <div className=" w-full h-64 md:h-full p-2 lg:h-full lg:w-1/3 lg:p-0">
    <div className="  w-full bg-center lg:bg-bottom bg-cover h-full  lg:h-screen lg:relative" style={thirdDivStyle}></div>
    </div>
    
  </div>
  );
}

export default Gallery;