import React, { useEffect, useState } from "react";
import "./JokesPage.css";

import axios from "axios";

const JOKES_SERVICE_HOST = "http://localhost:3001/";

export const JokesPage = () => {
  const [joke, setJoke] = useState("...loading next joke");

  const generateJoke = async () => {
    try {
      const result = await axios.get(JOKES_SERVICE_HOST + "jokes");

      setJoke(result.data.joke);
    } catch (error) {
      console.log("Error" + error);

      setJoke("Server is Down! (Prolly the intern...)");
    }
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div className="jokes">
      <div className="container">
        <h3>Don't Laugh Challenge (Software Edition)</h3>
        <div id="joke" className="joke">
          {joke}
        </div>
        <button id="jokeBtn" className="btn" onClick={generateJoke}>
          Amuse Me!
        </button>
      </div>
    </div>
  );
};
