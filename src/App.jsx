import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./pages/Register";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
}

export default App;
