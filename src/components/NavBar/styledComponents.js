import styled from 'styled-components'

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-style: solid;
  border-color: #f1f5f9;
  border-width: 2px;
  background-color: ${props => props.bgColor};
  width: 100vw;
`

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 50px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const WebsiteLogo = styled.img`
  height: 40px;
  margin-left: 40px;
  width: 100px;
`
export const ListItem = styled.li`
  list-style-type: none;
  margin: 15px;
`
export const ThemeButton = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
`
export const Profile = styled.img`
  height: 36px;
  width: 38px;
`
export const LogoutButton = styled.button`
  height: 30px;
  width: 80px;
  border-radius: 6px;
  border-style: solid;
  border-width: 3px;
  border-color: #4f46e5;
  color: #4f46e5;
  font-weight: bold;
`
export const NavItemsSmall = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
