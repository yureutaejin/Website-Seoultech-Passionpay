import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import routes from './route'
import React from 'react';

function App() {
  return (
    <Router>
      <NavBar />
      <div className='container mt-3'>
        <Switch>
          {routes.map((route) => {
            return (
              <Route key={route.path} path={route.path} exact component={route.component} />
            )
          })}
        </Switch>
      </div >
    </Router>
  )
}
export default App
