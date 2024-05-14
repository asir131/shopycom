import { FaChartBar } from "react-icons/fa6";
import mylogo from '../assets/logo'
import { ImCross } from "react-icons/im";
import { IoIosMan } from "react-icons/io";
import { TbMoodKid } from "react-icons/tb";
import { IoWoman } from "react-icons/io5";
import { useState } from "react";
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';




const Navbar = () => {
  
 


  const [bar,setBar]=useState(false)

  const toggleBar=() => {
     setBar(!bar)
  }
  return (
    <div className="flex md:gap-44  justify-center  items-center overflow-hidden  ">
      <div className="logo">
        <Link to="/"><img className="w-20 mr-52 " src={mylogo} alt="" /></Link>
      </div>
      <div className="category hidden md:flex">
           <ul className="grid grid-cols-3 gap-10 ">
              <li><Link to='/men'><a className="flex justify-center  items-center" href="/"><IoIosMan />Men</a></Link></li>
              <li><Link to='/women'><a className="flex justify-center  items-center" href="/"><IoWoman />Women</a></Link></li>
              <li><Link to='/kids'><a className="flex justify-center  items-center" href="/"><TbMoodKid /> Kids</a></Link></li>
           </ul>
      </div>
      
      <div className="login flex justify-between gap-5">
      <div onClick={toggleBar} className="bar  md:hidden relative text-black">
         {bar?<ImCross size={32}  />:<FaChartBar size={32} />}
        <div className="dropdown ">
            
          {
            bar && (
              <ul className="grid grid-cols-1 bg-black absolute w-44 gap-3 mt-6 border-b border-black-500 border-solid rounded-md border-2 shadow-lg">
              <li><a className="flex p-2 text-white items-center " href="/"><IoIosMan />Men</a></li>
              <li><a className="flex p-2 text-white items-center" href="/"><IoWoman />Women</a></li>
              <li><a className="flex p-2 text-white items-center" href="/"><TbMoodKid /> Kids</a></li>
              </ul>
            )
          }
            
        </div>   
      </div>
      <Link to='/login'><button  className="bg-slate-900 text-white font-bold rounded-md px-4 py-2">
      Log In
    </button></Link>
            <button className="cartt bg-slate-900 rounded-md px-4 py-2 text-white font-bold flex items-center gap-2">
              <GrCart size={32}/> <h3>Cart</h3>
            </button>
      </div>
      
    </div>
    
  )
  
}

export default Navbar
