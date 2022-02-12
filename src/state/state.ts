export interface IState {
  overview: ProductType[];
  products: ShoppingType[];
  showShoppingCart: boolean;
  lastAddedItem: ShoppingType;
  lastRemovedItem: ShoppingType;
  showAddedItem: boolean;
  showRemovedItem: boolean;
}

let productData = require('../data.json');

export const initialState: IState = {
  overview: productData,
  products: [],
  showShoppingCart: false,
  lastAddedItem: {
    id: 0,
    name: "",
    price: 0,
    imageUrl: "",
    amount: 0,
    totalPrice: 0,
    lager: 0
  },
  lastRemovedItem: {
    id: 0,
    name: "",
    price: 0,
    imageUrl: "",
    amount: 0,
    totalPrice: 0,
    lager: 0
  },
  showAddedItem: false,
  showRemovedItem: false

};

