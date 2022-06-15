import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Youtube from "./Youtube/Youtube";
import YouTubeDetail from "./YouTubeDetail/YouTubeDetail";
import Iphone from "./pages/Iphone";
import DetailIphone from "./pages/DetailIphone";
import "./css/styles.css";
import "./css/bootstrap.css";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/Iphone" element={<Iphone />} />
        </Routes>
        <Routes>
          <Route path="/Iphone/:IphoneId" element={<DetailIphone />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Youtube />} />
        </Routes>
        <Routes>
          <Route path="/YouTubeDetail" element={<YouTubeDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
