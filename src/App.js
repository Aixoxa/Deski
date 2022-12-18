import "./App.css";
import Preloader from "./assets/PRELOADER/Preloader";
import TopScroll from "./assets/TopScroll";
import Home from "./components/HOME/Home";
import Service from "./components/SERVICES/Service";
import TeamMembers from "./components/TEAM/TEAM_MEMBERS/TeamMembers";
import MemberProfile from "./components/TEAM/MEMBER_PROFILE/MemberProfile";
import Login from "./components/LOGIN/Login";
import SignUp from "./components/SIGNUP/SignUp";
import Pricing from "./components/PRICING/Pricing";
import Terms from "./components/TERMS/Terms";
import About from "./components/ABOUT/About";
import ErrorPage from "./components/ERRORPAGE/ErrorPage";
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  Aos.init({ duration: 2000 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloaderTimer = setTimeout(() => setLoading(false), 1000);

    return () => clearInterval(preloaderTimer);
  }, []);

  return !loading ? (
    <Fade delay={0} duration={200}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/team" element={<TeamMembers />} />
            <Route path="/team-member/:id" element={<MemberProfile />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

          <TopScroll />
        </div>
      </Router>
    </Fade>
  ) : (
    <Preloader />
  );
}

export default App;

//how to create string in javascript?
