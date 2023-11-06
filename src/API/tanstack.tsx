import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./getAPI";

interface Breed {
  id: string;
  url: string;
  name: string;
  breed_group: string;
  bred_for: string;
  height: {
    imperial: string;
    metric: string;
  };
  weight: {
    imperial: string;
    metric: string;
  };
  temperament: string;
  life_span: string;
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
    return null;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((breed) => (
        <li key={breed.id} className="bg-white rounded-lg shadow-md p-4">
          <img
            src={breed.url}
            alt={breed.id}
            className="w-full h-40 object-cover mb-4 rounded-md"
          />
          <h3 className="text-xl font-semibold mb-2">{breed.name}</h3>
          <div className="text-center">
            {breed.breed_group && (
              <p className="mb-2">
                <strong>Breed Group:</strong> {breed.breed_group}
              </p>
            )}
            {breed.bred_for && (
              <p className="mb-2">
                <strong>Bred For:</strong> {breed.bred_for}
              </p>
            )}
            {breed.height && breed.height.imperial && breed.height.metric && (
              <p className="mb-2">
                <strong>Height:</strong> {breed.height.imperial} inches ({breed.height.metric} cm)
              </p>
            )}
            {breed.weight && breed.weight.imperial && breed.weight.metric && (
              <p className="mb-2">
                <strong>Weight:</strong> {breed.weight.imperial} pounds ({breed.weight.metric} kg)
              </p>
            )}
            {breed.temperament && (
              <p className="mb-2">
                <strong>Temperament:</strong> {breed.temperament}
              </p>
            )}
            {breed.life_span && (
              <p>
                <strong>Life Span:</strong> {breed.life_span}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GetData;
