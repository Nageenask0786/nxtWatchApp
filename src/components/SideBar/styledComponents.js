import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  justify-content: space-between;
  border-style: solid;
  border-color: ${props => props.Color};
  border-width: 4px;
  background-color: ${props => props.bgColor};
`
export const MenuItemContainer = styled.ul``
export const ItemContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100vw;
  align-items: center;
  text-decoration: none;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`
export const MenuItem = styled.li`
  list-style-type: none;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 1000;
  font-size: 20px;
  padding-left: 30px;
`
export const FooterImagesContainer = styled.div`
  display: flex;
  padding-left: 30px;
`

export const Image = styled.img`
  height: 40px;
  widows: 30px;
  margin-right: 10px;
`
export const FooterDescription = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 1000;
  font-size: 16px;
  padding-left: 30px;
`
