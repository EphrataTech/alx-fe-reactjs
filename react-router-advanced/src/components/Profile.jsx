// src/components/Profile.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>

      <nav style={{ marginBottom: "10px" }}>
        <Link to="details" style={{ marginRight: "10px" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes */}
      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;