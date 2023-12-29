import axios from "axios";

const headers = {
  "x-api-key": process.env.REACT_APP_API_KEY,
};

export const breedsData = async (pageNumber: number, pageSize: number) => {
  try {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/breeds?page=${pageNumber}&limit=${pageSize}`,
      {
        headers,
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(
      "Failed to download data. Check your internet connection..",
    );
  }
};

export const searchBreedsData = async () => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds`, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      "Failed to download data. Check your internet connection..",
    );
  }
};

export const dogData = async (id: string) => {
  try {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/breeds/${id}`,
      { headers },
    );
    return response.data;
  } catch (error) {
    throw new Error(`Failed to retrieve dog ID data ${id}: ${error}`);
  }
};
