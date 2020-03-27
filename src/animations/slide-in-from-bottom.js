import { keyframes } from "styled-components";

const slideInFromBottom = keyframes`
  from {
    transform: translateY(400%);
  }

  to {
    transform: translateY(0);
  }
`;

export default slideInFromBottom;
