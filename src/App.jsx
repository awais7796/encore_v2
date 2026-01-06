import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}/>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
