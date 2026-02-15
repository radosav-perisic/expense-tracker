import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Auth/Login.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import Home from "./pages/Dashboard/Home.jsx";
import Income from "./pages/Dashboard/Income.jsx";
import Expense from "./pages/Dashboard/Expense.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root route handles redirect */}
        <Route path="/" element={<Root />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />

        {/* Optional: Catch-all route for unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// -------------------- Root redirect logic --------------------
const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  // In v7, Navigate works the same as v6, but always include "replace" to avoid extra history entry
  return isAuthenticated ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};
