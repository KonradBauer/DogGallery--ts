import React from "react";
import { GetData } from "./API/tanstack";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        className="
      py-3 
      px-3 
      flex 
      justify-center 
      bg-neutral 
      text-indigo-800 
      font-open-sans 
      font-semibold 
      border-spacing-0 "
      >
        <GetData />
      </div>
      <Footer />
    </>
  );
};

export default App;
