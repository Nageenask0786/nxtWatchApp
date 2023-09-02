import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import LoginForm from './components/LoginForm'

import Home from './components/HomeRoute'
import AppTheme from './context/Theme'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <AppTheme.Provider value={{isDarkTheme, toggleTheme: this.toggleTheme}}>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route path="/not-found" component={NotFound} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Redirect to="/not-found" />
        </Switch>
      </AppTheme.Provider>
    )
  }
}

export default App
