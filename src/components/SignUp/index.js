import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const professionsList = [
  'Accountant',
  'Cashier',
  'Manager',
  'Other',
  'Programmer',
  'Sales',
  'Student',
]

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    profession: professionsList[0],
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePhoneNumber = event => {
    this.setState({phoneNumber: event.target.value})
  }

  onChangeProfession = event => {
    this.setState({profession: event.target.value})
  }

  // need to check with username key if there is any value
  onSubmitForm = event => {
    event.preventDefault()
    const {username, password, email, phoneNumber, profession} = this.state
    const userDetails = {
      username,
      password,
      email,
      phoneNumber,
      profession,
    }
    const stringifiedUserDetails = JSON.stringify(userDetails)
    localStorage.setItem(username, stringifiedUserDetails)
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

  renderEmailField = () => {
    const {email} = this.state
    return (
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          onChange={this.onChangeEmail}
          id="email"
          type="text"
          value={email}
        />
      </div>
    )
  }

  renderPhoneNumberField = () => {
    const {phoneNumber} = this.state
    return (
      <div className="input-container">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          onChange={this.onChangePhoneNumber}
          id="phoneNumber"
          type="text"
          value={phoneNumber}
        />
      </div>
    )
  }

  renderProfessionField = () => {
    const {profession} = this.state
    return (
      <div className="input-container">
        <label htmlFor="profession">Profession</label>
        <select
          id="profession"
          onChange={this.onChangeProfession}
          value={profession}
        >
          {professionsList.map(eachProfession => (
            <option key={eachProfession} value={eachProfession}>
              {eachProfession}
            </option>
          ))}
        </select>
      </div>
    )
  }

  render() {
    return (
      <div className="signup-page">
        <div className="signup-page-inner">
          <form className="signup-form-container" onSubmit={this.onSubmitForm}>
            <h1>Sign Up</h1>
            {this.renderUsernameField()}
            {this.renderPasswordField()}
            {this.renderEmailField()}
            {this.renderPhoneNumberField()}
            {this.renderProfessionField()}
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already a User?{' '}
            <span>
              <Link to="/login">Login Here</Link>
            </span>
          </p>
        </div>
      </div>
    )
  }
}

export default SignUp
