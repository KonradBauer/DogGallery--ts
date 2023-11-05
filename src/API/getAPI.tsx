import axios from "axios";

export const fetchData = () => {
  return axios
    .get("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.data.message)
    .catch((error) => {
      throw new Error("Nie udało się pobrać danych.");
    });
};
