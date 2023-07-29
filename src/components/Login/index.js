import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMessage: false,
    errorMessage: 'Invalid Credentials',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  // need to check with username key if there is any value
  onSubmitForm = event => {
    event.preventDefault()
    const {username, password} = this.state
    if (localStorage.getItem(username) !== null) {
      const userDetails = localStorage.getItem(username)
      const parsedUserDetails = JSON.parse(userDetails)
      if (password === parsedUserDetails.password) {
        const {history} = this.props
        history.replace('/')
      } else {
        this.setState({showErrorMessage: true})
        console.log('failed')
      }
    } else {
      this.setState({showErrorMessage: true})
      console.log('failed')
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div className="input-container">
        <label htmlFor="username">Username</label>
        <input
          onChange={this.onChangeUsername}
          id="username"
          type="text"
          value={username}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          onChange={this.onChangePassword}
          type="password"
          id="password"
          value={password}
        />
      </div>
    )
  }

  render() {
    const {showErrorMessage, errorMessage} = this.state
    return (
      <div className="login-page">
        <div className="login-page-inner">
          <form onSubmit={this.onSubmitForm}>
            <h2>Login</h2>
            {this.renderUsernameField()}
            {this.renderPasswordField()}

            <button type="submit">Login</button>
            {showErrorMessage && <p>*{errorMessage}</p>}
          </form>
          <p>
            New User?{'  '}
            <span>
              <Link to="signup">Click Here</Link>
            </span>
          </p>
        </div>
      </div>
    )
  }
}

export default Login
