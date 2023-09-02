import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'
import {
  BannerContainer,
  Logo,
  CloseButton,
  Align,
  Paragraph,
  GetStartedButton,
} from './styledComponents'
import AppTheme from '../../context/Theme'

class Banner extends Component {
  state = {isClosed: false}

  onClickClose = () => {
    this.setState({
      isClosed: true,
    })
  }

  render() {
    const {isClosed} = this.state
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const WebsiteLogoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <>
              {isClosed === false ? (
                <BannerContainer data-testid="banner">
                  <Align>
                    <CloseButton
                      type="button"
                      data-testid="close"
                      onClick={this.onClickClose}
                    >
                      <GrFormClose size={30} />
                    </CloseButton>
                  </Align>

                  <Logo src={WebsiteLogoUrl} alt="nxt watch logo" />

                  <Paragraph>
                    Buy Nxt Watch Premium prepaid <br />
                    through UPI
                  </Paragraph>
                  <GetStartedButton type="button">GET IT NOW</GetStartedButton>
                </BannerContainer>
              ) : null}
            </>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Banner
