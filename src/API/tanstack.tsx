import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./getAPI";

const GetData: React.FC = () => {
  const { isLoading, error, data } = useQuery({
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

  const breedsNames = Object.keys(data);

  return (
    <ul>
      {breedsNames.map((breedName) => (
        <li key={breedName}>{breedName}</li>
      ))}
    </ul>
  );
};

export default GetData;
