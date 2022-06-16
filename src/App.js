import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/bootstrap.css";
import "./App.css";
import "./css/styles.css";
const Footer = React.lazy(() => import("./components/Footer"));
const Header = React.lazy(() => import("./components/Header"));
const Main = React.lazy(() => import("./components/Main"));
const Youtube = React.lazy(() => import("./Youtube/Youtube"));
const Iphone = React.lazy(() => import("./pages/Iphone"));
const Mac = React.lazy(() => import("./pages/Mac"));
const Support = React.lazy(() => import("./pages/Support"));
const TV = React.lazy(() => import("./pages/TV"));
const Watch = React.lazy(() => import("./pages/Watch"));
const Music = React.lazy(() => import("./pages/Music"));
const Ipad = React.lazy(() => import("./pages/Ipad"));
const FourOfFour = React.lazy(() => import("./pages/FourOfFour/FourOfFour"));
const DetailIphone = React.lazy(() => import("./pages/DetailIphone"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<p className="center"> Loading...</p>}>
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
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
