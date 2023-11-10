import { GetDogDetails } from "../../API/getDogDetails";
import { Footer } from "../Footer/Footer";

export const DogDetails: React.FC = () => {
  return (
    <div>
      <GetDogDetails />
      <Footer />
    </div>
  );
};
