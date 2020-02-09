import React from "react";
import "./App.css";
import Homepage from "./Pages/Homepage";
import MenuBar from "./components/MenuBar";
import Router from "./Router/Router";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Router />
    </div>
  );
}

export default App;
