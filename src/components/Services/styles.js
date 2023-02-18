import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2f6ca3;

  @media screen and (max-width: 768px) {
    height: 2800px;
  }
  @media screen and (max-width: 480px) {
    height: 2800px;
  } ;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  line-height: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  } ;
`;

export const ServicesH12 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  line-height: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  } ;
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  //transition: all 0.2s ease-in-out;

  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesH22 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  line-height: 22px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;

  text-align: center;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
`;
