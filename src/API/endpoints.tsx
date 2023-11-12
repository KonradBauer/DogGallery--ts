import axios from "axios";

const headers = {
  "x-api-key": "live_U4QRaqcAGPAwGk1PTkUZfLarqupGb9KwZxQ3kuxZRL3lIJL8971UwLkXWFTHEdSP",
};

export const fetchData = async () => {
  try {
    const response = await axios.get("https://api.thedogapi.com/v1/images/search?limit=13", {
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to download data. Check your internet connection..");
  }
};

export const breedsData = async (page = 1, pageSize = 21) => {
  try {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/breeds?limit=${pageSize}&${page}`,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to download data. Check your internet connection..");
  }
};

export const SearchBreedsData = async () => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds`, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to download data. Check your internet connection..");
  }
};

export const dogData = async (id: string) => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`, { headers });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to retrieve dog ID data ${id}: ${error}`);
  }
};
