import React from "react";
import { useQuery } from "@tanstack/react-query";
import { DogData } from "./endpoints";

interface DogDetails {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
}

export const GetDogDetails: React.FC = () => {
  const { isLoading, error, data } = useQuery<DogDetails>({
    queryKey: ["dog"],
    queryFn: () => {
      return DogData();
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

  if (!data) {
    return null;
  }

  const {
    weight,
    height,
    name,
    bred_for,
    breed_group,
    life_span,
    temperament,
    origin,
    reference_image_id,
  } = data;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-neutral">
      <h3 className="text-xl font-bold mb-2 flex justify-center">{name}</h3>
      <img
        src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`}
        alt={reference_image_id}
        className="w-full h-40 object-contain mb-4 rounded-md"
      />

      <div className="text-center">
        {breed_group && (
          <p className="mb-2">
            <strong>Breed Group:</strong> {breed_group}
          </p>
        )}
        {bred_for && (
          <p className="mb-2">
            <strong>Bred For:</strong> {bred_for}
          </p>
        )}
        {height && height.imperial && height.metric && (
          <p className="mb-2">
            <strong>Height:</strong> {height.imperial} inches ({height.metric} cm)
          </p>
        )}
        {weight && weight.imperial && weight.metric && (
          <p className="mb-2">
            <strong>Weight:</strong> {weight.imperial} pounds ({weight.metric} kg)
          </p>
        )}
        {temperament && (
          <p className="mb-2">
            <strong>Temperament:</strong> {temperament}
          </p>
        )}
        {life_span && (
          <p className="mb-2">
            <strong>Life Span:</strong> {life_span}
          </p>
        )}
        {origin && (
          <p className="mb-2">
            <strong>Origin:</strong> {origin}
          </p>
        )}
      </div>
    </div>
  );
};
