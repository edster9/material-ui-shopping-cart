export enum CART_ACTION {
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	DELETE_PRODUCT_FROM_CART,
	EMPTY_CART,
	CHECKOUT_CART,
}

export enum PRODUCT_SPECIAL {
	NONE,
	TWO_FOR_ONE,
	THREE_FOR_TWO,
}

export interface ProductItem {
	id: string
	title: string
	price: number
	special: PRODUCT_SPECIAL
}

export interface CartItem {
	product: ProductItem
	quantity: number
}

export interface CartTotals {
	subTotal: number
	tax: number
	discounts: number
	total: number
}
export interface CartState {
	items: Array<CartItem>
	totals: CartTotals
}

export type CartActions =
	| { type: CART_ACTION.ADD_PRODUCT_TO_CART; payload: ProductItem }
	| { type: CART_ACTION.REMOVE_PRODUCT_FROM_CART; payload: string }
	| { type: CART_ACTION.DELETE_PRODUCT_FROM_CART; payload: string }
	| { type: CART_ACTION.EMPTY_CART; payload: undefined }
	| { type: CART_ACTION.CHECKOUT_CART; payload: CartTotals }

const addProductToCart = (
	product: ProductItem,
	state: CartState
): CartState => {
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
		items: updatedCart.items,
		totals: calculateCartTotals(updatedCart.items),
	}
}

const removeProductFromCart = (
	productId: string,
	state: CartState
): CartState => {
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
		items: updatedCart.items,
		totals: calculateCartTotals(updatedCart.items),
	}
}

const deleteProductFromCart = (
	productId: string,
	state: CartState
): CartState => {
	const updatedCart = { ...state }
	const updatedItemIndex = updatedCart.items.findIndex(
		(item) => item.product.id === productId
	)

	updatedCart.items.splice(updatedItemIndex, 1)

	return {
		...state,
		items: updatedCart.items,
		totals: calculateCartTotals(updatedCart.items),
	}
}

const emptyCart = (): CartState => {
	return {
		items: [],
		totals: {
			subTotal: 0,
			tax: 0,
			discounts: 0,
			total: 0,
		},
	}
}

const checkoutCart = (totals: CartTotals): CartState => {
	return {
		items: [],
		totals: {
			subTotal: 0,
			tax: 0,
			discounts: 0,
			total: 0,
		},
	}
}

const calculateCartTotals = (cart: CartItem[]) => {
	const totals: CartTotals = {
		subTotal: 0,
		tax: 0,
		discounts: 0,
		total: 0,
	}

	for (const cartItem of cart) {
		totals.subTotal += (cartItem.product.price * cartItem.quantity * 100) / 100

		if (cartItem.product.special === PRODUCT_SPECIAL.TWO_FOR_ONE) {
			const twoPacks = Math.floor(cartItem.quantity / 2)
			totals.discounts += twoPacks * cartItem.product.price
		} else if (cartItem.product.special === PRODUCT_SPECIAL.THREE_FOR_TWO) {
			const threePacks = Math.floor(cartItem.quantity / 3)
			totals.discounts += threePacks * cartItem.product.price
		}
	}

	totals.tax =
		Math.round((totals.subTotal - totals.discounts) * 0.0825 * 100) / 100
	totals.total =
		Math.round((totals.subTotal - totals.discounts + totals.tax) * 100) / 100

	return totals
}

const cartReducer = (state: CartState, action: CartActions) => {
	console.log('cartReducer - action', action)

	switch (action.type) {
		case CART_ACTION.ADD_PRODUCT_TO_CART:
			return addProductToCart(action.payload, state)
		case CART_ACTION.REMOVE_PRODUCT_FROM_CART:
			return removeProductFromCart(action.payload, state)
		case CART_ACTION.DELETE_PRODUCT_FROM_CART:
			return deleteProductFromCart(action.payload, state)
		case CART_ACTION.EMPTY_CART:
			return emptyCart()
		case CART_ACTION.CHECKOUT_CART:
			return checkoutCart(action.payload)
		default:
			return state
	}
}

export default cartReducer
