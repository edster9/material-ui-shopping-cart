import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../context/app-context'
//import MainNavigation from '../components/MainNavigation'

const CheckoutPage = (props: any) => {
	const context = useContext(AppContext)

	useEffect(() => {
		console.log('CartPage::useEffect - context', context)
	}, [])

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
