import { keyframes } from "styled-components";

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

export default slideInFromRight;
