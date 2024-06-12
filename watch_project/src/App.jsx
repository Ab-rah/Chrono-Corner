import Home from './component/Home';
import Products from './component/Products'
import About from './component/About'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>
  )
}
export default App;