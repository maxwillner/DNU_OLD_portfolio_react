import './App.css';
import React from "react";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";


function App() {

  return (
      <div>
        <Nav></Nav>
        <main>
          <Portfolio></Portfolio>
        </main>
      </div>
  );
}

export default App;
