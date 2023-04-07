import axios from "axios";

const API_KEY = "zdOKHOqqphpfRnycgJuL65D7iUBlb0lnk1e2FyO1gXPpM3vjxO51po5V";
const API_URL = "https://api.pexels.com/v1/";

export const searchPhotos = async (query) => {
  try {
    const response = await axios.get(
      `${API_URL}search?query=${query}&per_page=9`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    return response.data.photos;
  } catch (error) {
    console.error(error);
  }
};
