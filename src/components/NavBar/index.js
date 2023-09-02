import {Component} from 'react'
import {Link} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'

import {AiOutlineMenu} from 'react-icons/ai'
import Popup from 'reactjs-popup'
import MenuBar from '../MenuBar'

import AppTheme from '../../context/Theme'

import {
  NavBarContainer,
  NavItems,
  WebsiteLogo,
  ListItem,
  ThemeButton,
  Profile,
  LogoutButton,
  NavItemsSmall,
  PopupContainer,
  Menu,
} from './styledComponents'

class NavBar extends Component {
  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const changeTheme = () => {
            toggleTheme()
          }
          const bgColor = isDarkTheme ? '#181818' : '##f9f9f9'
          const ThemeIcon = isDarkTheme ? (
            <BiSun size={30} color="#ffffff" />
          ) : (
            <FaMoon color="#000000" size={30} />
          )
          const WebsiteLogoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <NavBarContainer bgColor={bgColor}>
              <Link to="/">
                <WebsiteLogo src={WebsiteLogoUrl} alt="website logo" />
              </Link>

              <NavItems>
                <ListItem>
                  <ThemeButton
                    type="button"
                    onClick={changeTheme}
                    data-testid="theme"
                  >
                    {ThemeIcon}
                  </ThemeButton>
                </ListItem>
                <ListItem>
                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ListItem>
                <ListItem>
                  <LogoutButton>Logout</LogoutButton>
                </ListItem>
              </NavItems>
              <NavItemsSmall>
                <ListItem>
                  <ThemeButton
                    type="button"
                    data-testid="theme"
                    onClick={changeTheme}
                  >
                    {ThemeIcon}
                  </ThemeButton>
                </ListItem>
                <ListItem>
                  <Menu>
                    <Popup
                      modal
                      trigger={
                        <ThemeButton type="button">
                          <AiOutlineMenu size={30} />
                        </ThemeButton>
                      }
                    >
                      {close => (
                        <>
                          <LogoutButton onClick={() => close()}>
                            Close
                          </LogoutButton>
                          <PopupContainer>
                            <MenuBar />
                          </PopupContainer>
                        </>
                      )}
                    </Popup>
                  </Menu>
                </ListItem>
              </NavItemsSmall>
            </NavBarContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default NavBar
