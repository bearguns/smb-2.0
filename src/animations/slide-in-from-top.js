import { keyframes } from "styled-components";

const slideInFromTop = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
`;

export default slideInFromTop;
