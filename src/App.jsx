import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Page404 from "./pages/Page404";
import Index from "./pages/homepage/views";
import AboutUs from "./pages/homepage/views/AboutUs";
import Home from "./pages/homepage/views/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Index />}>
          <Route path="" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
