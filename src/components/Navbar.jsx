import { FaChartBar } from "react-icons/fa6";
import mylogo from '../assets/logo'
import { ImCross } from "react-icons/im";
import { IoIosMan } from "react-icons/io";
import { TbMoodKid } from "react-icons/tb";
import { IoWoman } from "react-icons/io5";
import { useState } from "react";
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';
import  { useContext ,useEffect} from 'react';
import { AuthContext } from "../Context/LoginContext";



const Navbar = () => {
  
  const { isLoggedIn,setIsLoggedIn,admin,setAdmin } = useContext(AuthContext);
   const [cart,setCart] = useState("hidden")
  // const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      setCart("");
    } else {
      setCart("hidden");
    }
  }, [isLoggedIn]);
  const [bar,setBar]=useState(false)

  const toggleBar=() => {
     setBar(!bar)
  }
  const logoutHandler = () => {
    setIsLoggedIn(false)
    setAdmin(false)
  }
  

  return (
    <div className="flex md:gap-44  justify-center  items-center overflow-hidden  ">
      <div className="logo">
        <Link to="/"><img className="w-10 md:w-20 mr-24 md:mr-52 " src={mylogo} alt="" /></Link>
      </div>
      <div className="category hidden md:flex ">
           <ul className="grid grid-cols-3 md:gap-20 ">
              <li><Link to='/men'><a className="flex justify-center  items-center" href="/"><IoIosMan />Men</a></Link></li>
              <li><Link to='/women'><a className="flex justify-center  items-center" href="/"><IoWoman />Women</a></Link></li>
              <li><Link to='/kids'><a className="flex justify-center  items-center" href="/"><TbMoodKid /> Kids</a></Link></li>
           </ul>
      </div>
      
      <div className="login flex justify-between gap-5">
      <div onClick={toggleBar} className="bar  md:hidden relative text-black">
         {bar?<ImCross size={32}  />:<FaChartBar className="icon-size-24 mt-3 md:icon-size-32"  />}
        <div className="dropdown ">
            
          {
            bar && (
              <ul className="grid grid-cols-1  bg-black absolute z-3 w-44 gap-3 mt-6 border-b border-black-500 border-solid rounded-md border-2 shadow-lg">
              <li><a className="flex p-2 text-white items-center " href="/"><IoIosMan />Men</a></li>
              <li><a className="flex p-2 text-white items-center" href="/"><IoWoman />Women</a></li>
              <li><a className="flex p-2 text-white items-center" href="/"><TbMoodKid /> Kids</a></li>
              </ul>
            )
          }
            
        </div>   
      </div>
      {isLoggedIn || admin ? (
        <Link to='/'>
          <button onClick={logoutHandler} className="bg-slate-900 text-white md:font-bold p-1 rounded-md md:px-2 md:py-2 w-16 md:w-28 text-xs md:text-2xl">
            Log out
          </button>
        </Link>
      ) : (
        <Link to='/login'>
          <button className="bg-slate-900 text-white md:font-bold p-1 text-xs md:text-2xl rounded-md md:px-4 md:py-2">
            Log In
          </button>
        </Link>
      )}
           <Link to='/cart'><div className={`${cart}`}>
           <button className={`bg-slate-900 rounded-md p-1 md:px-4 md:py-2 text-white md:font-bold    w-28 text-xl md:text-2xl  items-center gap-2 flex`}>
  <GrCart size={32}/> <h3>Cart</h3>
</button>
           </div></Link>
           {
            admin && <Link to='/addProduct'><div >
            <button className={`bg-slate-900 rounded-md px-4 py-2 text-white md:font-bold  items-center gap-2 flex md:w-56 text-xs md:text-2xl -ml-8 mt-2 h-6 md:-ml-0 md:mt-0 md:h-12`}>
   <GrCart className="icon-size-default md:icon-size-32" /> <h3>Add Product</h3>
 </button>
            </div></Link>
           }

      </div>
      
    </div>
    
  )
  
}

export default Navbar
