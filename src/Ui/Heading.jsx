import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 2.2rem;
  letter-spacing: 1.2px;
  color: var(--color-marine-blue);
  font-weight: 700;
  margin-bottom: 10px;

  @media(max-width: 60.4rem){
    font-size: 1.6rem;
    letter-spacing: 1px;
  }
  @media(max-width:46.3rem){
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
    text-align: center;
  }
`;

const StyledText = styled.p`
  color: var(--color-cool-gray);
  margin-bottom: 2.8rem;

  @media(max-width: 60.4rem){
    marin-bottom: 1.6rem;
    font-size: 0.8rem;
  }

  @media(max-width:46.3rem){
    margin-bottom: 0.8rem;
    font-size: 0.6rem;
    text-align: center;
  }
`;
function Heading({children, title}) {
  return (
    <div>
      <StyledHeading>{title}</StyledHeading>
      <StyledText>
        {children}
      </StyledText>
    </div>
  );
}

export default Heading;
