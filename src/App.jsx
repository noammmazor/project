import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useUserAuth } from "../src/context/Context";

import Header from "./components/Header";
import Shortheader from "./components/Shortheader";

import Home from "./pages/Home";
import Tips from "./pages/Tips";
import Market from "./pages/Market";
import Filter from "./pages/Filter";

import Like from "./pages/Like";
import DogDetails from "./components/DogDetails";

import ReasonsDog from "./components/ReasonsDog";
import PercfetDog from "./components/PercfetDog";
import FoodReasons from "./components/FoodReasons";

import Products from "./components/Products";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Signup from "./singIn/Signup";
import SignIn from "./singIn/LogIn";
import Parks from "./pages/Parks";

function App() {

  const { user } = useUserAuth();

  const [product, setProduct] = useState([]);


  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/64578584b89b1e229998d006")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let obj = [];
        for (const key in data.record) {
          obj = [...obj, ...data.record[key]]
        }
        setProduct(obj);
      })
  }, []);
  //  console.log(product);



  return (
    <div className="">



      {user ?
        <Header data={product} /> : <Shortheader />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reasonsDog" element={<ReasonsDog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logIn" element={<SignIn />} />

        <Route path="/filters" element={<Filter />} />
        <Route path="/percfetdog" element={<PercfetDog />} />
        <Route path="/:dogCard" element={<DogDetails />} />
        <Route path="/like" element={<Like />} />

        <Route path="/tips" element={<Tips />} />
        <Route path="/parks" element={<Parks />} />


        <Route path="/market" element={<Market data={product} />} />
        <Route path="/market/:product" element={<Products data={product} />} />
        <Route path="/market/:product/:data2" element={<ProductList data={product} />} />

        <Route path="/foodReasons" element={<FoodReasons />} />

      </Routes>

      {
        user ?
          <Footer /> : <div></div>
      }

    </div>
  );
}

export default App;
