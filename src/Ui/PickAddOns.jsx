import styled from 'styled-components';
import Heading from './Heading';
import Picker from './Picker';
import TwoButtons from './TwoButtons';
import { usePlanContext } from '../Context/PlanContext';
import { motion } from 'framer-motion';
import { containerMotion } from '../helpers/containerMotion';

const PickerContainer = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 6rem;

  @media (max-width: 60.4rem) {
    margin-bottom: 3rem;
  }

  @media(max-width:46.3rem){
    margin-bottom: 1rem;
    width: 17rem;
}
`;


function PickAddOns() {
  const { duration } = usePlanContext();
  return (
    <motion.div
      variants={containerMotion}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <Heading title="Pick add-ons">
        Add-ons help enhance your gaming experience.
      </Heading>
      <PickerContainer>
        <Picker
          title="Online service"
          description="Access to multiplayer games"
          price={duration === 'mo' ? 1 : 10}
        />
        <Picker
          title="Larger storage"
          description="Extra 1TB of cloud save"
          price={duration === 'mo' ? 2 : 20}
        />
        <Picker
          title="Customizable"
          description="Custom theme on your profile"
          price={duration === 'mo' ? 2 : 20}
        />
      </PickerContainer>
      <TwoButtons
        firstButton="back"
        lastButton="next"
      />
    </motion.div>
  );
}

export default PickAddOns;
