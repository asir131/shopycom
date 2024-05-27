
import { GrCart } from "react-icons/gr";
import  { useContext } from 'react';
import { AuthContext } from '../Context/LoginContext';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart';
import  { useEffect, useState } from 'react';
const Women = () => {
  const dispatch = useDispatch();
  const {  all_products,isLoggedIn,mail } = useContext(AuthContext);
    const women = all_products.filter(product => product.category === 'women')
    const [products, setProducts] = useState([]);
    const women2 = products.filter(product => product.category === 'women')
    const [fullDataCart, setFullDataCart] = useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        const API_URL = 'http://localhost:8080';
        try {
          const response = await fetch(`${API_URL}/addProduct`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.log(error);
          console.error('There was a problem with the fetch operation:', error);
        } 
        
      };
      
  
      fetchProducts();
    }, []);


    // const handleCart = async (event) => {
      
  
    //   try {
    //     const bodyData = {
    //       image:event.image,
    //       name:event.name,
    //       id:event.id,
    //       category:event.category,
    //       new_price:event.new_price,
    //       old_price:event.old_price,
    //       quantity:1,
    //       mail
  
  
  
    //     };
    //     const API_URL = 'http://localhost:8080';
    //     const response = await fetch(`${API_URL}/cart`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify( bodyData ),
    //     });
    
    //     if (!response.ok) {
    //       throw new Error('cart failed');
    //     }
       
    //     const data = await response.json();
        
    //     console.log(data);
    //   } catch (error) {
    //     console.error('Error signing up:', error);
    //     alert(error);
    //   }
    // }

    const handleCart = async (event) => {

      event.preventDefault;
// getting all from carts


  try {
    const response = await fetch(`http://localhost:8080/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    setFullDataCart(data);
    console.log(" data from data",data);
    
  let singleData= data.find(item=>Number(item.id)===Number(event.id) && item.mail===mail )
  console.log();
  if(Boolean(singleData)===false ){
   
      uploadToCart(event)
  }

  else if(Boolean(singleData)===true){
    updateToCart(event)
  }
    

    


    
  } catch (error) {
    console.log(error);
    console.error('There was a problem with the fetch operation:', error);
  } 

  





};







const uploadToCart =async (event) => {
const API_URL = 'http://localhost:8080';
   const bodyData = {
     image: event.image,
     name: event.name,
     id: Number(event.id),
     category: event.category,
     new_price: event.new_price,
     old_price: event.old_price,
     quantity: 1,
     mail
   };
 
   try {
     // First attempt to add the item to the cart
     const response = await fetch(`${API_URL}/cart`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(bodyData),
     });
     console.log('response:', response);
     if (!response.ok) {
       throw new Error('Failed to add item to cart');
     }
 
     const data = await response.json();
     console.log('Item added to cart:', data);
     
     // If item is added successfully, no need to patch
     return;
 
   } catch (error) {
     console.error('Error adding item to cart:', error);
 
     
   }
 
};


const updateToCart = async (event)=>{
try {
  // const singleData= fullDataCart.filter(item=>Number(item.id)===Number(event.id))
  
  const API_URL = 'http://localhost:8080';
// If adding fails, attempt to update the cart
const patchResponse = await fetch(`${API_URL}/cart`, {
method: 'PATCH',
headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify({ id: event.id,quantity: event.quantity, mail }), // Assuming you want to increase quantity
});

if (!patchResponse.ok) {
throw new Error('Failed to update cart');
}

const patchData = await patchResponse.json();
console.log('Cart updated:', patchData);

} catch (error) {
console.error('Error updating cart:', error);
alert('There was an issue with updating the cart. Please try again.');
}
}
  return (
    <div className="justify-items-center items-center px-10">
        <h1 className='text-black border-b-2 border-gray-300 text-center font-bold mt-14'>Women's Items</h1>
        <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-16 gap-8 px-auto '>
        
      {/* {women.map(item => (
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
							
                handleCart(item)
                )
            }
					} className="cartt ml-6 mb-4 md:ml-6 md:mb-6 bg-slate-900 rounded-md px-4 py-2 text-white font-bold flex items-center gap-2">
              <GrCart size={32}/> <h3>Add to Cart</h3>
            </button>
         
         
        </div>
        
      ))} */}
    </div>
    <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-0 gap-8 px-auto '>
        
      {women2.map(item => (
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
							
                handleCart(item)
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

export default Women