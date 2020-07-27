import React, { useState } from 'react';
import backgroundImage from '../images/bacground.jpg';

const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + backgroundImage + ')',
};


function OurStory(props) {
  return (
    <div className="w-full h-auto md:h-screen md:flex lg:h-screen flex-wrap lg:flex bg-black">

    <div className=" bg-center  h-full md:h-auto md:full lg:w-1/3 lg:h-auto lg:relative" style={divStyle}>
    <div className="h-64 w-screen"></div>
    <div className="h-12 w-screen"></div>
    <div className="md:h-64 w-screen"></div>
  </div>

   
    <div className="w-full md:w-full  lg:relative lg:w-2/3 bg-red-700 rounded-t-lg shadow-md  md:shadow-none lg:shadow-none lg:rounded-none flex lg:items-center lg:justify-center ">
      
      <div className="flex-wrap w-full ">

        <div className="w-full px-6 p-4  h-auto flex justify-center items-center">
        <div className="w-full max-w-sm md:max-w-xl lg:max-w-5xl text-left">
          
          <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold ">Our Story</h2>
          
        </div>
        </div>

        <div className="w-full px-6 p-4 lg:p-6 h-auto flex justify-center items-center">
          <div className="max-w-sm md:max-w-xl lg:max-w-5xl w-full">
          <div className="text-lg md:text 3xl lg:text-3xl text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
          </div>
          </div>
         
        </div>

      </div>
    </div>
  
  
  
  
  </div>
  );
}

export default OurStory;