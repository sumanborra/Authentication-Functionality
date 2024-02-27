// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {islogin: false, name: '', password: ''}

  inputElements = async event => {
    event.preventDefault()
    const {history} = this.props
    console.log(history)
    const {name, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: "rahul", password:"rahul@2021"}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const jwtToken = data.jwt_token
    if (response.ok === true) {
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    }
    this.setState({islogin: false})
  }
  chageName = event => {
    this.setState({name: event.target.value})
  }
  changePassword = event => {
    this.setState({password: event.target.value})
  }
  /* inputElements = () => {
    this.setState({islogin: true})
  }*/
  render() {
    const {islogin} = this.state

   /*  const result = islogin ? (
      <>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="name" onChange={this.chageName} />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={this.changePassword}
          />
          <button type="submit">submit</button>
        </form>
      </>
    ) : (
      <>
        <h1 className="heading-login">Please Login</h1>
        <button className="buttn" onClick={this.inputElements}>
          Login with Sample Creds
        </button>
      </>
    ) */
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (<>
      <h1 className="heading-login">Please Login</h1>
        <button className="buttn" onClick={this.inputElements}>
          Login with Sample Creds
        </button>
    </>)
  }
}
export default Login
