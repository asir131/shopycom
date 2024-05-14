import { Link } from 'react-router-dom';
const Login = () => {
    return (
      <div className="text-black mt-20 text-center  justify-items-center">
      
        <h1 className="font-bold">LogIn</h1>
        <form action="" className="grid grid-cols-1 justify-items-center mt-10    h-60">

            <input className="border-2 h-16 rounded-md px-6" type="text" placeholder="Enter your Email" />
            <input className="border-2 h-16 rounded-md px-6" type="text" placeholder="Enter your Password" />

            <button className="cartt mr-44 bg-slate-900 rounded-md px-4 py-2 text-white font-bold flex items-center gap-2">Submit</button>

            <h2 className='mr-8'>Create an account <Link to='/signup'>SignUp</Link></h2>
        </form>
      </div>
    )
  }
  
  export default Login