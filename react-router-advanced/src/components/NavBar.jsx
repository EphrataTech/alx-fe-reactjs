
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
      <Link to="/">Home</Link> {" | "}
      <Link to="/profile">Profile</Link> {" | "}
      <Link to="/blog/101">Blog 101</Link> {" | "}
      <Link to="/login">Login</Link>
    </nav>
  );
}