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

    <div className="w-full md:flex  flex-wrap lg:flex">

      <div className="w-1/2 h-screen hidden lg:flex">
        <div className="w-1/2 h-screen menuBackgroundImage overlfow-hidden fixed">

        </div>
      </div>

      <div className="w-full lg:w-1/2 h-full bg-red-700 py-12 lg:mt-8  ">
        <div className="w-full h-auto flex justify-center items-center">
          <div className="flex-wrap w-full  lg:p-8">

            <div className="h-64 w-full flex items-center lg:h-auto fixed lg:relative bg-red-700">
              <div className="flex flex-wrap h-48 lg:h-auto items-center w-full justify-center py-4">

                <div className="w-full flex justify-center h-auto lg:pt-24">
                  <h1 className="w-48 lg:w-64 text-center text-4xl md:text-4xl lg:text-6xl khaya-font-bold text-white leading-none">Product Offering</h1>
                </div>

                <div className="w-full flex justify-center py-12 lg:py-16">
                  <div className="w-auto flex">

                    <div className="w-1/3 text-white flex mx-4">
                      <div className="border p-2 px-4 w-auto hover:bg-white hover:text-red-700 cursor-pointer">Retail</div>
                    </div>
                    <div className="w-1/3 text-white flex mx-4">
                      <div className="border p-2 px-4 w-auto hover:bg-white hover:text-red-700  cursor-pointer">Catering</div>
                    </div>
                    <div className="w-1/3 text-white flex mx-4 ">
                      <div className="border p-2 px-4 w-auto hover:bg-white hover:text-red-700 cursor-pointer">Recipies</div>
                    </div>

                  </div>


                </div>
                <div className="w-full px-2 bg-red-700 lg:hidden">
                <div className=" border-b-2"></div>
                </div>
               
              </div>


            </div>

            <div className="p-4">
              <div className="w-full  lg:border-t-4 mt-64 lg:mt-0  lg:py-4 ">

                <div className="text-white flex-wrap">
                  {foodMenu.Menu.map((menu, i) =>
                  (<div className="my-2">
                    <h2 key={menu.name} className="text-3xl khaya-font-bold">{menu.Name}</h2>
                    {menu.Items.map((item, i) =>
                      <div className="">+ {item.Name}</div>
                    )}

                  </div>)
                  )}

                </div>
              </div>
            </div>


          </div>


        </div>
      </div>

    </div>
  );
}

export default Menu;