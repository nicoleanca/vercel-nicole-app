import * as React from "react";
import Layout from "./components/layout";
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/about";
import NotFound from "./pages/404";
import { pages } from "./utils/constants";
import CvPage from "./pages/mycv";
import PortfolioPage from "./pages/portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutPage /> }/>
        <Route path="/mycv" element={<CvPage />}/>
        <Route path="/portfolio" element={<PortfolioPage /> }/>
        <Route path="/404" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
};

export const Head = () => <div />;

export default App;
