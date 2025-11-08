import styled from "styled-components";
import { bag, logo, search } from "../../constants/images";

export const Header = () => {
  return (
    <Container>
      <a href="/">
        <img src={logo}></img>
      </a>
      <InputSection>
        <InputContainer>
          <Input
            type="text"
            placeholder="Enter item or restaurant you are looking for"
          />
          <Button>
            <img src={search} />
          </Button>
        </InputContainer>
        <Button style={{ position: "static" }}>
          <img src={bag} />
        </Button>
        <BlackButton>Sign In</BlackButton>
      </InputSection>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  width: calc(100% - 20rem);
  padding: 2rem 10rem;
  justify-content: space-between;

  @media (max-width: 1000px) {
    padding: 1rem 1rem;
    width: calc(100% - 2rem);
  }
`;

const InputSection = styled.article`
  display: flex;
  gap: 1rem;
`;

const InputContainer = styled.article`
  display: flex;
  position: relative;
  
  @media (max-width: 600px) {
    display: none;
  }
`;

const Input = styled.input`
  width: 250px;
  border-radius: 10px;
  padding: 1rem;
  font-size: 0.9rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  position: absolute;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  right: 0;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const BlackButton = styled.button`
  display: flex;
  align-items: center;
  width: 6rem;
  height: 3rem;
  font-size: 1.2rem;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background-color: black;
  color: white;
`;
