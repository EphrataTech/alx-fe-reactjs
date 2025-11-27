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

export const searchUsers = async (searchParams) => {
  try {
    const { username, location, minRepos, page = 1 } = searchParams;
    let query = "";
    
    if (username) query += username;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;
    
    // GitHub API endpoint for user search: https://api.github.com/search/users?q={query}
    const response = await axios.get("https://api.github.com/search/users?q=" + encodeURIComponent(query.trim()) + `&page=${page}&per_page=10`, {
      headers: {
        Authorization: GITHUB_API_KEY ? `token ${GITHUB_API_KEY}` : undefined,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Search failed");
  }
};
 