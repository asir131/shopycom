import  { useContext, useEffect,useState } from 'react';
import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from '../store/actions/cart';
import { AuthContext } from '../Context/LoginContext'
const Cart = () => {
	const {  mail} = useContext(AuthContext);
    const cart =useSelector((storeState) => storeState.cart);
	const [cartProducts, setCartProducts] = useState([]);
	
    const dispatch =useDispatch();
    let totalAmount=0;
	useEffect(() => {
	const fetchProducts = async () => {
		const API_URL = 'http://localhost:8080';
		try {
		const response = await fetch(`${API_URL}/cart`, {
			method: 'GET',
			headers: {
			'Content-Type': 'application/json',
      },
			});
		
			if (!response.ok) { 
                throw new Error('Network response was not ok');
			}
		
			const data = await response.json();
			setCartProducts(data);
  } catch (error) {
			console.log(error);
			console.error('There was a problem with the fetch operation:', error);
  } 
  
};
		
	
		fetchProducts();
 }, []);
 let cartItems = cartProducts.filter((item) => item.mail===mail);
 cartItems.forEach((item) =>totalAmount=Number(totalAmount)+Number(item.quantity)*Number(item.new_price));
        
    
  return (
    <div>
      <div className="md:py-20 overflow-hidden -mb-16 bg-black text-center md:px-20">
				<div className="">
					<h4 className='font-bold text-4xl py-10'>Product list in your Cart</h4>
				</div>
				<div className="product-table-container">
					<table>
						<thead>
						</thead>
						<tbody>
							{cartItems.map((cartItem,i) => (
								
								<CartItem key={i} cartItem={cartItem} />
							))}
						</tbody>
					</table>
				</div>
				<h2 className="total-price font-bold text-3xl">
					Your Total Price will be $ {totalAmount}
				</h2>
				<div className="mt-50">
					<button
						onClick={() => dispatch(clearCart())}
						className="btn-big font-bold text-xl"
					>
						Clear Cart
					</button>
				</div>
			</div>
    </div>
  )
}

export default Cart
