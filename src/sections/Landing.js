import styled from "styled-components";
import { GitHub, Twitter } from "react-feather";
import { SocialLink } from "../components/Social";


const Description = styled.p`
  margin: 0;
  font-size: 1.2rem;

  &::after {
    content: '';
    animation: blink .5s step-end infinite alternate;
    border-right: 2px solid;
  }

  @keyframes blink {
    50% {
        border-color: transparent;
    }
  }
`

const Name = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.3rem;
`

const Profile = styled.div`
  align-items: center;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 2rem);
  text-align: center;
  padding: 1rem;

  @media (prefers-color-scheme: dark) {
    background: #111;
    color: #fff;
  }
`

const SocialsContainer = styled.div`
  column-gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & a {
    color: inherit;
  }

  & a:hover {
    color: #777;
  }
`


function Landing() {
  return (
    <Profile>
      <Name>Néstor Pérez</Name>
      <Description>
        Software engineer & Sanic core developer
      </Description>
      <SocialsContainer>
        <SocialLink href="https://github.com/prryplatypus" title="GitHub" icon={<GitHub />} />
        <SocialLink href="https://twitter.com/prryplatypus" title="Twitter" icon={<Twitter />} />
      </SocialsContainer>
    </Profile>
  );
}

export default Landing;
