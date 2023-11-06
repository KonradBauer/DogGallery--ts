import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./getAPI";

interface Breed {
  id: string;
  url: string;
}

const GetData: React.FC = () => {
  const { isLoading, error, data } = useQuery<Breed[]>({
    queryKey: ["breeds"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return fetchData();
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-t-5 border-r-1 border-b-4 border-gray-500 h-12 w-12 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div>Błąd: {error.message}</div>;
  }

  if (data === undefined) {
    return null; // Zwróć null lub inny odpowiedni komponent w przypadku braku danych
  }

  return (
    <ul>
      {data.map((breed) => (
        <li key={breed.id}>
          <img src={breed.url} alt={breed.id} width="200" height="150" />
        </li>
      ))}
    </ul>
  );
};

export default GetData;
