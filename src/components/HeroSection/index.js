import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  //Button,
  //MuteIcon,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./styles";

import { Button } from "../ButtonComponent";

function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home" data-aos="zoom-out-down ease-in-out-sine">
      <HeroBg>
        <VideoBg
          alt="heroimage"
          src={process.env.PUBLIC_URL + "hero-img.webp"}
        />
      </HeroBg>

      <HeroContent>
        <HeroH1>{"hero.fines"}</HeroH1>

        <HeroP>{"hero.lifes"}</HeroP>

        <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          <HeroBtnWrapper>
            <Button
              href="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              {"hero.inspection"}
              {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
}
export default HeroSection;
