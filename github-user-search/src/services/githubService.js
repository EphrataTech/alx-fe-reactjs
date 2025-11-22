import axios from "axios";

const BASE_URL = "https://api.github.com";
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: GITHUB_API_KEY ? `token ${GITHUB_API_KEY}` : undefined,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
 