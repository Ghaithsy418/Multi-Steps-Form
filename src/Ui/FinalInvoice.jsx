import styled from 'styled-components';
import { formatPrice, formatServicesPrice } from '../helpers/helpers';
import { useStepsContext } from '../Context/StepsContext';
import { usePlanContext } from '../Context/PlanContext';

const StyledInvoice = styled.div`
  width: 28rem;
  background-color: var(--color-magnolia);
  border-radius: 6px;
  padding: 16px 20px;
  margin-bottom: 12px;

  @media(max-width:60.4rem){
    padding: 12px 16px;
    margin-top: 3rem;
  }

  @media(max-width:46.3rem){
    padding: 8px 12px;
    margin-top: 1rem;
    width: 15rem;
  }
`;

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
`;

const FirstPrice = styled.span`
  color: var(--color-marine-blue);
  font-size: 1rem;
  font-weight: 700;
  @media(max-width:60.4rem){
    font-size: 0.8rem;
  }

  @media(max-width:46.3rem){
    font-size: 0.6rem;
  }
`;

const OtherPrices = styled.span`
  color: var(--color-marine-blue);

  @media(max-width:46.3rem){
    font-size: 0.6rem;
  }
`;

const TotalPrice = styled.span`
  font-size: 1.2rem;
  color: var(--color-purplish-blue);
  font-weight: 700;

  @media(max-width:60.4rem){
    font-size: 1rem; 
  }

  @media(max-width:46.3rem){
    font-size: 0.7rem;
  }
`;

const NormalText = styled.p`
  color: var(--color-cool-gray);
  font-size: 1rem;

  @media(max-width:60.4rem){
    font-size: 0.8rem;
  }

  @media(max-width:46.3rem){
    font-size: 0.6rem;
  }
`;

const Container = styled.div`
  width: 26rem;
  margin-left: 1rem;
  margin-bottom: 8rem;

  @media(max-width:60.4rem){
    margin-bottom: 4rem;
  }

  @media(max-width:46.3rem){
    width: 13rem;
    margin-bottom: 3rem;
  }
`;

const H3 = styled.h3`
  font-size: 1.1rem;
  color: var(--color-marine-blue);
  margin-bottom: 4px;

  @media(max-width:60.4rem){
    font-size: 0.9rem;
  }

  @media(max-width:46.3rem){
    font-size: 0.7rem;
  }
`;

const ChangeButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-cool-gray);
  font-size: 0.9rem;
  text-decoration: underline;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--color-purplish-blue);
  }

  @media(max-width:60.4rem){
    font-size: 0.7rem;
  }

  @media(max-width:46.3rem){
    font-size: 0.5rem;
  }
`;

const Hr = styled.hr`
  height: 1px;
  font-size: 0;
  color: var(--color-light-gray);
  background-color: var(--color-light-gray);
  border: none;
  margin: 12px 0;
`;

function FinalInvoice() {
  const { setSteps } = useStepsContext();
  const { services, duration, name, price, totalPrice } = usePlanContext();
  return (
    <>
      <StyledInvoice>
        <ul>
          <List>
            <div>
              <H3>
                {name} ({duration === 'mo' ? 'Monthly' : 'Yearly'})
              </H3>
              <ChangeButton onClick={() => setSteps(1)}>Change</ChangeButton>
            </div>
            <FirstPrice>{formatPrice(price, duration)}</FirstPrice>
          </List>
          {services.length !== 0 && <Hr />}
          {services.map((service) => {
            return (
              <List key={service.title}>
                <NormalText>{service.title}</NormalText>
                <OtherPrices>{formatServicesPrice(service.price, duration)}</OtherPrices>
              </List>
            );
          })}
        </ul>
      </StyledInvoice>
      <Container>
        <List>
          <NormalText>Total (per month)</NormalText>
          <TotalPrice>
            {formatServicesPrice(totalPrice + price, duration)}
          </TotalPrice>
        </List>
      </Container>
    </>
  );
}

export default FinalInvoice;
