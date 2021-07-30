import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function saveProductReducer(state=initialState.savedProduct, actions){
    switch (actions.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return actions.payload; 
        case actionTypes.CREATE_PRODUCT_SUCCESS:
             return actions.payload;     
        default:
            return state;
    } 
}