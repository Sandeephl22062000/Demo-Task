import React from "react";
import Home from "./pages/Home";
import "./styles/globals.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryDetails from "./components/CategoryDetails";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/digital" element={() => {}} />
          <Route
            exact
            path="/category/:categoryId"
            element={<CategoryDetails />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
