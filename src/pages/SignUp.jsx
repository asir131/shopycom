import  { useState } from 'react';
// import axios from "axios"
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

   const API_URL = 'http://localhost:8080'; // Update this with your backend URL

const handleSignup = async (event) => {
  event.preventDefault();
  // console.log({email,password,confirmPassword});
  // await axios.post('http://localhost:8080/signup',JSON.stringify({email,password,confirmPassword}))
  // .then(result => console.log(result))
  // .catch(err=>console.log(err))

  
  
  // const res = await axios({
  //   method: 'POST',
  //   baseURL: 'http://localhost:5173/signup',
  //   url: '/signup',
  //   data: data
  // });
  
  // console.log(res.data);

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
    
    alert(data.message); // Display success or error message
  } catch (error) {
    console.error('Error signing up:', error);
    alert('An error occurred while signing up');
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




// const SignUp = () => {

//   // Frontend code (e.g., in a React component)
// const handleSignup = async () => {
//   const email = 'example@example.com';
//   const password = 'password';
//   const confirmPassword = 'password';

//   try {
//     const response = await fetch('/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password, confirmPassword }),
//     });

//     const data = await response.json();
//     alert(data.message); // Display success or error message
//   } catch (error) {
//     console.error('Error signing up:', error);
//     alert('An error occurred while signing up');
//   }
// };
     
//     return (
//       <div className="text-black mt-20 text-center  justify-items-center">
      
//         <h1 className="font-bold">SignUp</h1>
//         <form action="" className="grid grid-cols-1 justify-items-center mt-10    h-72">

//             <input className="border-2 h-16 rounded-md px-6" type="text" placeholder="Enter your Email" />
//             <input className="border-2 h-16 rounded-md px-6" type="text" placeholder="Enter your Password" />
//             <input className="border-2 h-16 rounded-md px-6" type="text" placeholder="Confirm Password" />
//             <button obClick={handleSignup} className="cartt mr-44 bg-slate-900 rounded-md px-4 py-2 text-white font-bold flex items-center gap-2">Submit</button>

            
//         </form>
//       </div>
//     )
//   }
  
//   export default SignUp