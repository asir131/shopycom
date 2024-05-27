import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { modifyQuantityOfAnItem,removeFromCart } from "../store/actions/cart";
import { icons } from "../assets/index";
import PropTypes from 'prop-types';

const CartItem = ({ cartItem }) => {
	const cart =useSelector((storeState) => storeState.cart);
    
    let totalAmount=0;
    cart.forEach((item) =>totalAmount+=Number(item.quantity)*Number(item.new_price));
	const [itemQuantity, setItemQuantity] = useState(Number(cartItem.quantity));
	const dispatch = useDispatch();
	return (
		<div>
			
			<tr className="grid md:grid-cols-5  items-center -mb-56">
			<td>
					<img  src={cartItem.image} alt="" className="product-img w-48 rounded-md" />

				
			</td>
			<td className="w-56">
				<p>Name : {cartItem.name}</p>
			</td>
			<td>$ {cartItem.new_price}</td>
			<td>
				<div className="qty_input">
					<button
						className="qty-count qty-count--minus"
						type="button"
						onClick={() => {
							if (itemQuantity <= 1) {
								return alert(`Quantity can't be less than 1`);
							}
							setItemQuantity(
                                
								(currentQuantity) => currentQuantity - 1,
							);
							dispatch(modifyQuantityOfAnItem({
								id: cartItem.id,
							 	quantity: itemQuantity - 1}));
						}}
					>
						<figure>
							<img className="md:mr-6 md:mb-1" src={icons.minusIcon} alt="" />
						</figure>
					</button>
					<input
						type="number"
						className="product-qty rounded-lg w-20 md:px-6 text-black"
						value={itemQuantity}
						onChange={(e) => {
							setItemQuantity(Number(e.target.value));
							dispatch(
							
							modifyQuantityOfAnItem({id: cartItem.id, quantity: Number(e.target.value)})
							);
						}}
						min="1"
					/>
					<button
						onClick={() => {
							setItemQuantity(
								(currentQuantity) => currentQuantity + 1,
							);
							dispatch(
							
							modifyQuantityOfAnItem({
								id: cartItem.id,
								quantity: itemQuantity + 1,
							})
							);
						}}
						className="qty-count qty-count--add"
						type="button"
					>
						<figure>
							<img className="md:ml-6 md:mt-1" src={icons.plusIcon} alt="" />
						</figure>
					</button>
				</div>
			</td>
			<td className="flex">Total Price : $ {cartItem.new_price * cartItem.quantity}  <h3 onClick={() =>
						dispatch(
						
						removeFromCart(cartItem.id)
						)
					} className="ml-2 bg-red-700 px-4 rounded-full cursor-pointer">X</h3></td>
			<td >
			<figure>
				<img
					src={icons.crossIcon}
					alt=""
					className="cross-icon bg-red"
					
				/>
				</figure>
				<h3 className="">X</h3>
			</td>
			<td>
			
			</td>
		</tr>
		
		</div>
	);
};
CartItem.propTypes = {
    cartItem: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        new_price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        // Add other prop types as needed
    }).isRequired,
};
export default CartItem;
