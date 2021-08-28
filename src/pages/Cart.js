import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../context/app-context'
import { CART_ACTION, CartTotals } from '../context/cart-reducer'

/**
 * Shopping cart page
 *
 * @param {*} props
 * @returns CartPage component
 */
const CartPage = (props: any) => {
	const context = useContext(AppContext)
	const { cartDispatcher } = context
	const { totals: cartTotals } = context.cart

	/**
	 * Cart dispatcher for removing a product to the shopping cart
	 *
	 * @param {string} productId
	 */
	const removeProductFromCart = (productId: string) => {
		cartDispatcher({
			type: CART_ACTION.REMOVE_PRODUCT_FROM_CART,
			payload: productId,
		})
	}

	/**
	 * Cart dispatcher for deleting a product to the shopping cart
	 *
	 * @param {string} productId
	 */
	const deleteProductFromCart = (productId: string) => {
		cartDispatcher({
			type: CART_ACTION.DELETE_PRODUCT_FROM_CART,
			payload: productId,
		})
	}

	/**
	 * Cart dispatcher for emptying the shopping cart
	 *
	 */
	const emptyCart = () => {
		cartDispatcher({
			type: CART_ACTION.EMPTY_CART,
		})
	}

	/**
	 * Cart dispatcher for checking out the shopping cart
	 *
	 * @param {CartTotals} totals
	 */
	const checkoutCart = (totals: CartTotals) => {
		cartDispatcher({
			type: CART_ACTION.CHECKOUT_CART,
			payload: totals,
		})
	}

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
							<strong>{cartItem.product.title}</strong> - $&nbsp;
							{cartItem.product.price.toFixed(2)} ({cartItem.quantity})
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
			<div>
				<button onClick={() => emptyCart()}>Empty Cart</button>
			</div>
			<div>
				<button onClick={() => checkoutCart(cartTotals)}>Checkout Cart</button>
			</div>
			<div>Shopping Cart Summary</div>
			<div>Sub Total: $ {cartTotals.subTotal.toFixed(2)}</div>
			<div>Tax: $ {cartTotals.tax.toFixed(2)}</div>
			<div>Discounts: $ {cartTotals.discounts.toFixed(2)}</div>
			<div>Total: $ {cartTotals.total.toFixed(2)}</div>
		</React.Fragment>
	)
}

export default CartPage
