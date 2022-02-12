export enum ActionType {
  AddProduct,
  SearchProduct,
  ResetList,
  ClearFilter,
  ToggleShoppingCart,
  HideMessage,
  DecreaseItem,
  IncreaseItem,
  RemoveItem
}

export interface SearchProduct {
  type: ActionType.SearchProduct;
  payload: string;
}

export interface AddProduct {
  type: ActionType.AddProduct;
  payload: ShoppingType;
}

export interface ResetList {
  type: ActionType.ResetList;
}

export interface ClearFilter {
  type: ActionType.ClearFilter;
}

export interface DecreaseItem {
  type: ActionType.DecreaseItem;
  payload: ShoppingType;
}

export interface IncreaseItem {
  type: ActionType.IncreaseItem;
  payload: ShoppingType;
}

export interface RemoveItem {
  type: ActionType.RemoveItem;
  payload: ShoppingType;
}

export interface ToggleShoppingCart {
  type: ActionType.ToggleShoppingCart;
}

export interface HideMessage {
  type: ActionType.HideMessage;
}

export type Actions =  SearchProduct | AddProduct | ResetList | RemoveItem | DecreaseItem | IncreaseItem | ClearFilter | HideMessage| ToggleShoppingCart;