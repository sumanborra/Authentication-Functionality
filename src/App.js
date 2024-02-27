import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import About from './components/About'
import NotFound from './components/NotFound'
import './App.css'
const App = () => {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
