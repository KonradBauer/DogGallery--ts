import React from "react";
import { useQuery } from "@tanstack/react-query";
import { BreedsData } from "./endpoints";
import { Link } from "react-router-dom";

interface Breed {
  id: string;
  url: string;
  name: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
}

export const GetBreeds: React.FC = () => {
  const { isLoading, error, data } = useQuery<Breed[]>({
    queryKey: ["breeds"],
    queryFn: () => {
      return BreedsData();
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
    return null;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((breed) => (
        <Link
          to="/dog-details"
          key={breed.id}
          className="bg-white rounded-lg shadow-md p-4 text-neutral"
        >
          <h3 className="text-xl font-bold mb-2 flex justify-center">{breed.name}</h3>
          <img
            src={breed.image.url}
            alt={breed.image.id}
            className="w-full h-40 object-contain mb-4 rounded-md"
          />
        </Link>
      ))}
    </ul>
  );
};
