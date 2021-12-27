import './App.css';
import React from "react";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import ContactForm from './components/Contact';


function App() {

  return (
      <div>
        <Nav></Nav>
        <main>
        <ContactForm></ContactForm>
        <Portfolio></Portfolio>
        </main>
      </div>
  );
}

export default App;
