import { GetDogDetails } from "../../API/getDogDetails";
import { Footer } from "../Footer/Footer";

export const DogDetails: React.FC = () => {
  return (
    <div>
      <GetDogDetails />
      <div className="w-full fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
};
