import {Component} from 'react'
import {Link} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'

import {AiOutlineMenu, AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import AppTheme from '../../context/Theme'

import {
  NavBarContainer,
  NavItems,
  WebsiteLogo,
  MenuItemContainer,
  MenuItem,
  ListItem,
  ThemeButton,
  Profile,
  LogoutButton,
  NavItemsSmall,
  PopupContainer,
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
          const bgColor = isDarkTheme ? '#000000' : '#ffffff'
          return (
            <NavBarContainer bgColor={bgColor}>
              <Link to="/">
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              </Link>

              <NavItems>
                <ListItem>
                  <ThemeButton type="button" onClick={changeTheme}>
                    <FaMoon size={30} />
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
                  <ThemeButton type="button">
                    <FaMoon size={30} />
                  </ThemeButton>
                </ListItem>
                <ListItem>
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
                          <MenuItemContainer>
                            <MenuItem>
                              <AiFillHome />
                              <p>Home</p>
                            </MenuItem>
                            <MenuItem>
                              <HiFire />
                              <p>Trending</p>
                            </MenuItem>
                            <MenuItem>
                              <SiYoutubegaming />
                              <p>Gaming</p>
                            </MenuItem>
                            <MenuItem>
                              <RiMenuAddFill />
                              <p>Saved Videos</p>
                            </MenuItem>
                          </MenuItemContainer>
                        </PopupContainer>
                      </>
                    )}
                  </Popup>
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
