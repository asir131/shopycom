
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
    <BrowserRouter>
       
       <Navbar/>
       
       
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/kids' element={<Kids/>}/>
      
        </Routes>
        <Footer />
      </BrowserRouter>
      
       
      
    
       

    </>
  )
}

export default App
