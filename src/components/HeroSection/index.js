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
          src={
            "https://res.cloudinary.com/aguadeira/image/upload/v1676744550/jeri/WhatsApp_Image_2023-01-29_at_08.44.57_3_lhwcco.jpg"
          }
        />
      </HeroBg>

      <HeroContent>
        <HeroH1>{"Jeri Loucura"}</HeroH1>

        <HeroP>
          {"Oportunidade para quem está planejando sair das grandes cidades! "}
        </HeroP>

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
              {"Bora ver ?"}
              {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
}
export default HeroSection;
