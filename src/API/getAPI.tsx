import axios from "axios";

export const fetchData = () => {
  const headers = {
    "x-api-key": "live_U4QRaqcAGPAwGk1PTkUZfLarqupGb9KwZxQ3kuxZRL3lIJL8971UwLkXWFTHEdSP",
  };

  return axios
    .get("https://api.thecatapi.com/v1/images/search?limit=10", { headers })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Nie udało się pobrać danych.");
    });
};
