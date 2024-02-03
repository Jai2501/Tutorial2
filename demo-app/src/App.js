import { BrowserRouter, Routes, Route } from "react-router-dom";

import { JokesPage } from "./pages/JokesPage";

import logo from "./logo.svg";
import "./App.css";

function App() {
  function toggleAnimation() {
    var logo = document.querySelector(".App-logo-clockwise");
    var isLogoRotatingClockwise = logo !== null;

    if (isLogoRotatingClockwise) {
      logo.classList.remove("App-logo-clockwise");
      logo.classList.add("App-logo-anti-clockwise");
    } else {
      logo = document.querySelector(".App-logo-anti-clockwise");

      logo.classList.remove("App-logo-anti-clockwise");
      logo.classList.add("App-logo-clockwise");
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo-clockwise" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <button className="spin-btn" onClick={() => toggleAnimation()}>
                  Toggle Spin Direction
                </button>
              </header>
            </div>
          }
        ></Route>
        <Route path="/jokes" element={<JokesPage />} />
        <Route path="*" element={<p>404: Page Not Found!</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
