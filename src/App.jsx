import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";
import Accessories from "./pages/Accessories";
import Beauty from "./pages/Beauty";
import Brushes from "./pages/Beauty/Brushes/Brushes";
import HairCare from "./pages/Beauty/HairCare/HairCare";
import Makeup from "./pages/Beauty/Makeup/Makeup";
import Manicure from "./pages/Beauty/Manicure/Manicure";
import Perfumery from "./pages/Beauty/Perfumery/Perfumery";
import Styling from "./pages/Beauty/Styling/Styling";
import Body from "./pages/Beauty/blockBody/body";
import Face from "./pages/Beauty/blockFace/Face";
import Card from "./pages/Card";
import Cart from "./pages/Cart";
import Cloth from "./pages/Cloth";
import Luxzury from "./pages/Luxzury";
import Men from "./pages/Men";
import Shoes from "./pages/Shoes";
import Sport from "./pages/Sport";
import Women from "./pages/Women";
// css
import "./App.css";
import CardSearch from "./components/cardSearch/CardSearch";
import { useSelector } from "react-redux";

const App = () => {
  const newArry = useSelector((st) => st.search.item2);
  return (
    <div>
      <ToastContainer />
      {newArry.length > 0 ? <CardSearch /> : null}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Luxzury />} />
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/card" element={<Card />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/face" element={<Face />} />
          <Route path="/body" element={<Body />} />
          <Route path="/hairCare" element={<HairCare />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/perfumery" element={<Perfumery />} />
          <Route path="/manicure" element={<Manicure />} />
          <Route path="/styling" element={<Styling />} />
          <Route path="/brushes" element={<Brushes />} />
          <Route path="/sport" element={<Sport />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
