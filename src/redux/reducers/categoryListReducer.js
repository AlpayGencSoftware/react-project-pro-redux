import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function changeCategoryReducer(state=initialState.categories, actions){
    switch (actions.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return actions.payload; 
        default:
            return state;
    }
}