import React from "react";
import Card from "./components/card";
import Header from "./components/header";
import data from "./data"
import "./App.css"

export default function App() {
  const cards = data.map(item => {
    return(
      <Card 
        key = {item.key}
        item = {item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <section className="card-list">
        {cards}
      </section>
    </div>
  );
}
