import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}
