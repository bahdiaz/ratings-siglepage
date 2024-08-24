import React from "react";
import "./Section1.css";
import Imagem1 from "../assets/Frame 28.png";
import Imagem2 from "../assets/Frame 29.png";

const Section1: React.FC = () => {
  return (
    <>
      <section className="section1">
        <div className="section1__title-card">
          <h2>GOD OF WAR: RAGNARÖK</h2>
        </div>

        <div className="section1__ratings-container">
          <div className="section1__ratings-card">
            <p>AVALIAÇÃO DA RATINGS</p>
            <p>9,6/10</p>
          </div>
          <div className="section1__user-rating-card">
            <p>SUA AVALIAÇÃO</p>
            <button>⭐️Avaliar</button>
          </div>
        </div>

        <div className="section1__images-container">
          <img src={Imagem1} alt="Imagem 1" />
          <img src={Imagem2} alt="Imagem 2" />
        </div>
      </section>
      <div className="section1__plot">
        <h3>ENREDO</h3>
        <p>
          Kratos and his son Atreus face the oncoming Norse apocalypse,
          Ragnarok.
        </p>
      </div>
    </>
  );
};

export default Section1;
