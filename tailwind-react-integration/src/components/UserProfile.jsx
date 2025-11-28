function UserProfile() {
  return (
    <div className="user-profile">
        <div className="container" bg-gray-100 p-8 sm:p-4 md:p-8 max-w-sm sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover-shadow-xl> 
      <img src="https://via.placeholder.com/150" alt="User" rounded-full sm:w-24 h-24 md:w-36 h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out/>
      <h1 text-xl sm:text-lg md:text-xl text-blue-800 my-20 hover:text-blue-500>John Doe</h1>
      <p text-gray-400 text-base sm:text-sm md:text-base>Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
    </div>
  );
}

export default UserProfile;