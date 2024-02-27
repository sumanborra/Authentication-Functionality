// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <button className="buttn" onClick={logOut}>
        Logout
      </button>
    </>
  )
}
export default withRouter(LogoutButton)
