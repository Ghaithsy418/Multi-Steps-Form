import styled, { css } from 'styled-components';
import { useStepsContext } from '../Context/StepsContext';

const StyledButton = styled.button`
  font-size: 1rem;
  border-radius: 8px;
  padding: 14px 28px;
  font-weight: 400;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  color: ${(props) =>
    props.goal === 'back'
      ? css`var(--color-cool-gray)`
      : css`var(--color-magnolia)`};
  background-color: ${(props) => {
    if (props.goal === 'next') return css`var(--color-marine-blue)`;
    if (props.goal === 'confirm') return css`var(--color-purplish-blue)`;
    if (props.goal === 'back') return css`transparent`;
  }};

  ${(props) =>
    props.disabled
      ? css`
          cursor: not-allowed;
        `
      : ''}

  &:hover {
    background-color: ${(props) => {
      if (props.goal === 'next') return css`rgba(2, 42, 90, 0.9)`;
      if (props.goal === 'confirm') return css`rgb(99, 31, 255)`;
      else return css`transparent`;
    }};
    color: ${(props) => {
      if (props.goal === 'back') return css`var(--color-marine-blue)`;
    }};
  }

  @media(max-width:60.4rem){
    padding: 10px 20px;
    font-size: 0.8rem;
  }

  @media(max-width:46.3rem){
    padding: 8px 16px;
    font-size: 0.5rem;
    /* margin-left: 12rem; */
  }
`;

function Button({ children, goal, onClick, disabled }) {
  const { setSteps } = useStepsContext();

  function handleClick() {
    goal === 'back' ? setSteps((s) => s - 1) : setSteps((s) => s + 1);
    onClick?.();
  }

  return (
    <StyledButton
      goal={goal}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
