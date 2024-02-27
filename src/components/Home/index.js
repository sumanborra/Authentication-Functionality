// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => {
  return (
    <>
      <Header />
      <h1 className="heading-home">Home Route</h1>
      <LogoutButton />
    </>
  )
}
export default Home
