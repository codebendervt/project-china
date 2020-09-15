import React, { useState } from 'react';
import logo from '../icons/logo.svg';
import ReactPlayer from 'react-player'
import video from '../videos/main.mp4';


function Splash(props) {
  return (
  <div className="w-full h-screen  flex absolute ">
     
      {/* <div className="w-full justify-center flex">
          <img className="w-12 rotate" src={logo}></img>
      </div> */}

        <video autoPlay muted  className="w-0 lg:w-screen lg:h-screen ">
        <source  src={video} type="video/mp4"/>
        </video>
      {/* <ReactPlayer url='../videos/main.mp4'  width='100%'
          height='100%' playing={true} /> */}

      

  </div>
  );
}

export default Splash;