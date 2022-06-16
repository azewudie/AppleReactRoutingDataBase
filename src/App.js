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
import FourOfFour from "./pages/FourOfFour/FourOfFour";
import Mac from "./pages/Mac";
import Watch from "./pages/Watch";
import TV from "./pages/TV";
import Support from "./pages/Support";
import Music from "./pages/Music";
import Ipad from "./pages/Ipad";
import "./css/styles.css";
import "./css/bootstrap.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<FourOfFour />} />

          <Route path="/Iphone" element={<Iphone />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/Ipad" element={<Ipad />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/TV" element={<TV />} />

          <Route path="/Iphone/:IphoneId" element={<DetailIphone />} />

          <Route path="/" element={<Main />} />

          {/* <Route path="/YouTubeDetail" element={<YouTubeDetail />} /> */}
        </Routes>
        <Routes>
          <Route path="/" element={<Youtube />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
