import React, { useReducer, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import ProductsPage from './pages/Products'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'
import AppContext from './context/app-context'
import storeReducer, { StoreItem, StoreSpecial } from './context/store-reducer'

const products: Array<StoreItem> = [
	{ id: 'p1', title: 'Apple', price: 0.6, special: StoreSpecial.TWO_FOR_ONE },
	{
		id: 'p2',
		title: 'Orange',
		price: 0.25,
		special: StoreSpecial.THREE_FOR_TWO,
	},
]

function App() {
	const [storeState, storeDispatcher] = useReducer(storeReducer, {
		items: [],
		totals: {
			subTotal: 0,
			tax: 0,
			discounts: 0,
			total: 0,
		},
	})

	useEffect(() => {
		console.log('App - started')
	}, [])

	return (
		<AppContext.Provider
			value={{ products, cart: storeState, storeDispatcher }}
		>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={ProductsPage} exact />
					<Route path="/cart" component={CartPage} exact />
					<Route path="/checkout" component={CheckoutPage} exact />
				</Switch>
			</BrowserRouter>
		</AppContext.Provider>
	)
}

export default App
