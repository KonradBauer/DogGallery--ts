import React from "react";
import { useQuery } from "@tanstack/react-query";
import { BreedsData } from "./endpoints";

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
  reference_image_id: string;
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
        <a
          href="/"
          key={breed.reference_image_id}
          className="bg-white rounded-lg shadow-md p-4 text-neutral"
        >
          <h3 className="text-xl font-bold mb-2 flex justify-center">{breed.name}</h3>
          <img
            src={breed.image.url}
            alt={breed.image.id}
            className="w-full h-40 object-contain mb-4 rounded-md"
          />

          {/* <div className="text-center">
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
          </div> */}
        </a>
      ))}
    </ul>
  );
};
