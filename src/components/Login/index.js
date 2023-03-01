import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  submitForm = event => {
    event.preventDefault()
    this.onSubmitSuccess(1234)
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h1>Please Login</h1>
          <button type="submit" className="login-button">
            Login with Sample Creds
          </button>
        </form>
      </div>
    )
  }
}

export default Login
