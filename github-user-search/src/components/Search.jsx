import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: "",
    location: "",
    minRepos: ""
  });
  const [userData, setUserData] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchType, setSearchType] = useState("basic");
  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value
    });
  };

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    if (searchParams.username.trim()) {
      setLoading(true);
      setError(null);
      setUserData(null);
      setSearchResults(null);
      
      try {
        const data = await fetchUserData(searchParams.username);
        setUserData(data);
      } catch (err) {
        setError("Looks like we cant find the user");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);
    setSearchResults(null);
    
    try {
      const data = await searchUsers({ ...searchParams, page: currentPage });
      setSearchResults(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (searchResults && searchResults.total_count > searchResults.items.length) {
      setLoading(true);
      try {
        const data = await searchUsers({ ...searchParams, page: currentPage + 1 });
        setSearchResults({
          ...data,
          items: [...searchResults.items, ...data.items]
        });
        setCurrentPage(currentPage + 1);
      } catch (err) {
        setError("Failed to load more results");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setSearchType("basic")}
            className={`px-4 py-2 rounded ${searchType === "basic" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Basic Search
          </button>
          <button
            onClick={() => setSearchType("advanced")}
            className={`px-4 py-2 rounded ${searchType === "advanced" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Advanced Search
          </button>
        </div>

        {searchType === "basic" ? (
          <form onSubmit={handleBasicSearch} className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                name="username"
                placeholder="Enter GitHub username"
                value={searchParams.username}
                onChange={handleInputChange}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Search
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleAdvancedSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={searchParams.username}
                onChange={handleInputChange}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={searchParams.location}
                onChange={handleInputChange}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="minRepos"
                placeholder="Min repositories"
                value={searchParams.minRepos}
                onChange={handleInputChange}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Advanced Search
            </button>
          </form>
        )}
      </div>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      
      {userData && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <img 
              src={userData.avatar_url} 
              alt={userData.login} 
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">{userData.name || userData.login}</h3>
              <p className="text-gray-600">@{userData.login}</p>
              {userData.location && <p className="text-gray-500">{userData.location}</p>}
              <p className="text-gray-500">{userData.public_repos} repositories</p>
              <a 
                href={userData.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}

      {searchResults && (
        <div className="space-y-4">
          <p className="text-gray-600">Found {searchResults.total_count} users</p>
          <div className="grid gap-4">
            {searchResults.items.map((user) => (
              <div key={user.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-4">
                  <img 
                    src={user.avatar_url} 
                    alt={user.login} 
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{user.login}</h4>
                    <a 
                      href={user.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 text-sm"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {searchResults.total_count > searchResults.items.length && (
            <div className="text-center">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
