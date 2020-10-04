import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #f9ee8b;
  padding-left: 72px;
  padding-right: 72px;
`

const Title = styled.h5`
  font-size: 36px;
  color: #fa73ad;
`

const SubTitle = styled.h1`
  font-size: 18px;
  color: #403b10;
  margin-top: 8px;
`

const PersonalLink = styled.a`
  &,
  &:visited,
  &:active {
    color: #fa73ad;
  }
`

const CompanyLink = styled.a`
  &,
  &:visited,
  &:active {
    color: #403b10;
  }
`

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 72px;
  left: 50%;
  transform: translateX(-50%);
`

const Arrow = styled.span`
  width: 20px;
  height: 20px;
  display: block;
  border-right: 4px solid #fa73ad;
  border-bottom: 4px solid #fa73ad;
  border-radius: 2px;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 3s infinite;

  @keyframes animate {
    66% {
      transform: rotate(45deg) translate(20px, 20px);
    }
  }
`

const HeroSection = () => (
  <Wrapper>
    <Title>Hello world!</Title>

    <SubTitle>
      My name is{" "}
      <PersonalLink href="https://github.com/kpietraszek">
        Krzysztof Pietraszek
      </PersonalLink>{" "}
      and I work as a frontend developer for{" "}
      <CompanyLink href="https://www.netguru.com/">Netguru</CompanyLink>.
    </SubTitle>

    <ArrowWrapper>
      <Arrow />
      <Arrow />
    </ArrowWrapper>
  </Wrapper>
)

export default HeroSection
