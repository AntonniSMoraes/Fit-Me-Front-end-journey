import React, { useState, useEffect } from "react";
import styleAnim from "./Anim.module.css";
import { frame1, frame2, frame3 } from "../../constants/images";
import { useWindowSize } from "../customHooks/useWindowSize";
import styled from "styled-components";

const images = [frame1, frame2, frame3];

export default function Home_Animation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideOffset = useWindowSize().width < 768 ? 100 : 80;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimationBox>
      {images.map((image, i) => (
        <ImageWrapper
          key={i}
          style={{ transform: `translateX(-${currentIndex * slideOffset}%)` }}
        >
          <img src={image} alt={`Frame ${i + 1}`}
              style={{
                transform: i === currentIndex ? 'scale(1)' : 'scale(0.8)',
              }}
          />
        </ImageWrapper>
      ))}
    </AnimationBox>
  );
}

const AnimationBox = styled.div`
  position: relative;
  align-self: flex-end;
  height: 480px;
  overflow: hidden;
  display: flex;

  @media (min-width: 800px) {
    margin-top: -10%;
    width: 400px;
  }
`

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 270px;
  transition: transform 1s ease-in-out; 

  & img {
    width: 280px;
    height: 100%;
    border-radius: 30px;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
  }

  @media(max-width: 800px) {
    width: 300px;
  }
`