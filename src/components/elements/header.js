import React, { useState, useReducer } from "react";
import menu from "./icons/menu.svg";
import IconButton from "./buttons/icon";
import LinkButton from "./buttons/linkbutton";
import OurStory from "../../core/ourStory";
import Splash from "../../core/splash";
import Overlay from "../../core/overlay";
import theMenu from "./menu.json";
import FouroFour from "../../core/404";
import Connect from "../../core/connect";
import facebook from "../../icons/facebook.svg";
import instagram from "../../icons/instagram.svg";
import menuOriginal from './icons/menu.gif';
import menuClose from './icons/menuClose.gif';
import Gallery from '../../core/gallerly';
import Menu from '../../core/menu';

const ourStory = () => <OurStory></OurStory>;
const splash = () => <Splash></Splash>;
const fouroFour = () => <FouroFour></FouroFour>;
const connect = () => <Connect></Connect>;
const gallery = () => <Gallery></Gallery>;
const foodMenu = () => <Menu></Menu>;

function init(initialState) {
  return { property: false, child: splash, counter: 0 };
}

// important for controller states
//const initialState = false;

function reducer(state, action) {
  switch (action.type) {
    case "menu":
      return {
        property: !state.property,
        child: state.child,
        counter: state.counter + 1,
      };
    case "Our Story":
      return {
        property: !state.property,
        Title: action.type,
        child: ourStory,
        counter: 1,
      };
    case "Gallery":
      return { Title: action.type, child: gallery, counter: 1 };
    case "Menu":
      return { Title: action.type, child: foodMenu, counter: 1 };
    case "Connect With Us":
      return { Title: action.type, child: connect, counter: 1 };
    case "reset":
      return init(action.payload);
    default:
      return { Title: "404", child: fouroFour, counter: 1 };
  }
}
//end of controller state

function ClassicAppLayout({ Subtitle = "Home", children, initialState }) {
  const [isClicked, changeIsClicked] = useReducer(reducer, initialState, init);
  // const [isLinkClicked, changeIsLinkClicked] = useReducer(
  //   reducer,
  //   initialState,
  //   init
  // );

  const classicMenu = () => {
    return (
      <div
        className={
          (isClicked.property ? "fadeInDown " : "fadeOutUp") +
          " max-w-lg md:max-w-md lg:max-w-sm max-h-screen w-full z-10 h-auto bg-white absolute animated "
        }
      >
        <div className="py-4 w-full items-center justify-center flex ">
          <div className="flex-wrap my-16 ">
            {theMenu.appMenu.map((menu, i) => (
              <LinkButton
                key={i}
                icon={i}
                value={isClicked}
                text={menu.title}
                onClicked={changeIsClicked}
              ></LinkButton>
            ))}
          </div>
        </div>
        <div className="w-full h-32 md:h-48 lg:h-48 bg-red-700 p-6 lg:py-8 lg:px-16 text-white font-bold flex text-sm md:text-lg lg:text-sm  ">
          <div className="flex-wrap">
            <div className=""> 61 Amery Crescent , Summerstrand,</div>
            <div className=""> Port Elizabeth, South Afrrica</div>

            <div className="flex my-4">
              <img className="w-8 md:w-12 lg:w-12 lg:my-4" src={facebook}></img>
              <img className="w-8 md:w-12 lg:w-12 lg:my-4" src={instagram}></img>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="w-full h-16 lg:h-24 bg-white flex  text-2xl z-20 fixed pin-t">
        <div className="w-1/2 p-2 ">
          <div className={"flex h-full items-center justify-start"}>
            <IconButton
            icon={{Close:menuClose,Menu:menuOriginal}}
              value={isClicked}
              onClicked={changeIsClicked}
            ></IconButton>
            <h1 className="w-12 lg:w-16 text-xs md:text-xs lg:text-sm">
              {isClicked.Title}
            </h1>
          </div>
        </div>

        <div className="w-1/2 p-2 ">
          <div className={"flex h-full items-center justify-start"}>
            <img className="w-12 lg:w-16" src={Subtitle} alt={Subtitle}></img>
          </div>
        </div>
      </div>
      {isClicked.counter > 0
        ? isClicked.property
          ? classicMenu()
          : classicMenu()
        : undefined}
      {isClicked.child()}
    </>
  );
}

export default ClassicAppLayout;
