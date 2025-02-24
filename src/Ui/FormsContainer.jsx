import styled from 'styled-components';
import PersonalInfoForm from './PersonalInfoForm';
import SelectPlan from './SelectPlan';
import PickAddOns from './PickAddOns';
import FinishingUp from './FinishingUp';
import ThankYou from './ThankYou';
import { useStepsContext } from '../Context/StepsContext';
import { AnimatePresence } from 'framer-motion';

const StyledFormContainer = styled.div`
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width:46.3rem){
    width: 20rem;
    margin-top: 1rem;
  }
`;

function FormsContainer() {
  const { steps } = useStepsContext();
  return (
    <StyledFormContainer>
      <AnimatePresence mode="wait">
        {steps === 0 && <PersonalInfoForm key="0" />}
        {steps === 1 && <SelectPlan key="1" />}
        {steps === 2 && <PickAddOns key="2" />}
        {steps === 3 && <FinishingUp key="3" />}
        {steps === 4 && <ThankYou key="4" />}
      </AnimatePresence>
    </StyledFormContainer>
  );
}

export default FormsContainer;
