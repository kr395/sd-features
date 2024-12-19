import { Navbar, Hero, Features } from './Sections'
import './App.css'
import Macro from './Pages/Macro/Macro.jsx'
const App = () => {
  return (
    <div className=' w-full h-auto bg-red-400'>
      <Navbar />
      <Hero />
      <Features/>
      <Macro/>
    </div>
  )
}

export default App