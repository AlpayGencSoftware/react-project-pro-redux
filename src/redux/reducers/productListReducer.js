import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function productListReducer(state=initialState.products, actions){
    switch (actions.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return actions.payload; 
        default:
            return state;
    } 
}