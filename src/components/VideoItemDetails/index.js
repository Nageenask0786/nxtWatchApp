import {Component} from 'react'
import Cookies from 'js-cookie'
import AppTheme from '../../context/Theme'
import {VideoItemDetailsRoute} from './styledComponents'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import VideoPlayer from '../VideoPlayer'

class VideoItemDetails extends Component {
  state = {videoItemData: {}}

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const Data = data.video_details
    console.log(Data)
    const formattedData = {
      id: Data.id,
      description: Data.description,
      publishedAt: Data.published_at,
      thumbnailUrl: Data.thumbnail_url,
      title: Data.title,
      videoUrl: Data.video_url,
      viewCount: Data.view_count,
      channel: {
        name: Data.channel.name,
        profileImageUrl: Data.channel.profile_image_url,
        subscriberCount: Data.channel.subscriber_count,
      },
    }
    console.log(formattedData)
    if (response.ok === true) {
      this.setState({videoItemData: formattedData})
    }
  }

  render() {
    const {videoItemData} = this.state
    const {videoUrl} = videoItemData

    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const background = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <div>
              <NavBar />
              <VideoItemDetailsRoute
                background={background}
                data-testid="videoItemDetails"
              >
                <SideBar />
                <VideoPlayer videoUrl={videoUrl} />
              </VideoItemDetailsRoute>
            </div>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default VideoItemDetails
