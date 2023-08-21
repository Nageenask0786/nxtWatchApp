import NavBar from '../NavBar'
import AppTheme from '../../context/Theme'

const Home = () => (
  <AppTheme.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <NavBar />
          ssss
        </>
      )
    }}
  </AppTheme.Consumer>
)

export default Home
