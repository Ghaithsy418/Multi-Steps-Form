import styled, { css } from 'styled-components';
import { useStepsContext } from '../Context/StepsContext';
import { motion } from 'framer-motion';

const StyledStep = styled(motion.div)`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
`;

const Number = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) =>
    props.active ? css`var(--color-light-blue)` : 'transparent'};
  border-radius: 50%;
  border: 1px solid #fff;
  color: ${(props) => (props.active ? css`var(--color-marine-blue)` : '#fff')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.3s;

  @media (max-width: 60.4rem) {
    width: 2.3rem;
    height: 2.3rem;
    font-size: 12px;
  }

  @media(max-width:46.3rem){
    width: 1.8rem;
    height: 1.8rem;
    font-size: 10px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 4px;
  text-transform: uppercase;
  color: #fff;
`;

const StyledStepText = styled.span`
  color: var(--color-cool-gray);
  font-size: 0.9rem;

  @media (max-width: 60.4rem) {
    font-size: 0.7rem;
  }

  @media (max-width: 46.3rem) {
    display: none;
  }
`;

const StyledText = styled.p`
  letter-spacing: 1.2px;

  @media (max-width: 60.4rem) {
    font-size: 0.8rem;
  }

  @media (max-width: 46.3rem) {
    display: none;
  }
`;

const childrenMotion = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    x: '-100%',
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

function Step({ number, description }) {
  const { steps } = useStepsContext();
  return (
    <StyledStep variants={childrenMotion}>
      <Number active={steps + 1 === +number}>{number}</Number>
      <StyledDiv>
        <StyledStepText>Step {number}</StyledStepText>
        <StyledText>{description}</StyledText>
      </StyledDiv>
    </StyledStep>
  );
}

export default Step;
