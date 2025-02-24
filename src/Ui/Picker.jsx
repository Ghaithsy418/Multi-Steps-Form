import styled from 'styled-components';
import { formatServicesPrice } from '../helpers/helpers';
import { usePlanContext } from '../Context/PlanContext';
import { useEffect, useState } from 'react';

const StyledPicker = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 16px;
  border-radius: 6px;
  border: 1px solid var(--color-light-gray);
  width: 30rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--color-purplish-blue);
  }

  @media(max-width:60.4rem){
    padding: 16px 12px;
    width: 20rem;
    margin: 0 auto;
  }

  @media(max-width:46.3rem){
    padding: 10px 10px;
    width: 16rem;
  }
`;

const Input = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 1.4rem;
  &:checked {
    background-color: var(--color-purplish-blue);
    font-weight: 400;
  }

  @media(max-width:60.4rem){
    width: 1rem;
    height: 1rem;
    margin-right: 1rem;
  }

  @media(max-width:46.3rem){
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.7rem; 
  }
`;

const H3 = styled.h3`
  font-size: 1rem;
  color: var(--color-marine-blue);

  @media(max-width:60.4rem){
    font-size: 0.8rem; 
  }

  @media(max-width:46.3rem){
    font-size: 0.7rem;
  }
`;

const P = styled.p`
  color: var(--color-cool-gray);
  font-size: 0.9rem;

  @media(max-width:60.4rem){
    font-size: 0.7rem; 
  }

  @media(max-width:46.3rem){
    font-size: 0.5rem;
  }
`;

const Price = styled.span`
  color: var(--color-purplish-blue);
  font-size: 0.9rem;

  @media(max-width:60.4rem){
    font-size: 0.7rem; 
  }

  @media(max-width:46.3rem){
    font-size: 0.5rem;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-right: auto;
`;

function Picker({ title, description, price }) {
  const { duration, dispatchPlan } = usePlanContext();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(
    function () {
      if (isChecked) {
        dispatchPlan({
          type: 'addService',
          payload: {
            title,
            price,
          },
        });
      } else {
        dispatchPlan({
          type: 'removeService',
          payload: title,
        });
      }
    },
    [isChecked, dispatchPlan, title, price]
  );

  return (
    <StyledPicker>
      <Input
        type="checkbox"
        value={isChecked}
        onChange={() => setIsChecked((c) => !c)}
      />
      <Flex>
        <H3>{title}</H3>
        <P>{description}</P>
      </Flex>
      <Price>{formatServicesPrice(price, duration)}</Price>
    </StyledPicker>
  );
}

export default Picker;
