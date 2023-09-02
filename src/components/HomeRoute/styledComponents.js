import styled from 'styled-components'

export const HomeRouteContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    display: none;
  }
  width: 20vw;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomeRoute = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 60vw;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  border-width: 2px;
  border-color: #7e858e;
  flex-direction: row;
  margin: 0px;
  border-style: solid;
  border-radius: 3px;
  margin-top: 30px;
  margin-bottom: 10px;
  height: 40px;
  width: 400px;
  margin-left: 30px;
  @media screen and (max-width: 767px) {
    width: 200px;
  }
`
export const SearchIcon = styled.button`
  background-color: ${props => props.btnBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50px;
  border: 0px;
`

export const InputElement = styled.input`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border-color: transparent;
  font-family: 'Roboto';
  color: black;
  display: flex;
  align-self: center;
  width: 350px;
  @media screen and (max-width: 767px) {
    width: 150px;
  }
`

export const NoSearchResultsView = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
`
export const NoSearchResultsHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.Color};
  font-weight: bold;
  font-size: 33px;
`
export const NoSearchPara = styled.p`
  font-family: 'Roboto';
  color: ${props => props.Color};
  font-weight: bold;
  font-size: 24px;
`
export const NoResultsImage = styled.img`
  height: 300px;
  width: 300px;
`
export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.Color};
  font-weight: bold;
  font-size: 33px;
`
export const FailurePara = styled.p`
  font-family: 'Roboto';
  color: ${props => props.Color};
  font-weight: bold;
  font-size: 24px;
`
export const FailureImage = styled.img`
  height: 300px;
  width: 300px;
`

export const RetryButton = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #4f46e5;
  height: 30px;
  width: 70px;
  border: 0px;
  border-radius: 4px;
`
