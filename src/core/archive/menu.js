import React, { useState } from 'react';
import backgroundImage from '../images/menu.jpg';
import backgroundImagePhone from '../images/mobileMenu.jpg';
import shareIcon from '../icons/share.png';
import foodMenu from './config/foodMenu/foodmenu.json';


const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + backgroundImage + ')',
};

const mobile = {
  color: 'blue',
  backgroundImage: 'url(' + backgroundImagePhone + ')',
};


function Menu(props) {
  return (

    <div className="w-full md:flex  flex-wrap lg:flex ">


{/* background image */}
    {/* <div className="h-full md:h-auto md:w-full lg:w-full lg:h-auto lg:relative flex justify-center menuBackgroundImage" >
    <div className="max-w-md h-screen items-center justify-center flex text-7xl lg:text-12xl text-white font-bold">
  
  <div className=" khaya-font-bold">
  Menu
  </div>
  
  </div>

    </div> */}
{/* background image */}

  {/* <div className="h-full w-screen flex lg:p-4">
    
  <div className=" w-0 bg-center md:h-auto md:h-full lg:w-1/3 lg:h-auto lg:relative items-center" style={mobile}>

  </div>

   
  <div className="w-full md:w-full  lg:relative lg:w-2/3  rounded-t-lg shadow-md  md:shadow-none lg:shadow-none lg:rounded-none flex lg:items-center lg:justify-center p-4 ">
      
      <div className="grid grid-rows-auto lg:grid-cols-2  gap-2">

        {foodMenu.Menu.map((menu, i) => (
            // <div className="w-full md:w-1/2 lg:w-1/2 flex h-auto p-2">
            <div className={"row-span-"+menu.Items.length+" col-span-1"}>
            <div className="flex-wrap w-full">
        <div className="bg-black text-white w-full p-4 text-center text-xl lg:text-xl font-bold">{menu.Name}</div>
        {menu.Items.map((item, i)=>
                 <div className="border-b-2 border-black flex-wrap p-4">
                 <div className="font-semibold text-xl">{item.Name}</div>
                 <p className="w-full flex my-2 text-sm lg:text-lg">{item.Description} </p>
                 
                 <div className="w-full flex my-2 font-semi-bold text-lg lg:text-xl items-end h-auto py-2">
                 <div className="w-1/2">
                   <p>{item.Price}</p>
                 </div>
                 <div className="w-1/2 flex justify-end">
                   <a className="appearance-none" href="#">
                   <img className="w-4" src={shareIcon}></img>
                     </a>
                 </div>
               </div>
               </div>
        
        
        )}
     
            </div>
          </div>
            ))}


      </div>

    </div>
  
  </div> */}
  </div>
  );
}

export default Menu;