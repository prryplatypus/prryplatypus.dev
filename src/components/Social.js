import styled from "styled-components";

const SocialStyle = styled.a`
  display: flex;
  justify-content: center;
  margin: 0rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  transition: all 150ms ease-in-out;
`

function SocialLink({href, icon, title}) {
  return (
    <SocialStyle
    href={href}
    rel="noreferrer"
    target="_blank"
    title={title}
    >
      {icon}
    </SocialStyle>
  )
}

export {
  SocialLink
}
