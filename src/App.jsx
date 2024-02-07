import { useState } from "react";
import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      {/* <Home />
      <Services />
      <HowWeWork />
      <Benefits />
      <Contact /> */}
      <div className="container py-4 px-3 my-4">
        <h1>Hello, Bootstrap and Vite!</h1>
        <button className="btn btn-primary">Primary button</button>
      </div>
      <div className="card" >
          <div className="card-body">
          <h5 className="card-title">cartilla</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://i.postimg.cc/5247K5Yj/image.jpg" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
