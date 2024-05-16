
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import AddProduct from './pages/AddProduct'

function App() {
  
 

  return (
    <div className='overflow-hidden'>
    <BrowserRouter>
       
       <Navbar />
       
       
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/addProduct' element={<AddProduct/>}/>
      
        </Routes>
        <Footer />
      </BrowserRouter>
      
       
      
    
       

    </div>
  )
}

export default App
