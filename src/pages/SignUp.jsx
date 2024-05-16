import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
   const API_URL = 'http://localhost:8080'; // Update this with your backend URL

const handleSignup = async (event) => {
  event.preventDefault();
  

  try {
    const bodyData = {
      email,
      password,
      confirmPassword
    };
    
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( bodyData ),
    });

    if (!response.ok) {
      throw new Error('Signup failed');
    }
   
    const data = await response.json();
    
    alert(data.message || data.error);
    if(data.message =='Sign up successful') {
      navigate('/login');
    } // Display success or error message
  } catch (error) {
    console.error('Error signing up:', error);
    alert(error);
  }
  
  setConfirmPassword('');
  setPassword('');
  setEmail('');
};

  

  return (
    <div className="text-black mt-20 text-center  justify-items-center">
      <h1 className="font-bold">SignUp</h1>
      <form onSubmit={handleSignup} className="grid grid-cols-1 justify-items-center mt-10 h-72">
        <input className="border-2 h-16 rounded-md px-6" type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="border-2 h-16 rounded-md px-6" type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className="border-2 h-16 rounded-md px-6" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit" className="cartt mr-44 bg-slate-900 rounded-md px-4 py-2 text-white font-bold flex items-center gap-2">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;




