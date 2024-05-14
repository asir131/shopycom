const SignUp = () => {
    return (
      <div className="text-black mt-20 text-center  justify-items-center">
      
        <h1 className="font-bold">SignUp</h1>
        <form action="" className="grid grid-cols-1 justify-items-center mt-10    h-72">

            <input className="border-2 h-16 rounded-md px-6" type="text" placeholder="Enter your Email" />
            <input className="border-2 h-16 rounded-md px-6" type="text" placeholder="Enter your Password" />
            <input className="border-2 h-16 rounded-md px-6" type="text" placeholder="Confirm Password" />
            <button className="cartt mr-44 bg-slate-900 rounded-md px-4 py-2 text-white font-bold flex items-center gap-2">Submit</button>

            
        </form>
      </div>
    )
  }
  
  export default SignUp