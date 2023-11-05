import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./getAPI";

const GetData: React.FC = () => {
  const { isLoading, error, data } = useQuery({ queryKey: ["breeds"], queryFn: fetchData });

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>Błąd: {error.message}</div>;
  }

  const breedsNames = Object.keys(data);

  return (
    <div>
      {breedsNames.map((breedName) => (
        <div key={breedName}>
          <ul>
            <li>{breedName}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GetData;
