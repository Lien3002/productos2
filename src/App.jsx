import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import descripcion from "./pages/descripcion.jsx";
import Prod1 from "./pages/prod1.jsx";
import Prod2 from "./pages/prod2.jsx";
import Prod3 from "./pages/Prod3.jsx";
import Footer from "./Components/Footer/footer";
import "./Components/Firebase.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" Component={HomePage} />
        <Route path="/descripcion" Component={descripcion} />
        <Route path="/prod1" Component={Prod1} />
        <Route path="/prod2" Component={Prod2} />
        <Route path="/prod3" Component={Prod3} />
      </Routes>
      {/* <Home />
      <Benefits />
    <Contact /> */}
      <br />
      <div className="container py-4 px-3 my-4">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary">Primary button</button>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">cartilla</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://i.postimg.cc/5247K5Yj/image.jpg"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
