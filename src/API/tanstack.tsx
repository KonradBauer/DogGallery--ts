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
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
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
