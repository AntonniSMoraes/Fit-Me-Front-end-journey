import styled from "styled-components";
import { search } from "../../constants/images";
import { useState } from "react";

interface searchProps {
  text: string;
  border: boolean;
  setSearch: (info: string) => void;
}

export const SearchInput = ({ text, border, setSearch }: searchProps) => {
  const [value, setValue] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <InputContainer>
      <Input
        type="text"
        border={border}
        placeholder={text}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={() => handleSearch(value)}>
        <img src={search} />
      </Button>
    </InputContainer>
  );
};

const InputContainer = styled.article`
  display: flex;
  position: relative;

  @media (max-width: 670px) {
    display: none;
  }
`;

const Input = styled.input<{ border: boolean }>`
  width: 310px;
  border-radius: 10px;
  padding: 1rem;
  font-size: 0.9rem;
  border: ${({ border }) => (border ? "1px solid #ccc" : "none")};
  box-shadow:  ${({ border }) => (border ? "none" : '0px 4px 8px rgba(0, 0, 0, 0.2)')};
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
