import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../context/app-context'

/**
 * Final checkout page
 *
 * @param {*} props
 * @returns CheckoutPage component
 */
const CheckoutPage = (props: any) => {
	const context = useContext(AppContext)

	return (
		<React.Fragment>
			<div>
				<Link to="">Products</Link>
				<Link to="cart">Cart</Link>
			</div>

			<div>Checkout Cart</div>
		</React.Fragment>
	)
}

export default CheckoutPage
