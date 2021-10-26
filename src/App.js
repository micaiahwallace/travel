import { Router } from '@reach/router'
import { Home } from './screens/root'

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export default App
