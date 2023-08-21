import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import AppTheme from './context/Theme'

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
          <Route exact path="/" component={Home} />
        </Switch>
      </AppTheme.Provider>
    )
  }
}

export default App
