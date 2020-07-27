import React, { useState } from 'react';
import logo from '../icons/logo.svg';

function Splash(props) {
  return (
  <div className="w-full h-screen bg-red-700 flex items-center justify-center ">
      <div className="flex-wrap">
      <div className="w-full justify-center flex">
          <img className="w-12 rotate" src={logo}></img>
      </div>
    <div className="text-6xl text-white text-center">Comming Soon</div>
      </div>

  </div>
  );
}

export default Splash;