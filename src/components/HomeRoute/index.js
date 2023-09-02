import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiSearch} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import AppTheme from '../../context/Theme'
import VideoItem from '../VideoItem'
import {
  HomeRouteContainer,
  Container,
  HomeContainer,
  HomeRoute,
  SearchContainer,
  InputElement,
  SearchIcon,
  NoSearchPara,
  NoSearchResultsHeading,
  NoSearchResultsView,
  NoResultsImage,
  RetryButton,
  FailureView,
  FailureHeading,
  FailurePara,
  FailureImage,
} from './styledComponents'
import SideBar from '../SideBar'
import Banner from '../Banner'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {search: '', apiStatus: apiStatusConstants.initial, videosData: []}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {search} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      console.log(data)
      const formattedData = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewsCount: each.view_count,
        title: each.title,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
      }))
      console.log(formattedData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosData: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  onClickEnter = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  onClickSearchButton = () => {
    this.getVideos()
  }

  onClickRetry = () => {
    this.getVideos()
  }

  renderNoSearchResultsView = () => (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const HeadColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const ParaColor = isDarkTheme ? '#4f46e5' : '#475569'
        console.log(isDarkTheme)
        return (
          <NoSearchResultsView bgColor={bgColor}>
            <NoResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchResultsHeading Color={HeadColor}>
              No Search results found
            </NoSearchResultsHeading>
            <NoSearchPara Color={ParaColor}>
              Try different key words or remove search filter
            </NoSearchPara>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </NoSearchResultsView>
        )
      }}
    </AppTheme.Consumer>
  )

  renderVideosSuccessView = () => {
    const {videosData} = this.state
    return (
      <>
        {videosData.length > 0 ? (
          <ul>
            {videosData.map(each => (
              <VideoItem videoItemDetails={each} key={each.id} />
            ))}
          </ul>
        ) : (
          this.renderNoSearchResultsView()
        )}
      </>
    )
  }

  renderFailureView = () => (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
        const HeadColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const ParaColor = isDarkTheme ? '#4f46e5' : '#475569'
        const Url = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureView bgColor={bgColor}>
            <FailureImage src={Url} alt="failure view" />

            <FailureHeading Color={HeadColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara Color={ParaColor}>
              We are having some trouble
            </FailurePara>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </FailureView>
        )
      }}
    </AppTheme.Consumer>
  )

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderHomeView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {search} = this.state
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          return (
            <>
              <NavBar />
              <HomeRouteContainer>
                <Container>
                  <SideBar />
                </Container>
                <HomeContainer>
                  <Banner />
                  <HomeRoute bgColor={bgColor} data-testid="home">
                    <SearchContainer>
                      <InputElement
                        type="search"
                        value={search}
                        onChange={this.onChangeSearch}
                        onKeyDown={this.onClickEnter}
                      />
                      <SearchIcon
                        type="button"
                        onClick={this.onClickSearchButton}
                        data-testid="searchButton"
                      >
                        <BiSearch />
                      </SearchIcon>
                    </SearchContainer>
                    {this.renderHomeView()}
                  </HomeRoute>
                </HomeContainer>
              </HomeRouteContainer>
            </>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Home
