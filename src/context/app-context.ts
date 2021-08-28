import React from 'react'
import { ProductItem, CartActions, CartState } from './cart-reducer'

export interface AppContext {
	products: Array<ProductItem>
	cart: CartState
	cartDispatcher: React.Dispatch<CartActions>
}

const appContext = React.createContext<AppContext | null>(null)

export default appContext
