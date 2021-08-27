import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../context/app-context'
//import MainNavigation from '../components/MainNavigation'

const CartPage = (props: any) => {
	const context = useContext(AppContext)

	useEffect(() => {
		console.log('CartPage::useEffect - context', context)
	}, [])

	return (
		<React.Fragment>
			<div>
				<Link to="">Products</Link>
				<Link to="checkout">Checkout</Link>
			</div>

			<div>Shopping Cart</div>
			<ul>
				{context.cart.map((cartItem) => (
					<li key={cartItem.product.id}>
						<div>
							<strong>{cartItem.product.title}</strong> - $
							{cartItem.product.price} ({cartItem.quantity})
						</div>
					</li>
				))}
			</ul>
		</React.Fragment>
	)
}

export default CartPage
