import { useWindowSize } from "../../../components/customHooks/useWindowSize";
import { banana, maca } from "../../../constants/images";
import styled from "styled-components";

export default function Title() {
  return (
    <>
      <Container>
        <Line>
          <h1>Premium</h1>
          <h1>quality</h1>
        </Line>
        <Line
          style={{
            flexDirection: useWindowSize().width <= 600 ? "column" : "row",
          }}
        >
          <Line>
            <h1>Food</h1>
            <h1 style={{ color: "black" }}>for</h1>
          </Line>
          <Line>
            <h1>your</h1>
            <Animation>
              <img src={banana} />
            </Animation>
            <h1 style={{ color: "var(--cor-laranja)" }}>healthy</h1>
          </Line>
        </Line>
        <Line>
          <SecondAnimation>
            <img src={maca} />
          </SecondAnimation>
          <h1 style={{ color: "var(--cor-laranja)" }}>& Daily Life</h1>
        </Line>
        <Lorem>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Lorem>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 400px;

  @media (max-width: 600px) {
    width: auto;
  }
`;

const Line = styled.article`
  display: flex;
  gap: 15px;

  & h1 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  @media (min-width: 1100px) {
    align-items: center;

    & h1 {
      font-size: 3rem;
      margin: 1rem 0;
    }
  }
`;

const Animation = styled.div`
  display: flex;
  align-self: center;
  width: 60px;
  height: 20px;
  padding: 20px 15px 20px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: var(--cor-salmao);

  & img {
    animation: slide 2s linear infinite;
  }

  @keyframes slide {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-70%);
    }
  }

  @media (min-width: 600px) {
    height: 25px;
  }
`;

const SecondAnimation = styled.div`
  display: flex;
  align-self: center;
  width: 60px;
  height: 20px;
  padding: 20px 15px 20px 30px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: var(--cor-salmao2);

  & img {
    animation: slideTwo 2s linear infinite;
  }

  @keyframes slideTwo {
    0%,
    100% {
      transform: translateY(10%);
    }
    50% {
      transform: translateY(-10%);
    }
  }

  @media (min-width: 600px) {
    height: 25px;
  }
`;

const Lorem = styled.div`
  margin-top: 10px;
  width: 80vw;
  color: var(--cor-cinza40);
  max-width: 300px;

  @media (min-width: 600px) {
    max-width: 500px;
  }
`;
