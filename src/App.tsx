import React from "react";

import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
//import { GetRandomPhotos } from "./API/getRandomPhotos";
import { GetBreeds } from "./API/getBreeds";
import { Pagination } from "./components/Pagination/Pagination";
import { MainContainer } from "./components/MainContainer/MainContainer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <GetBreeds />
      </MainContainer>
      <Pagination />
      <Footer />
    </>
  );
};

export default App;
