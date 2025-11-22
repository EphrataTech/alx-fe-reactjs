// src/components/Search.jsx
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username); // Call parent function
      setUsername("");    // Clear input after search
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 flex-1 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
