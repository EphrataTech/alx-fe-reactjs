import { useContext } from 'react';
import UserContext from './UserContext';


const userData = useContext(UserContext);
function UserDetails() {
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;