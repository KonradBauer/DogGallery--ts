import React from "react";
import { useQuery } from "@tanstack/react-query";
import { dogData } from "../API/endpoints";
import { useParams } from "react-router-dom";
import { Error } from "../components/Error/Error";

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
  const { id } = useParams<{ id: string }>();

  const { isLoading, error, data } = useQuery<DogDetails>({
    queryKey: ["dog", id],
    queryFn: () => dogData(id),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-t-5 border-r-1 border-b-4 border-gray-500 h-12 w-12 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error errorMessage={error.message} />
      </div>
    );
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
    <div className="bg-white shadow-md p-4 text-neutral bg-gradient-to-b from-white to-neutral-500 flex justify-center items-center">
      <div className="hero-content flex-col lg:flex-row ">
        <img
          src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`}
          alt={reference_image_id}
          className="max-w-sm w-full rounded-lg shadow-2xl"
        />
        <div className="flex justify-start">
          <p className="py-6">
            <h1 className="text-4xl font-bold mb-10">{name}</h1>
            {breed_group && (
              <p className="mb-2">
                <strong>Breed Group:</strong> {breed_group}
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
              </p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
