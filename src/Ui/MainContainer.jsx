import styled from 'styled-components';
import Steps from './Steps';
import FormsContainer from './FormsContainer';

const StyledContainer = styled.main`
  background-color: var(--color-alabaster);
  max-width: 58rem;
  height: 80vh;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  overflow: hidden;

  @media (max-width: 60.4rem){
    padding: 12px;
    height: 70vh;
    max-width: 46rem;
  }

  @media(max-width:46.3rem){
    flex-direction: column;
    max-width: 20rem;
    overflow: visible;
    height: 27.5rem;
  }
`;

function MainContainer() {
  return (
    <StyledContainer>
      <Steps />
      <FormsContainer />
    </StyledContainer>
  );
}

export default MainContainer;
