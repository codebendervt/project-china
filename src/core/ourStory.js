import React, { useState } from "react";
import backgroundImage from "../images/images/1.jpeg";

const divStyle = {
  color: "blue",
  backgroundImage: "url(" + backgroundImage + ")",
};

function OurStory(props) {
  return (
    <div className="w-full h-auto md:h-screen md:flex lg:h-screen flex-wrap lg:flex bg-red-700">
      {/*  style={divStyle} */}
      {/* <div className="bg-cover bg-center h-full md:h-auto md:full lg:w-1/3 lg:h-auto lg:relative ">
    <div className="h-64 w-screen"></div>
    <div className="h-12 w-screen"></div>
    <div className="md:h-64 w-screen"></div>
  </div> */}

      <div className="text-white w-full md:w-full  lg:relative lg:w-full bg-red-700 rounded-t-lg shadow-md  md:shadow-none lg:shadow-none lg:rounded-none flex lg:items-center lg:justify-center ">
        <div className="flex md:items-center">
          <div className="flex-wrap w-full ">
            <div className="w-full px-6 mt-16 p-4 lg:p-8 md:mt-16 lg:my-0 md:px-6 lg:px-32  h-auto flex lg:justify-left items-center ">
              <div className="w-full max-w-sm md:max-w-xl lg:max-w-6xl text-left">
                <h2 className="text-5xl md:text-6xl lg:text-10xl khaya-font-bold ">
                  Our Story
                </h2>
              </div>
            </div>

            <div className="w-full px-6 p-4 lg:p-0 md:px-6 lg:px-32  h-auto flex lg:justify-left items-center Gmabata-font-Medium ">
              {/*max-w-sm md:max-w-xl lg:max-w-6xl  */}
              <div className=" w-full">
                <div className="text-md md:text-xl lg:text-xl">
                  <p className="my-2">
                    Khaya’s Kitchen is a proudly South African brand from the
                    windy shores of the Nelson Mandela Bay in Port Elizabeth,
                    Eastern Cape.
                  </p>

                  <p className="my-2">
                    Led by the talented, passionate and former Master Chef
                    participant Khayakazi Kepe, khaya’s Kitchen cooks up
                    delicious African inspired dishes from Umqusho (samp &
                    beans) to Stuffed lamb curry dombolo (steamed bread),
                    drawing inspiration from Khaya’s upbringing in Mlamli
                    Village , a village in the Eastern Cape but with a fresh and
                    innovative twist. These delightful ready-to-eat meals are
                    available at selected retail stores and for delivery in and
                    around Port Elizabeth.
                  </p>
                  <p className="my-12">
                    Khaya’s kitchen is a lot more than just a business but a
                    brand where passion and love for food intertwine. It is
                    deeply rooted in community and the celebration of the
                    African heritage one dish at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
