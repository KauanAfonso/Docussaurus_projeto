import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./pages/login";
import Home from "./pages/home";
import Env from "./pages/environments";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/environments" element={<Env />}/>
      </Routes>
    </Router>
  )
}

export default App