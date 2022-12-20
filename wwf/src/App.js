import React, { useState } from "react";
import LinkCard from "./components/LinkCard";

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
        <h1>No Chemistry</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Cat ipsum dolor sit amet, stare at imaginary bug. Bite the neighbor's bratty kid the fat cat sat on the mat bat away with paws. While happily ignoring when being called allways wanting food and chase imaginary bugs, touch my tail, i shred your hand purrrr. Chase little red dot someday it will be mine! litter kitter kitty litty little kitten big roar roar feed me that box? i can fit in that box so fall asleep upside-down.
        <code> Destroy the blinds chew foot, and sleep on dog bed, force dog to sleep on floor, yet cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit yet put toy mouse in food bowl run out of litter box at full speed yet car rides are evil sit in box. do not try to mix old food with new one to fool me! being gorgeous with belly side up so don't nosh on the birds so gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye or thinking about you i'm joking it's food always food but mew cough furball into food bowl then scratch owner for a new one.</code>
        Ignore the human until she needs to get up, then climb on her lap and sprawl reaches under door into adjacent room.
        </p>
        <footer>
          <ul>
            <li>Thing 1</li>
            <li>Thing 2</li>
          </ul>
        </footer>
        <p>Hello {formData}</p>
        <form onSubmit={handleSubmit}>
          <label>Llama
            <input onChange={e => setFormData(e.target.value)} value={formData} />
          </label>
        </form>
      </header>
      <LinkCard trackTitle="On Coming Storm" track={872998699}/>
      <LinkCard trackTitle="Dead Wait" track={3787462959}/>
      <LinkCard trackTitle="Backwards" track={4083083307}/>
    </div>
  );
}

export default App;
