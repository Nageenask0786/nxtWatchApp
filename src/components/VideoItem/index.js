import {Link} from 'react-router-dom'
import {VideoItems, Image, Title, Para, List, Item} from './styledComponents'

const VideoItem = props => {
  const {videoItemDetails} = props
  const {
    viewsCount,
    title,
    channel,
    publishedAt,
    thumbnailUrl,
    id,
  } = videoItemDetails
  const {name, profileImageUrl} = channel
  return (
    <Link to={`/videos/${id}`}>
      <VideoItems>
        <Image
          src={thumbnailUrl}
          height="100px"
          width="200px"
          alt="video thumbnail"
        />
        <Image
          src={profileImageUrl}
          height="30px"
          width="50px"
          alt="channel logo"
        />
        <Title>{title}</Title>
        <Para>{name}</Para>
        <List>
          <Item>
            <Para>{viewsCount}</Para>
          </Item>
          <Item>
            <Para>{publishedAt}</Para>
          </Item>
        </List>
      </VideoItems>
    </Link>
  )
}

export default VideoItem
