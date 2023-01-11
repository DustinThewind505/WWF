import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavList from "./components/NavList";
import LinkCard from "./components/LinkCard";
import TripleH from "./components/TripleH";
import logo from './logo.svg';
import './App.css';

function App() {
  const [formData, setFormData] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    setFormData("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>No Chemistry</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <NavList />
        </div>
        <p>Hello {formData}</p>
        <form onSubmit={handleSubmit}>
          <label>
            Test Input: <input onChange={e => setFormData(e.target.value)} value={formData} />
          </label>
        </form>
      </header>
      <Routes>
        <Route path="/wwf" element={<TripleH />} />
      </Routes>
      {formData.split('').length > 8 ? <h2>Oh shit!</h2> : null}
      <LinkCard trackTitle="On Coming Storm" track={872998699}/>
      <LinkCard trackTitle="Dead Wait" track={3787462959}/>
      <LinkCard trackTitle="Backwards" track={4083083307}/>
    </div>
  );
}

export default App;
