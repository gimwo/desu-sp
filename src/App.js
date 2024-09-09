import "./App.css";
// import "./layout/Layout";
import Layout from "./layout/Layout";
// import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import UseCase from "./pages/UseCase";

import Product from "./pages/Product";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import { Route, Routes, useParams } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/hero/components/Navbar";
import { useEffect, useState } from "react";
import { PageProvider } from "./context/PageContext";
import { ColorProvider } from "./context/ColorContext";
import WJ1 from "./components/waterjet/WJ1";
import WJ2 from "./components/waterjet/WJ2";
import WJ3 from "./components/waterjet/WJ3";
import WJ4 from "./components/waterjet/WJ4";
import WJ5 from "./components/waterjet/WJ5";
import WJ6 from "./components/waterjet/WJ6";
import WJ7 from "./components/waterjet/WJ7";
import WJ8 from "./components/waterjet/WJ8";
import WJ9 from "./components/waterjet/WJ9";
import WJ10 from "./components/waterjet/WJ10";
import WJ11 from "./components/waterjet/WJ11";
import WJ12 from "./components/waterjet/WJ12";

import PT1 from "./components/pressure/PT1";
import PT2 from "./components/pressure/PT2";
import PT3 from "./components/pressure/PT3";
import PT4 from "./components/pressure/PT4";
import PT5 from "./components/pressure/PT5";
import PT6 from "./components/pressure/PT6";
import PT7 from "./components/pressure/PT7";

import CT1 from "./components/cleaning/CT1";
import CT2 from "./components/cleaning/CT2";
import CT3 from "./components/cleaning/CT3";
import CT4 from "./components/cleaning/CT4";

import EV1 from "./components/environmental/EV1";
import EV2 from "./components/environmental/EV2";
import EV3 from "./components/environmental/EV3";
import EV4 from "./components/environmental/EV4";
import EV5 from "./components/environmental/EV5";
import World from "./components/World/World";

function App() {
  const [page, setPage] = useState("");
  const [color, setColor] = useState({
    color: localStorage.getItem("color"),
    bgColor: "#0C191D",
  });

  const { params } = useParams();
  console.log(`PARAMS: ${params}`);

  return (
    <ColorProvider value={{ color, setColor }}>
      <PageProvider value={{ page, setPage }}>
        <Router>
          {/* <Layout> */}
          <Routes>
            <Route path="/" element={<World />} />
            <Route
              path="/use-cases"
              element={<UseCase handlePage={setPage} />}
            />
            <Route path="/product" element={<Product handlePage={setPage} />} />
            <Route
              path="/contact"
              element={<ContactPage handlePage={setPage} />}
            />
            <Route path="/menu" element={<MenuPage handlePage={setPage} />} />
            <Route path="/wj1" element={<WJ1 handlePage={setPage} />} />
            <Route path="/wj2" element={<WJ2 handlePage={setPage} />} />
            <Route path="/wj3" element={<WJ3 handlePage={setPage} />} />
            <Route path="/wj4" element={<WJ4 handlePage={setPage} />} />
            <Route path="/wj5" element={<WJ5 handlePage={setPage} />} />
            <Route path="/wj6" element={<WJ6 handlePage={setPage} />} />
            <Route path="/wj7" element={<WJ7 handlePage={setPage} />} />
            <Route path="/wj8" element={<WJ8 handlePage={setPage} />} />
            <Route path="/wj9" element={<WJ9 handlePage={setPage} />} />
            <Route path="/wj10" element={<WJ10 handlePage={setPage} />} />
            <Route path="/wj11" element={<WJ11 handlePage={setPage} />} />
            <Route path="/wj12" element={<WJ12 handlePage={setPage} />} />

            <Route path="/pt1" element={<PT1 handlePage={setPage} />} />
            <Route path="/pt2" element={<PT2 handlePage={setPage} />} />
            <Route path="/pt3" element={<PT3 handlePage={setPage} />} />
            <Route path="/pt4" element={<PT4 handlePage={setPage} />} />
            <Route path="/pt5" element={<PT5 handlePage={setPage} />} />
            <Route path="/pt6" element={<PT6 handlePage={setPage} />} />
            <Route path="/pt7" element={<PT7 handlePage={setPage} />} />

            <Route path="/ct1" element={<CT1 handlePage={setPage} />} />
            <Route path="/ct2" element={<CT2 handlePage={setPage} />} />
            <Route path="/ct3" element={<CT3 handlePage={setPage} />} />
            <Route path="/ct4" element={<CT4 handlePage={setPage} />} />

            <Route path="/ev1" element={<EV1 handlePage={setPage} />} />
            <Route path="/ev2" element={<EV2 handlePage={setPage} />} />
            <Route path="/ev3" element={<EV3 handlePage={setPage} />} />
            <Route path="/ev4" element={<EV4 handlePage={setPage} />} />
            <Route path="/ev5" element={<EV5 handlePage={setPage} />} />
          </Routes>
          {/* </Layout> */}
        </Router>
      </PageProvider>
    </ColorProvider>
  );
}

export default App;
