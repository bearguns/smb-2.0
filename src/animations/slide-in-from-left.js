import { keyframes } from "styled-components";

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;

export default slideInFromLeft;
