import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
