import { motion } from 'framer-motion';
import styled from 'styled-components';
import { containerMotion } from '../helpers/containerMotion';

const StyledThankYou = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  width: 65%;
  margin-bottom: 1rem;
`;

const Img = styled(motion.img)`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;

  @media (max-width: 60.4rem) {
    width: 4rem;
    height: 4rem;
  }

  @media (max-width: 46.3rem) {
    width: 3rem;
    height: 3rem;
  }
`;

const H2 = styled.h2`
  color: var(--color-marine-blue);
  font-weight: 700;
  font-size: 2.2rem;

  @media (max-width: 60.4rem) {
    font-size: 1.8rem;
  }

  @media (max-width: 46.3rem) {
    font-size: 1.4rem;
  }
`;

const P = styled.p`
  font-size: 0.9rem;
  color: var(--color-cool-gray);
  text-align: center;
  line-height: 21px;

  @media (max-width: 60.4rem) {
    font-size: 0.9rem;
  }

  @media (max-width: 46.3rem) {
    font-size: 0.7rem;
  }
`;

const childrenMotion = {
  hidden: {
    opacity: 0,
    rotateZ: -270,
    x: '-30vw',
  },
  visible: {
    opacity: 1,
    rotateZ: 0,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

function ThankYou() {
  return (
    <StyledThankYou
      variants={containerMotion}
      animate="visible"
      initial="hidden"
    >
      <Img
        src="./images/icon-thank-you.svg"
        alt="thank you icon"
        variants={childrenMotion}
        animate="visible"
        initial="hidden"
      />
      <H2>Thank you!</H2>
      <P>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need spport, please feel free to email us at
        support@loremgaming.com.
      </P>
    </StyledThankYou>
  );
}

export default ThankYou;
