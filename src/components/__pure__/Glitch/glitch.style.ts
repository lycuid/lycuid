import styled from 'styled-components';


const StyledGlitch = styled.span<{ text: string }>`
  position: relative;
  font-weight: 700;

  &::before,
  &::after {
    content: '${({ text }) => text}';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
    color: inherit;
    clip-path: polygon(0 33%, 100% 33%, 100% 0, 0 0);
  }

  &::before {
    left: 1px;
    text-shadow: -1px -1px red;
    animation: glitch-animation-1 2s infinite linear alternate-reverse;
  }

  &::after {
    left: -1px;
    text-shadow: 1px 1px blue;
    animation: glitch-animation-2 2s infinite linear alternate-reverse;
  }

  @keyframes glitch-animation-1 {
    0% { clip-path: inset(71% 0 10% 0); }
    5% { clip-path: inset(24% 0 62% 0); }
    10% { clip-path: inset(99% 0 1% 0); }
    15% { clip-path: inset(20% 0 24% 0); }
    20% { clip-path: inset(80% 0 3% 0); }
    25% { clip-path: inset(5% 0 40% 0); }
    30% { clip-path: inset(82% 0 4% 0); }
    35% { clip-path: inset(60% 0 18% 0); }
    40% { clip-path: inset(67% 0 2% 0); }
    45% { clip-path: inset(9% 0 71% 0); }
    50% { clip-path: inset(76% 0 14% 0); }
    55% { clip-path: inset(75% 0 12% 0); }
    60% { clip-path: inset(12% 0 30% 0); }
    65% { clip-path: inset(52% 0 31% 0); }
    70% { clip-path: inset(27% 0 54% 0); }
    75% { clip-path: inset(81% 0 7% 0); }
    80% { clip-path: inset(71% 0 4% 0); }
    85% { clip-path: inset(20% 0 64% 0); }
    90% { clip-path: inset(27% 0 42% 0); }
    95% { clip-path: inset(32% 0 10% 0); }
    100% { clip-path: inset(86% 0 13% 0); }
  }

  @keyframes glitch-animation-2 {
    0% { clip-path: inset(36% 0 60% 0); }
    5% { clip-path: inset(54% 0 8% 0); }
    10% { clip-path: inset(70% 0 5% 0); }
    15% { clip-path: inset(21% 0 35% 0); }
    20% { clip-path: inset(32% 0 62% 0); }
    25% { clip-path: inset(92% 0 7% 0); }
    30% { clip-path: inset(46% 0 38% 0); }
    35% { clip-path: inset(3% 0 67% 0); }
    40% { clip-path: inset(31% 0 38% 0); }
    45% { clip-path: inset(44% 0 32% 0); }
    50% { clip-path: inset(32% 0 15% 0); }
    55% { clip-path: inset(5% 0 46% 0); }
    60% { clip-path: inset(44% 0 40% 0); }
    65% { clip-path: inset(87% 0 7% 0); }
    70% { clip-path: inset(56% 0 28% 0); }
    75% { clip-path: inset(71% 0 6% 0); }
    80% { clip-path: inset(59% 0 9% 0); }
    85% { clip-path: inset(49% 0 2% 0); }
    90% { clip-path: inset(79% 0 5% 0); }
    95% { clip-path: inset(91% 0 4% 0); }
    100% { clip-path: inset(81% 0 20% 0); }
  }
`;

export default StyledGlitch;
