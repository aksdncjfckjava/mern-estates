
import  {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Sigin from './Pages/Sigin'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import Header from './Components/Header'

export default function App() {
  return (
  
    <BrowserRouter>
    <Header/>
    <Routes>

      
     
     <Route path="/"  element={<Home />}/>
     <Route path="/Sigin" element={<Sigin  />}/>
     <Route path="/Signup" element={<Signup  />}/>
     <Route path="/About" element={<About />}/>
     <Route path="/Profile" element={<Profile  />}/>
     


     
     

    </Routes>
    
    </BrowserRouter>
  )
}
