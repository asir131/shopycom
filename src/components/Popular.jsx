
import popular from '../assets/popular';
import { GrCart } from "react-icons/gr";
const Popular = () => {
  return (
    <div>
        <h1 className='text-black font-bold mt-14'>Popular Items</h1>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:md:grid-cols-3 mt-32 gap-8 px-auto '>
        
      {popular.map(item => (
        <div key={item.id} className='h-50 w-96 overflow-hidden border-2 rounded-xl'>

         <img className=' transition-transform duration-300 w-full transform-gpu hover:scale-110 ' src={item.image} alt={item.alt} />
         <h3 className='text-black font-bold text-xl mt-6 px-6'>{item.name}</h3>

         <div className='md:flex'>
         <p className='text-orange-500 px-6 py-4 font-bold'>New Price - {item.new_price}$</p>
         <p className='text-slate-700 px-6 py-4 font-bold'>Old Price - {item.old_price}$</p>
         </div>
         <button className="cartt ml-6 mb-4 md:ml-6 md:mb-6 bg-slate-900 rounded-md px-4 py-2 text-white font-bold flex items-center gap-2">
              <GrCart size={32}/> <h3>Cart</h3>
            </button>
         
         
        </div>
        
      ))}
    </div>
    </div>
  )
}

export default Popular