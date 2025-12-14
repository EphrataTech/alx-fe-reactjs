
import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>

      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes rendered here */}
      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* Optional Outlet if you want nested routing from App.jsx */}
      <Outlet />
    </div>
  );
};

export default Profile;