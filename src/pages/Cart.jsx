
import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from '../store/actions/cart';
const Cart = () => {
    const cart =useSelector((storeState) => storeState.cart);
    const dispatch =useDispatch();
    let totalAmount=0;
    cart.forEach((item) =>totalAmount=Number(totalAmount)+Number(item.quantity)*Number(item.new_price));
        
    
  return (
    <div>
      <div className="md:py-20 overflow-hidden -mb-16 bg-black text-center md:px-20">
				<div className="">
					<h4 className='font-bold text-4xl py-10'>Product list in your Cart</h4>
				</div>
				<div className="product-table-container">
					<table>
						<thead>
							{/* <tr className='grid grid-cols-6 gap-64'>
								<th>Image</th>
								<th>Product Title</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>SubTotal</th>
								<th>Action</th>
							</tr> */}
						</thead>
						<tbody>
							{cart.map((cartItem,i) => (
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
