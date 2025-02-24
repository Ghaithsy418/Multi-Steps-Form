import styled from 'styled-components';

const StyledInput = styled.input`
  width: 28rem;
  height: 2.5rem;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid var(--color-light-gray);
  color: var(--color-marine-blue);
  font-weight: 700;
  font-size: 0.9rem;

  &::placeholder {
    color: var(--color-cool-gray);
    font-weight: 400;
    letter-spacing: 1.1px;
  }

  &:focus {
    outline: 1px solid var(--color-purplish-blue);
  }

  @media (max-width: 60.4rem) {
    width: 20rem;
    font-size: 0.7rem;
  }

  @media (max-width: 46.3rem) {
    width: 12rem;
    height: 1.6rem;
    font-size: 0.6rem;
    &::placeholder {
      letter-spacing: 1px;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Error = styled.p`
  color: var(--color-strawberry-red);
  font-weight: 700;
  font-size: 0.9rem;

  @media (max-width: 60.4rem) {
    font-size: 0.8rem;
  }

  @media (max-width: 46.3rem) {
    font-size: 0.6rem;
  }
`;

const StyledLabel = styled.label`
  color: var(--color-marine-blue);
  text-transform: capitalize;
  font-size: 0.9rem;

  @media (max-width: 60.4rem) {
    font-size: 0.7rem;
  }

  @media (max-width: 46.3rem) {
    font-size: 0.6rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1.2rem;

  @media (max-width: 46.3rem) {
    margin-left: 0.4rem;
    margin-bottom: 1rem;
  }
`;

function Input({ name, placeholder, field, setField, error }) {
  return (
    <StyledDiv>
      <Flex>
        <StyledLabel htmlFor={name}>{name}*</StyledLabel>
        {error && <Error>This field is Required!</Error>}
      </Flex>
      <StyledInput
        onChange={(e) => setField(e.target.value)}
        value={field}
        id={name}
        placeholder={placeholder}
      />
    </StyledDiv>
  );
}

export default Input;
