import React from "react";
import StudentHome from "./pages/StudentHome";
import AdminHome from "./pages/AdminHome";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/student" element={<StudentHome />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
