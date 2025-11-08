import styled from "styled-components";
import {
  facebook_logo,
  instagram_logo,
  logo_branco,
  twitter_logo,
} from "../../constants/images";

export const Footer = () => {
  return (
    <Container>
      <FirstLine>
        <a href="/">
          <img src={logo_branco} />
        </a>
        <InfoContainer>
          <a href="/">About us</a>
          <a href="/">Delivery</a>
          <a href="/">Help & Support</a>
          <a href="/">T&C</a>
        </InfoContainer>
        <a>Contact: +91 1234567899</a>
      </FirstLine>
      <SecondLine>
        <a href="">
          <img src={facebook_logo} />
        </a>
        <a href="">
          <img src={instagram_logo} />
        </a>
        <a href="">
          <img src={twitter_logo} />
        </a>
      </SecondLine>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6rem 10rem;
  background-color: var(--cor-laranja);
  width: calc(100% - 20rem);
  align-items: center;
  justify-content: center;

  & a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }

  @media (max-width: 1200px) {
    width: 100%;
    padding: 6rem 0;
  }
`;

const FirstLine = styled.article`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const SecondLine = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & a {
    margin-top: 2rem;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const InfoContainer = styled.article`
  display: flex;
  gap: 4rem;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
