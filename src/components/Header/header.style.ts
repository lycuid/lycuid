import styled from 'styled-components';


const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: .7rem 0;
  margin-bottom: 5vh;

  @media (max-width: 576px) {
    & {
      flex-direction: column;
      margin-bottom: 2vh;
    }
  }
`;

export const HeaderTitle = styled.h1`
  flex-grow: 1;
  font-weight: 900;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 576px) {
    & {
      margin-block-start: 0.4em;
      margin-block-end: 0.4em;
    }
  }
`;

export const RocketImg = styled.img`
  height: 45px;
  cursor: pointer;
  animation: prepare-launch 3.5s ease-in infinite;

  &:hover {
    animation: launch-ready .35s ease-in infinite;
  }

  @keyframes prepare-launch {
    10% { transform: translateY(-4px); }
    25% { transform: translateY(-2.5px); }
    40% { transform: translateY(-4px); }
    55% { transform: translateY(2.5px); }
    70% { transform: translateY(0px); }
    85% { transform: translateY(-4px); }
    95% { transform: translateY(-1.75px); }
    100% { transform: translateY(0); }
  }

  @keyframes launch-ready {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
`;

export default StyledHeader;
