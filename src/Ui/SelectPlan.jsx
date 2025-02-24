import styled, { css } from 'styled-components';
import Heading from './Heading';
import Plan from './Plan';
import TwoButtons from './TwoButtons';
import { usePlanContext } from '../Context/PlanContext';
import { motion } from 'framer-motion';
import { containerMotion } from '../helpers/containerMotion';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 10px;

  @media(max-width:60.4rem){
    gap: 0.8rem;
  }
`;

const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  background-color: var(--color-magnolia);
  height: 3rem;
  font-weight: 700;
  color: var(--color-marine-blue);
  border-radius: 6px;
  margin-bottom: 8rem;

  @media(max-width:60.4rem){
    margin-bottom: 2rem; 
    gap: 1rem;
    height: 2.5rem;
    font-size: 0.9rem;
  }

  @media(max-width:46.3rem){
    height: 1.4rem; 
    gap: 0.6rem;
    font-size: 0.6rem;
    width: 14rem;
    margin: 0 auto;
  }
`;

const ToggleButton = styled.div`
  position: relative;
  height: 1.5rem;
  width: 3rem;
  border-radius: 20px;
  background-color: var(--color-marine-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  @media(max-width:60.4rem){
      width: 2.5rem;
      height: 1.2rem;
  }

  @media(max-width:46.3rem){
      width: 1.8rem;
      height: 0.8rem;
  }
`;

const ButtonBall = styled.span`
  position: absolute;
  top: 4px;
  transition: all 0.3s;
  ${(porps) =>
    porps.direction === 'mo'
      ? css`
          transform: translateX(-12px);
        `
      : css`
          transform: translateX(12px);
        `};
  height: 16px;
  width: 16px;
  background-color: var(--color-alabaster);
  border-radius: 50%;
  cursor: pointer;

  @media(max-width:60.4rem){
    height: 13px;
    width: 13px;
    top: 3px;

    ${(porps) =>
    porps.direction === 'mo'
      ? css`
          transform: translateX(-10px);
        `
      : css`
          transform: translateX(10px);
        `};
  }

  @media(max-width:46.3rem){
    height: 9px;
    width: 9px;
    top: 2.5px;
    ${(porps) =>
    porps.direction === 'mo'
      ? css`
          transform: translateX(-8px);
        `
      : css`
          transform: translateX(7px);
        `};
  }
`;

function SelectPlan() {
  const { duration, dispatchPlan, name } = usePlanContext();

  function toggleDuration() {
    dispatchPlan({ type: 'changeDuration' });
  }

  return (
    <motion.div variants={containerMotion} animate="visible" initial="hidden" exit="exit">
      <Heading title="Select your plan">
        You have the option of monthly or yearly billing.
      </Heading>
      <StyledDiv>
        <Plan
          icon="./images/icon-arcade.svg"
          title="Arcade"
          price={duration === "mo" ? 9 : 90}
        />
        <Plan
          icon="./images/icon-advanced.svg"
          title="Advanced"
          price={duration === "mo" ? 12 : 120}
        />
        <Plan
          icon="./images/icon-pro.svg"
          title="Pro"
          price={duration === "mo" ? 15 : 150}
        />
      </StyledDiv>
      <SelectorContainer>
        <span>Monthly</span>
        <ToggleButton>
          <ButtonBall
            direction={duration}
            onClick={toggleDuration}
          >
            
          </ButtonBall>
        </ToggleButton>
        <span>Yearly</span>
      </SelectorContainer>
      <TwoButtons
        firstButton="back"
        lastButton="next"
        secondDisabled={name === ""}
      />
    </motion.div>
  );
}

export default SelectPlan;
