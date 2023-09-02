import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import {AiFillHome} from 'react-icons/ai'

import {MenuItemContainer, MenuItem} from './styledComponents'

const MenuBar = () => (
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
)

export default MenuBar
