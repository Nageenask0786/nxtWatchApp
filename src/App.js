import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import LoginForm from './components/LoginForm'

import Home from './components/HomeRoute'
import AppTheme from './context/Theme'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
    activeTab: 'Home',
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addSavedVideos = video => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, video],
    }))
  }

  render() {
    const {isDarkTheme, savedVideosList, activeTab} = this.state
    console.log(activeTab)
    return (
      <AppTheme.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          addSavedVideos: this.addSavedVideos,
          savedVideosList,
          activeTab,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route exact path="/login" component={LoginForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AppTheme.Provider>
    )
  }
}

export default App
