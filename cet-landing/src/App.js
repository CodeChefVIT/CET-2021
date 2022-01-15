import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import './index.css'
import Landing from './Pages/Landing'


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Landing} />
        </Switch>
      </Router>
    </>
  )
}

export default App
