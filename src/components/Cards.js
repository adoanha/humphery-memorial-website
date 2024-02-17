import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div id="cards" className="cards">
      <h1>Check out these lovely photos of Humphery!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/humphery-img-1.jpg"
              text="Humphrey basking in the sunlight, baking into a beautiful loaf"
              label="Loaf"
              path="/send-love"
            />
            <CardItem
              src="images/humphery-img-2.jpg"
              text={`"I'm gunna take a nap right :3"`}
              label="Relaxed"
              path="/send-love"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/humphery-img-3.jpg"
              text="He has the cutests ears!"
              label="Perky"
              path="/send-love"
            />
            <CardItem
              src="images/humphery-img-4.jpg"
              text="Another loaf of Humphery"
              label="Loaf"
              path="/send-love"
            />
            <CardItem
              src="images/humphery-img-5.jpg"
              text="Getting real personal, maybe a little too personal... 🫦"
              label="Sensual"
              path="/send-love"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
