import { useDispatch, useSelector } from 'react-redux'
import ItemsList from '../Restaurant Menu/ItemsList'
import { clearCart } from '../../utils/cartSlice'

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items)

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }
  
  return (
    <>
    <div>
      <button className="clear-cart"
      onClick={() => handleClearCart()}
      >Clear Cart</button>
      {cartItems.length === 0 ? "Cart is empty. Please add item to cart": 
      <ItemsList data={cartItems} /> }
    </div>
    </>
  )
}

export default Cart