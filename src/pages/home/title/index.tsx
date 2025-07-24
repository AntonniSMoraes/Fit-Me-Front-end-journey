import { banana, maca } from "../../../constants/images";
import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <FontOne>
        <h1>Premium</h1>
        <h1>quality</h1>
      </FontOne>
      <div style={{
        display: 'flex',
        flexDirection: 'column'}}
        >
            <FontOne>
                <h1>Food</h1>
                <h1 style={{color: 'black'}}>for</h1>
                <h1>your</h1>
                <Animation>
                    <img src={banana} />
                </Animation>
                <h1 style={{color: 'var(--cor-laranja)'}}>healthy</h1>
            </FontOne>
      </div>
      <FontOne>
        <SecondAnimation>
          <img src={maca} />
        </SecondAnimation>
        <h1>& Daily Life</h1>
      </FontOne>
      <Lorem>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Lorem>
    </Container>
  );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 400px;
`

const FlexControl = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 600px) {
        flex-direction: row;
        gap: 15px;
    }
`

const FontOne = styled.div`
    display: flex;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    gap: 15px;
    margin-bottom: -20px;

    & h1:nth-child(2) {
        color: var(--cor-laranja);
    }

    @media(min-width: 600px) {
        font-size: 18px;
    }
`

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
    
    @media(min-width: 600px) {
        height: 25px;
    }
`

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

    @media(min-width: 600px) {
        height: 25px;
    }
`

const Lorem = styled.div`
    margin-top: 35px;
    width: 80vw;
    color: var(--cor-cinza40);
    max-width: 300px;

    @media(min-width: 600px) {
    max-width: 500px;
    }
`