import React, { useState, useReducer } from "react";
import instagram from "../icons/instagram.svg";
import facebook from "../icons/facebook.svg";
import IconButton from "../components/elements/buttons/icon";
import checkedClose from "../icons/checkedClose.svg";
import checkedOriginal from "../icons/checkedOrginal.svg";

// important for controller states
function init(initialState) {
  return { property: false};
};


function reducer(state, action) {
  switch (action.type) {
    case "submit":
      return { property: true };
    case "reset":
      return init(action.payload);
    default:
      return { property: false };
  }
}
//end of controller state

function Connect(initialState) {
  const [isClicked, changeIsClicked] = useReducer(reducer, initialState,init);
  return (
    <div className=" w-screen h-full lg:h-screen bg-white">
      <div className="w-full h-32 flex-wrap lg:flex lg:py-32">
        <div className="p-8 w-full lg:w-1/2 lg:py-6 lg:px-16 ">
          <div className="text-6xl lg:text-10xl w-52 heading-leading khaya-font-bold">
            Connect <br /> with us
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="lg:text-8xl w-52"></div>
        </div>

        <div className="w-full p-8  lg:p-16 lg:my-16  flex-wrap md:flex lg:flex items-center">
          <div className="w-full md:w-1/2 lg:w-1/3 flex-wrap h-full">
            <div className="flex-wrap">
              <div className="text-4xl md:text-5xl lg:text-5xl font-bold  flex">
                <div className="bg-red-700 px-2 text-white">Operating</div>
              </div>
              <div className="text-4xl md:text-5xl lg:text-5xl  font-bold  flex">
                <div className="bg-red-700 px-2  text-white">Hours</div>
              </div>

              <div className="w-full flex-wrap py-4 md:py-10 lg:py-10">
                <div className="flex-wrap w-full py-2">
                  {/* <div className="title font-bold text-lg lg:text-2xl">
                    Lorem Ipsum
                  </div> */}
                  <div className="info flex text-2xl">
                    <div className="w-2/6">Monday - Friday </div>
                    <div className="w-4/6 justify-start">8am - 4pm</div>
                  </div>
                </div>

                {/* <div className="flex-wrap w-full py-2">
                  <div className="title font-bold text-lg lg:text-2xl">
                    Lorem Ipsum
                  </div>
                  <div className="info flex">
                    <div className="w-1/2">Lorem ipsum dolor sit </div>
                    <div className="w-1/2">---</div>
                  </div>
                </div>

                <div className="flex-wrap w-full py-2">
                  <div className="info flex">
                    <div className="w-1/2">Lorem ipsum dolor sit </div>
                    <div className="w-1/2">----</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 flex-wrap items-start h-full">
            <div className="flex-wrap">
              <div className="text-4xl md:text-5xl lg:text-5xl font-bold  flex">
                <div className="bg-red-700 px-2 text-white">Details</div>
              </div>
            </div>

            <div className="w-full flex-wrap py-4 md:py-10 lg:py-10">
              <div className="flex-wrap w-full py-2">
                <div className="title text-lg lg:text-2xl">082 978 2789</div>
                <div className="title  text-lg lg:text-2xl">
                  info@khayasKitchen.co.za ---->
                </div>
              </div>

              <div className="flex-wrap w-full py-2">
                <div className="title  text-lg lg:text-2xl">
                  Baarken valley 31
                </div>
                <div className="title  text-lg lg:text-2xl">
                  Google maps --->
                </div>
              </div>
            </div>

            <div className="flex-wrap">
              <div className="text-4xl md:text-5xl lg:text-5xl  font-bold  flex">
                <div className="bg-red-700 px-2 text-white">Follow Us</div>
              </div>

              <div className="justify-center flex w-full">
              <div className="flex-wrap w-full  py-2">
                <div className="flex items-end text-xl my-1">
                  <img className="w-8" src={instagram}></img>
                  <div>@KhayaKitchen</div>
                </div>
                <div className="flex items-end text-xl my-1">
                  <img className="w-8" src={facebook}></img>
                  <div>@KhayaKitchen</div>
                </div>
              </div>
            
              </div>
            
            
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 h-full my-4 lg:my-0">
            <div className="text-4xl md:text-5xl lg:text-5xl font-bold  flex">
              <div className="bg-red-700 px-2 text-white">Join Our</div>
            </div>
            <div className="text-4xl md:text-5xl lg:text-5xl font-bold  flex">
              <div className="bg-red-700 px-2 text-white">Newsletter</div>
            </div>

            {/* intergrate mailchimp here */}
            <div className="w-full border-b-2 py-4 my-4">
              <div className="">Name</div>
              <input className="appearance-none w-full"></input>
            </div>

            <div className="w-full border-b-2 py-4 my-4">
              <div className="">Email</div>
              <input className="appearance-none w-full"></input>
            </div>

            <div className="w-full border-b-2 py-4 my-4">
              <div className="">Whatsapp No</div>
              <input className="appearance-none w-full"></input>
            </div>

            <div className="w-full flex justify-end">
              <IconButton
                icon={{ Close: checkedClose, Menu: checkedOriginal }}
                value={isClicked}
                onClicked={changeIsClicked}
                buttonSize={16}
                type={"submit"}
              ></IconButton>
            </div>

            {/* end of integration of mailchimp */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
