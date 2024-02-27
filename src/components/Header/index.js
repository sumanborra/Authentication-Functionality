// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <ul className="list-container">
      <li className="list-item">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  )
}
export default withRouter(Header)
