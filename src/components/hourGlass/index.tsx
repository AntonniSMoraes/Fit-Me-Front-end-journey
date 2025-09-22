import styled, { keyframes } from "styled-components";

export default function HourglassLoader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <Hourglass
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 2h12M6 22h12M6 2v6a6 6 0 0 0 12 0V2M6 22v-6a6 6 0 0 1 12 0v6" />
      </Hourglass>
    </div>
  );
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const Hourglass = styled.svg`
  width: 48px;
  height: 48px;
  animation: ${spin} 2s infinite linear;
`;