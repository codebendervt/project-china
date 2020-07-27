import React from "react";
import ClassicAppLayout from "./components/elements/header";
import InputControllerExample from "./components/temp/ComponentController";
import logo from "./icons/logo.svg";

function App() {
  return (
    <div className="w-screen h-full lg:h-screen lg:overflow-x-hidden lg:overflow-hidden ">
      <div className="flex-wrap h-full">
        <ClassicAppLayout Subtitle={logo}>
 
        </ClassicAppLayout>
      </div>
    </div>
  );
}

export default App;
