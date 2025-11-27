// src/components/UserCard.jsx
const UserCard = ({ user }) => {
  if (!user) return null; // Don't render if no user data

  return (
    <div className="border p-4 mt-4 rounded shadow-md max-w-sm">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold text-center mt-2">
        {user.name || user.login}
      </h2>
      <p className="text-center text-gray-600">@{user.login}</p>
      <div className="text-center mt-2">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default UserCard;
