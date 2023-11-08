
import './App.css'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
       <Navbar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
