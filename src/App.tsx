import React from "react";

import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { GetRandomPhotos } from "./API/getRandomPhotos";
import { GetBreeds } from "./API/getBreeds";

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
        <GetBreeds />
      </div>
      <Footer />
    </>
  );
};

export default App;
