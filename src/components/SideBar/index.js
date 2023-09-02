import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import {AiFillHome} from 'react-icons/ai'

import {
  SideBarContainer,
  MenuItemContainer,
  MenuItem,
  ItemContainer,
  ContactHeading,
  FooterImagesContainer,
  Image,
  Footer,
  FooterDescription,
} from './styledComponents'

import AppTheme from '../../context/Theme'

const SideBar = () => (
  <AppTheme.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
      return (
        <SideBarContainer bgColor={bgColor} Color={bgColor}>
          <MenuItemContainer>
            <MenuItem>
              <ItemContainer to="/">
                <AiFillHome />
                <p>Home</p>
              </ItemContainer>
            </MenuItem>
            <MenuItem>
              <ItemContainer to="/trending">
                <HiFire />
                <p>Trending</p>
              </ItemContainer>
            </MenuItem>
            <MenuItem>
              <ItemContainer to="/gaming">
                <SiYoutubegaming />
                <p>Gaming</p>
              </ItemContainer>
            </MenuItem>
            <MenuItem>
              <ItemContainer to="saved-videos">
                <RiMenuAddFill />
                <p>Saved Videos</p>
              </ItemContainer>
            </MenuItem>
          </MenuItemContainer>
          <Footer>
            <ContactHeading>CONTACT US</ContactHeading>
            <FooterImagesContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </FooterImagesContainer>
            <FooterDescription>
              Enjoy! Now to see your channels and recommendations!
            </FooterDescription>
          </Footer>
        </SideBarContainer>
      )
    }}
  </AppTheme.Consumer>
)

export default SideBar
