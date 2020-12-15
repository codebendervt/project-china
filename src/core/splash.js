import React, { useState } from 'react';
import logo from '../icons/logo.svg';
import ReactPlayer from 'react-player'
import video from '../videos/main.mp4';

function Splash(props) {
  const [matches] = useState(window.matchMedia("(max-width: 768px)").matches);
  return (
<>
    {
     (matches ? <></>: <video autoPlay muted className="myVideo">
        <source src={video} type="video/mp4" />
      </video>)
    }

</>
  );
}

export default Splash;