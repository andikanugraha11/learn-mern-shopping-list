import {GET_ITEM, ADD_ITEM, DELETE_ITEM} from './types';

export const getItems = () => {
    return {
        type : GET_ITEM
    };
}

export const deleteItem = (id) => {
    return {
        type : DELETE_ITEM,
        payload : id
    };
}

// 20.00