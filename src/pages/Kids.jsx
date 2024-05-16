import { GrCart } from "react-icons/gr";
import  { useContext } from 'react';
import { AuthContext } from '../Context/LoginContext';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart';

const Kids = () => {
  const dispatch = useDispatch();
  const {  all_products,isLoggedIn } = useContext(AuthContext);
    const kids = all_products.filter(product => product.category === 'kid')
  return (
    <div className="justify-items-center items-center px-10">
        <h1 className='text-black border-b-2 border-gray-300 text-center font-bold mt-14'>Kid's Items</h1>
        <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-32 gap-8 px-auto '>
        
      {kids.map(item => (
        <div key={item.id} className='h-50 w-96 overflow-hidden border-2 rounded-xl'>

         <img className=' transition-transform duration-300 w-full transform-gpu hover:scale-110 ' src={item.image} alt={item.alt} />
         <h3 className='text-black font-bold text-xl mt-6 px-6'>{item.name}</h3>

         <div className='md:flex'>
         <p className='text-orange-500 px-6 py-4 font-bold'>New Price - {item.new_price}$</p>
         <p className='text-slate-700 px-6 py-4 font-bold'>Old Price - {item.old_price}$</p>
         </div>
         <button onClick={() =>
						{
              isLoggedIn && dispatch(
							
                addToCart(item)
                )
            }
					} className="cartt ml-6 mb-4 md:ml-6 md:mb-6 bg-slate-900 rounded-md px-4 py-2 text-white font-bold flex items-center gap-2">
              <GrCart size={32}/> <h3>Add to Cart</h3>
            </button>
         
         
        </div>
        
      ))}
    </div>
    </div>
  )
}

export default Kids