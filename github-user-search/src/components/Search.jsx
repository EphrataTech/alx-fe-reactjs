import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim()) {
      setLoading(true);
      setError(null);
      setUserData(null);
      
      try {
        const data = await fetchUserData(username);
        setUserData(data);
      } catch (err) {
        setError("Looks like we cant find the user");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '8px', marginRight: '8px', width: '200px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
          <img 
            src={userData.avatar_url} 
            alt={userData.login} 
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
          <h3>{userData.name || userData.login}</h3>
          <p>@{userData.login}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
