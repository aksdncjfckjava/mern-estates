
import  {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Sigin from './Pages/Sigin'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'

export default function App() {
  return (
  
    <BrowserRouter>
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
