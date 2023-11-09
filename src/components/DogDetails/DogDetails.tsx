import { GetDogDetails } from "../../API/getDogDetails";
import { Footer } from "../Footer/Footer";

export const DogDetails = () => {
  return (
    <div>
      <GetDogDetails />
      <Footer />
    </div>
  );
};
