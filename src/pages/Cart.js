import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../context/app-context'
import { StoreAction } from '../context/store-reducer'

const CartPage = (props: any) => {
	const context = useContext(AppContext)
	const { storeDispatcher } = context

	// useEffect(() => {
	// 	console.log('CartPage::useEffect - context', context)

	// }, [])

	const removeProductFromCart = (productId: string) => {
		console.log('CartPage::removeProductFromCart - productId', productId)

		storeDispatcher({
			type: StoreAction.REMOVE_PRODUCT_FROM_CART,
			payload: productId,
		})
	}

	const deleteProductFromCart = (productId: string) => {
		console.log('CartPage::deleteProductFromCart - productId', productId)

		storeDispatcher({
			type: StoreAction.DELETE_PRODUCT_FROM_CART,
			payload: productId,
		})
	}

	// const calculateCartTotals = (cart: CartItem[]) => {
	// 	return {
	// 		subTotal: 0,
	// 		tax: 0,
	// 		discounts: 0,
	// 		total: 0,
	// 	}
	// }

	return (
		<React.Fragment>
			<div>
				<Link to="">Products</Link>
				<Link to="checkout">Checkout</Link>
			</div>

			<div>Shopping Cart</div>
			<ul>
				{context.cart.items.map((cartItem) => (
					<li key={cartItem.product.id}>
						<div>
							<strong>{cartItem.product.title}</strong> - $
							{cartItem.product.price} ({cartItem.quantity})
						</div>
						<button onClick={() => removeProductFromCart(cartItem.product.id)}>
							Remove from Cart
						</button>
						<button onClick={() => deleteProductFromCart(cartItem.product.id)}>
							Delete from Cart
						</button>
					</li>
				))}
			</ul>
			<div>Shopping Cart Summary</div>
			{/* <div>Sub Total: ${cartTotals.subTotal}</div>
			<div>Tax: ${cartTotals.subTotal}</div>
			<div>Discounts: ${cartTotals.discounts}</div>
			<div>Total: ${cartTotals.total}</div> */}
		</React.Fragment>
	)
}

export default CartPage
