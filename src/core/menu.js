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
  const [menu, setMenu] = useState('Everyday');
  const [secondMenu, setSecondMenu] = useState('');
  const [open, setOpen] = useState(false);
  const [length, setLength] = useState(foodMenu.Menu[menu].Sub.length);

  const SubMenu = () => {

    return (
      <div className="text-white flex-wrap">
        {foodMenu.Menu[menu].Sub.map((menu, i) =>
        (<div key={i + menu.Name} className="">


          {
            menu.Name == secondMenu ?
              (
                <>
                  <h1 key={menu.Name} className="khaya-font-ExtraBold text-4xl xl:text-6xl text-white mb-4">{menu.Name}</h1>
                  {menu.List.map((item, i) =>
                  (

                    <div key={item} className="text-lg">+ {item}</div>

                  )
                  )}
                  <h2 className="text-lg xl:text-2xl Gmabata-font-Medium leading-tight mt-4 ">{menu.Secondary.Name}</h2>
                  {menu.Secondary.List.map((item, i) =>
                    <div key={item} className="text-lg">+ {item}</div>

                  )}
                </>
              )

              : ""
          }

        </div>)
        )}

      </div>
    )
  }

  const MainMenu = () => {
    return (
      <>
        <h1 className="khaya-font-ExtraBold text-4xl xl:text-6xl text-white">{foodMenu.Menu[menu].Name}</h1>

        <div className="text-white flex-wrap">
          {foodMenu.Menu[menu].List.map((menu, i) =>
          (<div key={i} className="my-4">

            <h2 key={menu.name} className="text-lg xl:text-2xl Gmabata-font-Medium leading-tight">{menu.Name}</h2>
            {menu.Items.map((item, i) =>
              <div key={item.Name} className="text-lg">+ {item.Name}</div>
            )}

          </div>)
          )}

        </div>
      </>
    )
  }

  return (

    <div className="w-full md:flex bg-red-700 flex-wrap lg:flex">

      <div className="w-1/2 h-screen hidden lg:flex">
        <div className="w-1/2 h-screen menuBackgroundImage overlfow-hidden fixed">

        </div>
      </div>

      <div className="w-full lg:w-1/2 h-full bg-red-700 py-12 lg:mt-8  ">
        <div className="w-full h-auto flex justify-center items-center">
          <div className="flex-wrap w-full  lg:p-8">

            <div className="h-64 w-full flex items-center lg:h-auto fixed lg:relative bg-red-700">
              <div className="flex flex-wrap  h-48 lg:h-auto items-center w-full justify-center py-4">

                <div className="w-full flex justify-center h-auto lg:pt-24">
                  <h1 className="w-48 lg:w-64 text-center text-4xl md:text-4xl lg:text-6xl khaya-font-bold text-white leading-none">Product Offering</h1>
                </div>

                <div className="w-full flex flex-col justify-center py-12 lg:py-16 text-sm xl:text-xl bg-red-700">

                  <div className="w-auto flex justify-center">

                    <div className="m-2 text-white text-center flex ">
                      <div className="xl:w-32  border p-1 hover:bg-white hover:text-red-700 cursor-pointer" onClick={() => { setMenu('Everyday'); setOpen(false); setLength(1); }}>Everyday</div>
                    </div>
                    <div className="m-2 text-white text-center flex">
                      <div className="xl:w-24  border p-1 hover:bg-white hover:text-red-700  cursor-pointer" onClick={() => { setMenu('Festive'); setOpen(false); setLength(0) }}>Festive</div>
                    </div>


                  </div>

                  <div className="w-auto flex flex-row justify-center text-center">

                    {foodMenu.Menu[menu].Sub.map((sub, i) =>
                    (<div key={sub.Name + i} className="m-2 text-white flex">
                      <div className="xl:w-32  border p-1 hover:bg-white hover:text-red-700 cursor-pointer" onClick={() => { setSecondMenu(sub.Name); setOpen(true); }}>{sub.Name}</div>
                    </div>
                    )
                    )}

                  </div>


                </div>
                <div className="w-full px-2 bg-red-700  lg:hidden">
                  <div className="bg-red-700 border-b-2"></div>
                </div>

              </div>


            </div>

            <div className={"p-4 mt-" + (length == 0 ? "0" : "12") + " lg:mt-0"}>
              <div className="w-full  lg:border-t-2 mt-64 lg:mt-0  xl:py-4 ">

                {
                  open ? <SubMenu /> : <MainMenu />
                }


              </div>
            </div>


          </div>


        </div>
      </div>

    </div>
  );
}

export default Menu;