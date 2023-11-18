import { Footer } from "../Footer/Footer";
import { GetBreeds } from "../../Renderers/GetBreeds";
import { MainContainer } from "../MainContainer/MainContainer";

export const Homepage: React.FC = () => {
  return (
    <>
      <MainContainer>
        <GetBreeds />
      </MainContainer>
      <Footer />
    </>
  );
};
