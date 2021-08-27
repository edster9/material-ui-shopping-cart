import React from 'react'
import { StoreItem, CartItem, StoreActions } from '../context/store-reducer'

export interface AppContext {
	products: Array<StoreItem>
	cart: Array<CartItem>
	storeDispatcher: React.Dispatch<StoreActions>
}

/*
products: [
    { id: 'p1', title: 'Apple', price: 0.60, special: '' },
    { id: 'p2', title: 'Orange', price: 0.25, special: '' }
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
  emptyCart: () => {},
  checkoutCart: () => {}
  */

// const StoreContext = React.createContext<StoreContext | null>(null);

const appContext = React.createContext<AppContext | null>(null)

export default appContext
