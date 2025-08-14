import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";
function Map(emoji) {
  return (
    <Card
      id={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(Map)}
    </div>
  );
}

export default App;
