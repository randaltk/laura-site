import React, { useState, useEffect } from "react";

import {
  ServicesContainer,
  ServicesH12,
  ServicesWrapper,
  ServicesH2,
} from "./styles";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../styles/Trainings.module.css";
function Trainings() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [hover6, setHover6] = useState(false);

  const onHover6 = () => {
    const card6 = document.querySelector(".card-6");

    setHover6((prevHover6) => !prevHover6);
    card6.classList.toggle("is-flipped-6");
  };

  const [hover7, setHover7] = useState(false);

  const onHover7 = () => {
    const card6 = document.querySelector(".card-7");

    setHover7((prevHover7) => !prevHover7);
    card6.classList.toggle("is-flipped-7");
  };
  return (
    <ServicesContainer id="team">
      <ServicesWrapper
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="10"
      >
        <div className="scene-6">
          <div className="card-6" onClick={onHover6}>
            {hover6 ? (
              <div className="card__face-6 card__face--back-6">
                <ServicesH2>"trainings</ServicesH2>
              </div>
            ) : (
              <div className="card__face-6 card__face--front-6">
                <ServicesH12>trainings.trai</ServicesH12>
              </div>
            )}
          </div>
        </div>

        <div className="scene-7">
          <div className="card-7" onClick={onHover7}>
            {hover7 ? (
              <div className="card__face-7 card__face--back-7">
                <ServicesH2>{"trainings.trainingsDesc2"}</ServicesH2>
              </div>
            ) : (
              <div className="card__face-7 card__face--front-7">
                <ServicesH12>{"trainings.trainingsTitle2"}</ServicesH12>
              </div>
            )}
          </div>
        </div>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Trainings;
