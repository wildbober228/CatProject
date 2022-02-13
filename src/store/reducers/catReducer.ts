import {CatAction, CatActionType, CatState} from "../../types/cat";

const initialState: CatState = {
    cats: [],
    loading: false,
    error: null
}

export const catReducer = (state = initialState, action: CatAction) : CatState => {
    switch (action.type) {
        case CatActionType.FETCH_CATS:
            return {loading:false, error: null, cats: []}
        case CatActionType.FETCH_CATS_PAGINATION:
            return {loading:false, error: null, cats: []}
        case CatActionType.FETCH_CATS_SUCCESS:
            return {loading:true, error: null, cats: action.payload}
        case CatActionType.FETCH_CATS_ERROR:
            return {loading:false, error: action.payload, cats: []}
        case CatActionType.RESET_LOADING:
            return {loading:false, error: null, cats: []}
        default:
            return  state;
    }
}
