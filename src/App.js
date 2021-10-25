import { Router } from '@reach/router'
import { Home } from './screens/home'

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export default App
