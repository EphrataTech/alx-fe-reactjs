function UserProfile() {
  return (
    <div className="user-profile">
        <div className="container" bg-gray-100 p-8 sm:p-4 md:p-8 max-w-sm sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg> 
      <img src="https://via.placeholder.com/150" alt="User" rounded-full w-36 h-36 mx-auto  />
      <h1 text-xl sm:text-lg md:text-xl text-blue-800 my-20>John Doe</h1>
      <p text-gray-400 text-base sm:text-sm md:text-base>Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
    </div>
  );
}

export default UserProfile;