import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  flex-direction: column;
  width: 80vw;
  margin-top: 20px;
`
export const Align = styled.div`
  text-align: right;
`

export const Logo = styled.img`
  height: 40px;
  margin-left: 40px;
  width: 100px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
  height: 30px;
  width: 50px;
  padding-top: 30px;
  margin-right: 30px;
  @media screen and (max-width: 767px) {
    padding-top: 10px;
    margin-right: 10px;
  }
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #383838;
  font-size: 26px;
  padding-left: 30px;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const GetStartedButton = styled.button`
  background-color: transparent;
  border: 2px solid #231f20;
  outline: none;
  cursor: pointer;
  height: 70px;
  width: 150px;
  font-family: 'Roboto';
  color: #231f20;
  font-weight: bold;
  font-size: 15px;
  margin-left: 30px;
  @media screen and (max-width: 767px) {
    height: 30px;
    width: 90px;
    font-size: 10px;
  }
`
