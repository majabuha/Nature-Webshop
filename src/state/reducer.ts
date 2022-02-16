import { IState, initialState } from './state';
import {
  AddProduct,
  SearchProduct,
  ClearFilter,
  ResetList,
  ActionType,
  ToggleShoppingCart,
  RemoveItem,
  HideMessage,
  IncreaseItem,
  DecreaseItem,
  Actions
} from './actions';

export function reducer(state: IState, action: Actions): IState {
  switch (action.type) {

    case ActionType.SearchProduct:

      const searchData = state.overview.filter(item =>
        item.description.toLowerCase().includes(action.payload.toLowerCase()))
      return { ...state, overview: [...searchData] }

    case ActionType.ClearFilter:

      return { ...state, overview: initialState.overview };

    case ActionType.AddProduct:

      const updatedProducts = [...state.products]
      const productIndex = updatedProducts.findIndex(product =>
        product.id === action.payload.id)

      if (productIndex === -1) {
        const newProduct = action.payload
        newProduct.amount = 1
        updatedProducts.push(newProduct)
        let newPt = JSON.stringify(updatedProducts)
        localStorage.setItem("cart", newPt)

        return {
          ...state,
          products: updatedProducts,
          lastAddedItem: action.payload,
          showAddedItem: true
        };
      }
      else {
        updatedProducts[productIndex] = {
          ...updatedProducts[productIndex],
          amount: updatedProducts[productIndex].amount + 1
        };
        let productIx = JSON.stringify(updatedProducts[productIndex])
        localStorage.setItem("cart", productIx)

        return {
          ...state,
          products: [...updatedProducts],
          lastAddedItem: action.payload,
          showAddedItem: true
        }
      }

    case ActionType.IncreaseItem:

      const copiedProducts = [...state.products]
      const findIndex = copiedProducts.findIndex(product => product.id === action.payload.id)
      copiedProducts[findIndex] = {
        ...copiedProducts[findIndex],
        amount: copiedProducts[findIndex].amount + 1,
        lager: copiedProducts[findIndex].lager - 1
      };
      let increaseCart = JSON.stringify( copiedProducts)
      localStorage.setItem("cart", increaseCart)

      return { ...state, products: [...copiedProducts] }

    case ActionType.DecreaseItem:

      const copyProducts = [...state.products]
      const findTheIndex = copyProducts.findIndex(product => product.id === action.payload.id)
      
      if (copyProducts[findTheIndex].amount > 1) {
        copyProducts[findTheIndex] = {
          ...copyProducts[findTheIndex],
          amount: copyProducts[findTheIndex].amount - 1,
          lager: copyProducts[findTheIndex].lager + 1
        };
        let decreaseCart = JSON.stringify(copyProducts)
        localStorage.setItem("cart", decreaseCart)

        return { ...state, products: [...copyProducts] }

      } else {
        return state
      }

    case ActionType.RemoveItem:
      
      const remainingProducts = state.products.filter(item => item.name !== action.payload.name)
      let removeItemCart = JSON.stringify(remainingProducts)
      localStorage.setItem("cart", removeItemCart)

      
      return {
        ...state, products: [...remainingProducts],
        lastRemovedItem: action.payload,
        showRemovedItem: true
      };

    case ActionType.ResetList:

      localStorage.removeItem('cart')
      return { ...state, products: [] };

    case ActionType.HideMessage:

      return {
        ...state, showAddedItem: false,
        showRemovedItem: false
      };

    case ActionType.ToggleShoppingCart:

      return {
        ...state,
        showShoppingCart: !state.showShoppingCart
      };

    default:

      return state;

  }
}

export const searchProduct = (input: string): SearchProduct => ({
  type: ActionType.SearchProduct,
  payload: input,
});

export const addProduct = (product: ShoppingType): AddProduct => ({
  type: ActionType.AddProduct,
  payload: product,
});

export const removeItem = (product: ShoppingType): RemoveItem => ({
  type: ActionType.RemoveItem,
  payload: product,
});

export const decreaseItem = (product: ShoppingType): DecreaseItem => ({
  type: ActionType.DecreaseItem,
  payload: product,
});

export const increaseItem = (product: ShoppingType): IncreaseItem => ({
  type: ActionType.IncreaseItem,
  payload: product,
});

export const resetList = (): ResetList => ({
  type: ActionType.ResetList
})

export const clearFilter = (): ClearFilter => ({
  type: ActionType.ClearFilter
})

export const hideMessage = (): HideMessage => ({
  type: ActionType.HideMessage
})

export const toggleShoppingCart = (): ToggleShoppingCart => ({
  type: ActionType.ToggleShoppingCart
})

