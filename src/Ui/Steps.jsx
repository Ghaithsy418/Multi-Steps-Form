import styled from 'styled-components';
import Step from './Step';
import { motion } from 'framer-motion';
import { containerMotion } from '../helpers/containerMotion';

const StyledSteps = styled(motion.aside)`
  background-image: url('./images/bg-sidebar-desktop.svg');
  background-size: cover;
  width: 18rem;
  height: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.9rem;
  padding: 2.5rem 1.9rem;

  @media (max-width: 60.4rem) {
    width: 16rem;
    gap: 1.6rem;
    padding: 2.2rem 1.6rem;
  }

  @media (max-width: 46.3rem) {
    background-image: url("./images/bg-sidebar-mobile.svg");
    height: 8rem;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 0.4rem;
    padding: 1.6rem 1rem;
  }
`;

function Steps() {
  return (
    <StyledSteps
      variants={containerMotion}
      animate="visible"
      initial="hidden"
    >
      <Step
        number="1"
        description="Your Info"
      />
      <Step
        number="2"
        description="Select Plan"
      />
      <Step
        number="3"
        description="Add-ons"
      />
      <Step
        number="4"
        description="Summary"
      />
    </StyledSteps>
  );
}

export default Steps;
