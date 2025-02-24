import styled, { css } from 'styled-components';
import { formatPrice } from '../helpers/helpers';
import { usePlanContext } from '../Context/PlanContext';

const StyledDiv = styled.a`
  height: 11rem;
  width: 8.8rem;
  border: 1px solid var(--color-light-gray);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  ${(props) =>
    props.active
      ? css`
          border: 1px solid var(--color-purplish-blue);
        `
      : ''}

  &:hover {
    border: 1px solid var(--color-purplish-blue);
  }

  @media(max-width:60.4rem){
    height: 9rem;
    width: 7rem;
  }

  @media(max-width:46.3rem){
      height: 7rem;
      width: 5rem;
      padding: 5px 10px;
  }
`;

const StyledIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-bottom: 2.6rem;

  @media(max-width:60.4rem){
    width: 2rem;
    height: 2rem;
    margin-bottom: 2rem;
  }

  @media(max-width:46.3rem){
      width: 1.8rem;
      height: 1.8rem;
      margin-bottom: 1rem;
  }
`;

const H3 = styled.h3`
  font-size: 1.1rem;
  color: var(--color-marine-blue);
  font-weight: 700;

  @media(max-width:60.4rem){
    font-size: 0.9rem;
  }

  @media(max-width:46.3rem){
    font-size: 0.7rem;
  }
`;

const Price = styled.span`
  font-size: 0.9rem;
  color: var(--color-cool-gray);

  @media(max-width:60.4rem){
    font-size: 0.7rem;
  }

  @media(max-width:46.3rem){
    font-size: 0.6rem;
  }
`;

const FreeContent = styled.p`
  color: var(--color-purplish-blue);
  font-size: 0.9rem;
`;

function Plan({ icon, title, price }) {
  const { dispatchPlan, duration, name } = usePlanContext();

  const handleClick = function () {
    dispatchPlan({ type: 'selectName', payload: { name: title, price } });
  };

  return (
    <StyledDiv
      onClick={handleClick}
      active={title === name}
    >
      <StyledIcon
        src={icon}
        alt={`icon of ${title}`}
      />
      <H3>{title}</H3>
      <Price>{formatPrice(price, duration)}</Price>
      {duration === 'yr' && <FreeContent>2 months free</FreeContent>}
    </StyledDiv>
  );
}

export default Plan;
