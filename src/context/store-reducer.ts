export enum StoreAction {
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	DELETE_PRODUCT_FROM_CART,
	EMPTY_CART,
	CHECKOUT_CART,
}

export enum StoreSpecial {
	NONE,
	TWO_FOR_ONE,
	THREE_FOR_TWO,
}

export interface StoreItem {
	id: string
	title: string
	price: number
	special: StoreSpecial
}

export interface CartItem {
	product: StoreItem
	quantity: number
}

export interface CartTotals {
	subTotal: number
	tax: number
	discounts: number
	total: number
}
export interface StoreState {
	items: Array<CartItem>
	totals: CartTotals
}

export type StoreActions =
	| { type: typeof StoreAction.ADD_PRODUCT_TO_CART; payload: StoreItem }
	| { type: typeof StoreAction.REMOVE_PRODUCT_FROM_CART; payload: string }
	| { type: typeof StoreAction.DELETE_PRODUCT_FROM_CART; payload: string }

const addProductToCart = (product: StoreItem, state: StoreState) => {
	const updatedCart = { ...state }
	const updatedItemIndex = updatedCart.items.findIndex(
		(item) => item.product.id === product.id
	)

	if (updatedItemIndex < 0) {
		const newProduct = { ...product }
		updatedCart.items.push({ product: newProduct, quantity: 1 })
	} else {
		const updatedItem = {
			...updatedCart.items[updatedItemIndex],
		}

		updatedItem.quantity++
		updatedCart.items[updatedItemIndex] = updatedItem
	}

	return {
		...state,
		cart: updatedCart,
		cartTotals: calculateCartTotals(updatedCart.items),
	}
}

const removeProductFromCart = (productId: string, state: StoreState) => {
	const updatedCart = { ...state }
	const updatedItemIndex = updatedCart.items.findIndex(
		(item) => item.product.id === productId
	)

	const updatedItem = {
		...updatedCart.items[updatedItemIndex],
	}

	updatedItem.quantity--

	if (updatedItem.quantity <= 0) {
		updatedCart.items.splice(updatedItemIndex, 1)
	} else {
		updatedCart.items[updatedItemIndex] = updatedItem
	}

	return {
		...state,
		cart: updatedCart,
		cartTotals: calculateCartTotals(updatedCart.items),
	}
}

const deleteProductFromCart = (productId: string, state: StoreState) => {
	const updatedCart = { ...state }
	const updatedItemIndex = updatedCart.items.findIndex(
		(item) => item.product.id === productId
	)

	updatedCart.items.splice(updatedItemIndex, 1)

	return {
		...state,
		cart: updatedCart,
		cartTotals: calculateCartTotals(updatedCart.items),
	}
}

const calculateCartTotals = (cart: CartItem[]) => {
	return {
		subTotal: 0,
		tax: 0,
		discounts: 0,
		total: 0,
	}
}

const storeReducer = (state: StoreState, action: StoreActions) => {
	console.log('storeReducer - action', action)

	switch (action.type) {
		case StoreAction.ADD_PRODUCT_TO_CART:
			return addProductToCart(action.payload, state)
		case StoreAction.REMOVE_PRODUCT_FROM_CART:
			return removeProductFromCart(action.payload, state)
		case StoreAction.DELETE_PRODUCT_FROM_CART:
			return deleteProductFromCart(action.payload, state)
		default:
			return state
	}
}

export default storeReducer
