import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const UserDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(UserDetails)}
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  togglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div className="username-field">
        <label htmlFor="username" className="label-text">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="light-theme-input"
          onChange={this.onChangeUserInput}
          value={username}
          placeholder="Username"
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const Type = showPassword ? 'text' : 'password'
    return (
      <div className="username-field">
        <label htmlFor="password" className="label-text">
          PASSWORD
        </label>
        <input
          type={Type}
          id="password"
          className="light-theme-input"
          onChange={this.onChangePassword}
          value={password}
          placeholder="Password"
        />
      </div>
    )
  }

  renderTogglePasswords = () => (
    <div className="show-passwords-container">
      <input
        type="checkbox"
        className="checkbox-input"
        id="checkbox"
        onClick={this.togglePassword}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        Show Password
      </label>
    </div>
  )

  render() {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-route-light-theme">
        <div className="login-form-container-light-theme">
          <div className="website-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website-logo"
              className="logo"
            />
          </div>
          <form onSubmit={this.submitForm}>
            {this.renderUsernameField()}
            {this.renderPasswordField()}
            {this.renderTogglePasswords()}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          {showErrorMsg && <p className="error-msg">*{errorMsg}</p>}
        </div>
      </div>
    )
  }
}

export default LoginForm
