export enum StoreAction {
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
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

export interface StoreState {
	cart: Array<CartItem>
}

export type StoreActions =
	| { type: typeof StoreAction.ADD_PRODUCT_TO_CART; payload: StoreItem }
	| { type: typeof StoreAction.REMOVE_PRODUCT_FROM_CART; payload: string }

/*
const addProductToCart = (product: StoreItem, state: any) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };

    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId: string, state: any) => {
  console.log('Removing product with id: ' + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };

  updatedItem.quantity--;

  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};
*/

const storeReducer = (state: StoreState, action: StoreActions) => {
	console.log('storeReducer - action', action)

	switch (action.type) {
		case StoreAction.ADD_PRODUCT_TO_CART:
			// return addProductToCart(action.product, state);
			return state
		case StoreAction.REMOVE_PRODUCT_FROM_CART:
			// return removeProductFromCart(action.productId, state);
			return state
		default:
			return state
	}
}

export default storeReducer
