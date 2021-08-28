import React from 'react'
import { StoreItem, StoreActions, StoreState } from '../context/store-reducer'

export interface AppContext {
	products: Array<StoreItem>
	cart: StoreState
	storeDispatcher: React.Dispatch<StoreActions>
}

const appContext = React.createContext<AppContext | null>(null)

export default appContext
