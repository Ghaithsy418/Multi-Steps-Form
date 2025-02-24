import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import Heading from './Heading';
import { useInfosContext } from '../Context/InfosContext';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { containerMotion } from '../helpers/containerMotion';

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 180%;
  margin-top: 6rem;

  @media (max-width: 60.4rem){
    width: 170%;
    margin-top: 3rem;
  }

  @media(max-width:46.3rem){
    width: 100%;
    margin-top: 0;
    align-items: center;
  }
`;

function PersonalInfoForm() {
  const [error, setError] = useState(false);
  const [nameField, setNameField] = useState('');
  const [phoneNumberField, setPhoneNumberField] = useState('');
  const [emailAddressField, setEmailAddressField] = useState('');
  const { dispatchInfos } = useInfosContext();

  function handleSubmit() {
    if (!nameField || !phoneNumberField || !emailAddressField) {
      setError(true);
      return;
    }

    dispatchInfos({
      type: 'submitInfos',
      payload: {
        name: nameField,
        phoneNumber: phoneNumberField,
        emailAddress: emailAddressField,
      },
    });
    return setError(false);
  }

  return (
    <motion.div
      variants={containerMotion}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <Heading title="Personal Info">
        Please provide your name, email address, and phone number.
      </Heading>
      <form>
        <Input
          name="name"
          placeholder="e.g. Stephen King"
          field={nameField}
          setField={setNameField}
          error={error}
        />
        <Input
          name="email address"
          placeholder="e.g. stephenking@lorem.com"
          field={emailAddressField}
          setField={setEmailAddressField}
          error={error}
        />
        <Input
          name="phone number"
          placeholder="e.g. +1 234 567 890"
          field={phoneNumberField}
          setField={setPhoneNumberField}
          error={error}
        />
      </form>
      <StyledButtonContainer>
        <Button
          onClick={handleSubmit}
          goal="next"
          disabled={
            nameField === '' ||
            phoneNumberField === '' ||
            emailAddressField === ''
          }
        >
          Next Step
        </Button>
      </StyledButtonContainer>
    </motion.div>
  );
}

export default PersonalInfoForm;
