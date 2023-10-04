import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </main>
  );
}

export default App;
