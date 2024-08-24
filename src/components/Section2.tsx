import React from "react";
import "./Section2.css";

const Section2: React.FC = () => {
  return (
    <section className="section2">
      <div className="section2__header">
        <h3>AVALIAÇÕES DE USUÁRIOS</h3>
        <button className="section2__rate-button">Avaliar</button>
      </div>

      <div className="section2__review-card">
        <div className="section2__review-header">
          <div>
            <span className="section2__review-rating">⭐️10/10</span>
            <span className="section2__review-author">CalcHalbert</span>
          </div>
          <span className="section2__review-date">9 de novembro de 2022</span>
        </div>
        <h4 className="section2__review-title">What an incredible sequel!</h4>
        <p className="section2__review-text">
          A fantastic and strong continuation of its predecessor, God of War
          Ragnarök is not afraid to take unexpected turns, or slow its pace for
          you to fully explore an environment. It has the same upgrading system
          as before, but with better armor, in my opinion. Atreus is a little
          bit older now and it's so great to see everybody reprise their
          magnificent roles. I don't want to give away too much in this review,
          but it's definitely worth buying. One of the best looking games on
          PS5. It'll definitely be a game of the year contender with Elden Ring.
          If you're new to the series, I recommend you start with God of War
          (2018). If you have the dedication, you could always start from the
          very first one. They're all on the PS+ collection. I still have yet to
          beat this newest entry, but I wanted to spread the good word as soon
          as possible: Ragnarök is here and it is beautiful.
        </p>
        <div className="section2__review-feedback">
          <button>👍🏻 33</button>
          <button>👎🏻 11</button>
        </div>
      </div>

      <div className="section2__review-card">
        <div className="section2__review-header">
          <div>
            <span className="section2__review-rating">⭐️10/10</span>
            <span className="section2__review-author">Claudia Rayera</span>
          </div>
          <span className="section2__review-date">14 de novembro de 2022</span>
        </div>
        <h4 className="section2__review-title">
          This game took part of my soul... warning: Spoilers!
        </h4>
        <div className="section2__review-feedback">
          <button>👍🏻 24</button>
          <button>👎🏻 6</button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
