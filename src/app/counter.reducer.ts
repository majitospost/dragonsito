import { IProducto } from './products';

import * as $params from './counter.actions';
 
//export const initialState = 0;

export interface IAppState {
    productos: IProducto[];
}

export const INITIAL_STATE: IAppState = {
    productos: []
}

export function Reducer(state = INITIAL_STATE, action: $params.ActionsUnion) {
  switch (action.type) {
    case $params.ActionTypes.ADD_PRODUCT:
    action.product.id = state.productos.length + 1;
    return Object.assign({}, state, {
        productos: state.productos.concat(Object.assign({}, action.product))
    })

    case $params.ActionTypes.DELETE_ONE_PRODUCT:
    return Object.assign({}, state, {
        productos: state.productos.filter(t => t.id !== action.product.id)
    })

    case $params.ActionTypes.DELETE_ALL_PRODUCTS:
    return Object.assign({}, state, {
        productos: []
    })
 
    default:
      return state;
  }
}