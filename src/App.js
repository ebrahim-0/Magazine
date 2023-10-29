import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About";
import Blog from "./components/Blog";
function App() {
  return (
    <>
      <header className="shadow-[0_4px_10px_rgb(0,0,0,0.2)] sticky top-0 z-20 bg-white">
        <Header />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Blog />
            </>
          }
        />

        <Route path="login" element={<Login />} />

        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
