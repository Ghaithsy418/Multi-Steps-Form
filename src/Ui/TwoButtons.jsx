import styled from 'styled-components';
import Button from './Button';

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width:46.3rem){
    margin: 0 auto;
    margin-top: 0.6rem;
  }
`;

function TwoButtons({ firstButton, lastButton, secondDisabled }) {
  return (
    <ButtonsContainer>
      <Button goal={firstButton}>Go Back</Button>
      <Button
        disabled={secondDisabled}
        goal={lastButton}
      >
        {lastButton === 'next' ? 'Next Step' : 'Confirm'}
      </Button>
    </ButtonsContainer>
  );
}

export default TwoButtons;
