import React from "react";
import "./App.css";
import Section from "./Components/Section";
import moviesData from "./json/movies.json";
import logo from "./Images/logo-Netflix.png";

console.log(moviesData);

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo" class="logo" />
      {moviesData.map((data, index) => {
        return (
          <Section title={data.category} imageList={data.images} key={index} />
        );
      })}
    </div>
  );
}

export default App;
