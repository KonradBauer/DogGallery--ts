import React from "react";

import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { GetBreeds } from "../../renderers/getBreeds";
import { MainContainer } from "../MainContainer/MainContainer";

export const Homepage: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <GetBreeds />
      </MainContainer>
      <Footer />
    </>
  );
};
