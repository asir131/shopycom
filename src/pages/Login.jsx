import { Link } from 'react-router-dom';
import  { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/LoginContext';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {  setIsLoggedIn,setAdmin,setIsAuthenticated,setMail,mail } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const API_URL = 'http://localhost:8080';
  
    try {
      setMail(email)
      const bodyData = {
        email,
        password
      };
  
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.token);  // Save token to local storage
        setIsAuthenticated(true);
        if (data.message === 'Login successful') {
          setIsLoggedIn(true);
        } else if (data.message === 'Login admin') {
          setAdmin(true);
        }
        navigate('/');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error Login:', error);
      alert(error.message);
    }
  }
  
console.log(mail);
    return (
      <div className="text-black mt-20 text-center  justify-items-center">
      
        <h1 className="font-bold">LogIn</h1>
        <form onSubmit={handleLogin} action="" className="grid grid-cols-1 justify-items-center mt-10    h-60">

            <input className="border-2 h-16 rounded-md px-6" type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className="border-2 h-16 rounded-md px-6" type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)}  />

            <button type="submit" className="cartt mr-44 bg-slate-900 rounded-md px-4 py-2 text-white font-bold flex items-center gap-2">Submit</button>

            <h2 className='mr-8'>Create an account <Link to='/signup'>SignUp</Link></h2>
        </form>
      </div>
    )
  }
 
  
  export default Login