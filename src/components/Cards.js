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
              src="images/humphery-img-6.jpg"
              text={`*sneeef* "You Stimnky"`}
              label="Sneef"
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
          <ul className="cards__items">
            <CardItem
              src="images/humphery-img-1.jpg"
              text="Humphrey basking in the sunlight, baking into a beautiful loaf"
              label="Loaf"
              path="/send-love"
            />
            <CardItem
              src="images/humphery-img-2.jpg"
              text={`"I'm gunna take a nap right here"`}
              label="Relaxed"
              path="/send-love"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/humphery-img-8.jpg"
              text="What are you staring at?"
              label="Stare"
              path="/send-love"
            />
            <CardItem
              src="images/humphery-img-9.jpg"
              text="Hiding underneath Jekka's bed sksksk >:3"
              label="Hiding"
              path="/send-love"
            />
            <CardItem
              src="images/humphery-img-10.jpg"
              text="Chilling with my bestie"
              label="Chill"
              path="/send-love"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
