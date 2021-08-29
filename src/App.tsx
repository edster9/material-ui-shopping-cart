import React, { useReducer } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import AppContext from './context/app-context'
import cartReducer, {
	PRODUCT_SPECIAL,
	ProductItem,
} from './context/cart-reducer'

/**
 * Products catalog. This is currently a static array
 * but will be loaded from an API call and stored in to
 * the application context state
 */
const products: Array<ProductItem> = [
	{
		id: 'p1',
		title: 'Apple',
		price: 0.6,
		description:
			'An apple a day keeps the doctor away. Buy one, get one free special.',
		special: PRODUCT_SPECIAL.TWO_FOR_ONE,
	},
	{
		id: 'p2',
		title: 'Orange',
		price: 0.25,
		description: 'Fresh Florida oranges. 3 for the price of 2 special',
		special: PRODUCT_SPECIAL.THREE_FOR_TWO,
	},
]

/**
 * Main Application component with context and route handling
 *
 * @returns App
 */
function App() {
	// Initialize the shopping cart reducer and default empty cart
	const [cartState, cartDispatcher] = useReducer(cartReducer, {
		items: [],
		totals: {
			subTotal: 0,
			tax: 0,
			discounts: 0,
			total: 0,
		},
		totalItemCount: 0,
	})

	return (
		<AppContext.Provider value={{ products, cart: cartState, cartDispatcher }}>
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
