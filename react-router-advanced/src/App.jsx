
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main style={{ padding: 20 }}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile/*" element={<Profile />} />
          </Route>

          {/* Dynamic route for checker */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}