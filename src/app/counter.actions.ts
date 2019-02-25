import { Action } from '@ngrx/store';
import { IProducto } from './products';
     
export enum ActionTypes {
  ADD_PRODUCT = '[Counter Component] ADD_PRODUCT',
  DELETE_ONE_PRODUCT = '[Counter Component] DELETE_ONE_PRODUCT',
  DELETE_ALL_PRODUCTS = '[Counter Component] DELETE_ALL_PRODUCTS',
}
 
export class Add implements Action {
  constructor(public product: IProducto){}
  readonly type = ActionTypes.ADD_PRODUCT;
}
 
export class Delete_One implements Action {
  constructor(public product: IProducto){}
  readonly type = ActionTypes.DELETE_ONE_PRODUCT;
}
 
export class Delete_all implements Action {
  readonly type = ActionTypes.DELETE_ALL_PRODUCTS;
}

export type ActionsUnion = Add | Delete_One | Delete_all  ;