import { useQuery } from "@tanstack/react-query";
import { useHistory, useLocation } from "react-router-dom";
import { searchBreedsData, breedsData } from "../API/endpoints";
import { Link } from "react-router-dom";
import { Error } from "../components/Error/Error";
import { Pagination } from "../components/Pagination/Pagination";
import { NoSearchResult } from "../components/NoSearchResult/NoSearchResult";
import { useEffect, useState } from "react"; // Import useEffect

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
  const history = useHistory();
  const location = useLocation();

  const defaultPageSize = 15;
  const defaultPageNumber = new URLSearchParams(location.search).get("page");
  const query = new URLSearchParams(location.search).get("search");

  const { isLoading, error, data } = useQuery<Breed[]>({
    queryKey: ["breeds", { query, page: defaultPageNumber }],
    queryFn: async () => {
      if (!query || query.trim() === "") {
        return breedsData(parseInt(defaultPageNumber || "1"), defaultPageSize);
      }

      const breeds = await searchBreedsData();

      return breeds.filter((breed: Breed) =>
        breed.name.toLowerCase().includes(query.toLowerCase()),
      );
    },
  });

  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  const loadImage = (url: string): Promise<Event> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
  };

  const loadImages = async (breeds: Breed[]): Promise<void> => {
    try {
      const imagePromises = breeds.map((breed) => loadImage(breed.image.url));
      await Promise.all(imagePromises);
      setAreImagesLoaded(true);
    } catch (error) {
      console.error("Error loading images:", error);
    }
  };

  useEffect(() => {
    if (data) {
      setAreImagesLoaded(false);
      loadImages(data);
    }
  }, [data]);

  const handlePageChange = (pageNumber: number) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("page", pageNumber.toString());
    history.push({ search: queryParams.toString() });
  };

  if (isLoading || !areImagesLoaded) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="loader border-t-5 border-r-1 h-12 w-12 animate-spin rounded-full border-b-4 border-white ease-linear"></div>
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

  if (data === undefined) {
    return null;
  }

  if (data.length === 0) {
    return <NoSearchResult />;
  }

  return (
    <div className="flex flex-col items-center">
      <ul
        className={`${
          data.length === 1 || data.length === 2
            ? "flex flex-row items-center justify-between gap-6 py-3"
            : "grid grid-cols-1 gap-6 py-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5"
        }`}
      >
        {data.map((breed) => (
          <Link
            to={`/dog-details/${breed.id}`}
            key={breed.id}
            className="0.2s sm:hover-none rounded-lg bg-white p-4 text-neutral shadow-md transition hover:-translate-y-0.5"
          >
            <h3 className="mb-2 flex justify-center text-xl font-bold">
              {breed.name}
            </h3>
            <img
              src={breed.image.url}
              alt={breed.image.id}
              className="mb-4 h-40 w-full transform object-contain"
            />
          </Link>
        ))}
      </ul>
      <Pagination onPageChange={handlePageChange} />
      <div className="mt-4"></div>
    </div>
  );
};
