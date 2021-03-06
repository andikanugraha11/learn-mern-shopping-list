import {GET_ITEM, ADD_ITEM, DELETE_ITEM} from '../actions/types';
import uuid from 'uuid';

const initialState = {
    items : [
        {id: uuid(), name: 'Eggs'},
        {id: uuid(), name: 'Sugar'},
        {id: uuid(), name: 'Milk'},
        {id: uuid(), name: 'Salt'},
    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEM:
            return{
                ...state
            };
        case DELETE_ITEM:
            return{
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}