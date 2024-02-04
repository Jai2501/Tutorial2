import { BrowserRouter, Routes, Route } from "react-router-dom";

import { JokesPage } from "./pages/JokesPage";

import logo from "./logo.svg";
import "./App.css";

function App() {
  // Add the toggleAnimation function here

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
                {/* Insert the "Toggle Spin Direction" button below this comment */}
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
