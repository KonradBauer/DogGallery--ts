import axios from "axios";

const headers = {
  "x-api-key": "live_U4QRaqcAGPAwGk1PTkUZfLarqupGb9KwZxQ3kuxZRL3lIJL8971UwLkXWFTHEdSP",
};

export const fetchData = async () => {
  try {
    const response = await axios.get("https://api.thedogapi.com/v1/images/search?limit=12", {
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error("Nie udało się pobrać danych.");
  }
};

export const BreedsData = async () => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds`, { headers });
    return response.data;
  } catch (error) {
    throw new Error("Nie udało się pobrać danych.");
  }
};

export const DogData = async (id: string) => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Nie udało się pobrać danych psa o ID ${id}: ${error}`);
  }
};

export const SearchData = async (breedId: string) => {
  try {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error("Nie udało się pobrać danych.");
  }
};
