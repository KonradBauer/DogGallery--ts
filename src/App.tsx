import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Dog {
  name: string;
}

const App: React.FC = () => {
  const fetchDogs = async () => {
    try {
      const name = "doberman";
      const response = await axios.get(`https://api.api-ninjas.com/v1/dogs?name=${name}`, {
        headers: {
          "X-Api-Key": "o7wqm2xxGZlYQ0dUeKoIuQ==PRLizpPUVv2xPXkd",
        },
      });

      const { breeds } = response.data.message;
      const dogList: Dog[] = Object.keys(breeds).map((breedName) => ({
        name: breedName,
      }));
      return dogList;
    } catch (error) {
      throw new Error("Network response was not ok");
    }
  };

  const { isPending, error, data } = useQuery<Dog[]>({
    queryKey: ["dogs"],
    queryFn: fetchDogs,
  });

  if (isPending) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>Błąd: {error.message}</div>;
  }

  return (
    <div>
      {data?.map((dog) => (
        <div key={dog.name}>{dog.name}</div>
      ))}
    </div>
  );
};

export default App;
