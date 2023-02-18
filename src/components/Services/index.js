import React, { useState, useEffect } from "react";

import {
  ServicesContainer,
  ServicesH1,
  ServicesH12,
  ServicesH22,
  ServicesWrapper,
  ServicesH2,
  ServicesP,
} from "./styles";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../styles/Services.module.css";
function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    const card = document.querySelector(".card");

    setHover((prevHover) => !prevHover);
    card.classList.toggle("is-flipped");
  };

  const [hover2, setHover2] = useState(false);
  const onHover2 = () => {
    const card2 = document.querySelector(".card-2");

    setHover2((prevHover2) => !prevHover2);
    card2.classList.toggle("is-flipped-2");
  };

  const [hover3, setHover3] = useState(false);
  const onHover3 = () => {
    const card3 = document.querySelector(".card-3");

    setHover3((prevHover3) => !prevHover3);
    card3.classList.toggle("is-flipped-3");
  };

  const [hover4, setHover4] = useState(false);
  const onHover4 = () => {
    const card4 = document.querySelector(".card-4");
    setHover4((prevHover4) => !prevHover4);
    card4.classList.toggle("is-flipped-4");
  };

  const [hover5, setHover5] = useState(false);
  const onHover5 = () => {
    const card5 = document.querySelector(".card-5");
    setHover5((prevHover5) => !prevHover5);
    card5.classList.toggle("is-flipped-5");
  };

  const [hover8, setHover8] = useState(false);
  const onHover8 = () => {
    const card8 = document.querySelector(".card-8");
    setHover8((prevHover8) => !prevHover8);
    card8.classList.toggle("is-flipped-8");
  };

  return (
    <ServicesContainer id="services">
      <ServicesWrapper
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="10"
      >
        <div className="scene">
          <div className="card" onClick={onHover}>
            {hover ? (
              <div className="card__face card__face--back">
                <ServicesH2>{"services.boilersDesc"}</ServicesH2>
              </div>
            ) : (
              <div className="card__face card__face--front">
                <ServicesH1> {"services.boilers"}</ServicesH1>
              </div>
            )}
          </div>
        </div>

        <div className="scene-2">
          <div className="card-2" onClick={onHover2}>
            {hover2 ? (
              <div className="card__face-2 card__face--back-2">
                <ServicesH2>{"services.pressurevesselDesc"}</ServicesH2>
              </div>
            ) : (
              <div className="card__face-2 card__face--front-2">
                <ServicesH12>{"services.pressureVessel"}</ServicesH12>
              </div>
            )}
          </div>
        </div>

        <div className="scene-3">
          <div className="card-3" onClick={onHover3}>
            {hover3 ? (
              <div className="card__face-3 card__face--back-3">
                <ServicesH2>
                  {"services.pipesDesc"}
                  <ServicesP>a) {"services.pipesA"}</ServicesP>
                  <ServicesP> b) {"services.pipesB"}</ServicesP>
                  <ServicesP> c){"services.pipesC"}</ServicesP>
                  <ServicesP>d){"services.pipesD"}</ServicesP>
                  <ServicesP>e) {"services.pipesE"}</ServicesP>
                </ServicesH2>
              </div>
            ) : (
              <div className="card__face-3 card__face--front-3">
                <ServicesH1>{"services.pipes"}</ServicesH1>
              </div>
            )}
          </div>
        </div>

        <div className="scene-4">
          <div className="card-4" onClick={onHover4}>
            {hover4 ? (
              <div className="card__face-4 card__face--back-4">
                <ServicesH22>
                  {"services.metallictanksDesc"}
                  <ServicesP>a) {"services.tanksA"}</ServicesP>
                  <ServicesP> b) {"services.tanksB"}</ServicesP>
                  <ServicesP> c) {"services.tanksC"}</ServicesP>
                  <ServicesP>d) {"services.tanksD"}</ServicesP>
                </ServicesH22>
              </div>
            ) : (
              <div className="card__face-4 card__face--front-4">
                <ServicesH1>{"services.metallicTanks"}</ServicesH1>
              </div>
            )}
          </div>
        </div>

        <div className="scene-5">
          <div className="card-5" onClick={onHover5}>
            {hover5 ? (
              <div className="card__face-5 card__face--back-5">
                <ServicesH2>{"services.weldsDesc"}</ServicesH2>
              </div>
            ) : (
              <div className="card__face-5 card__face--front-5">
                <ServicesH1>{"services.welds"}</ServicesH1>
              </div>
            )}
          </div>
        </div>

        <div className="scene-8">
          <div className="card-8" onClick={onHover8}>
            {hover8 ? (
              <div className="card__face-8 card__face--back-8">
                <ServicesH2>{"services.alterationrepairDesc"}</ServicesH2>
              </div>
            ) : (
              <div className="card__face-8 card__face--front-8">
                <ServicesH1>{"services.alterationRepair"}</ServicesH1>
              </div>
            )}
          </div>
        </div>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
