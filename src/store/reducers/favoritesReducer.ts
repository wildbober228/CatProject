import {FavoriteAction, FavoriteActionType, FavoriteState} from "../../types/favorite";

const initialState: FavoriteState = {
    favoritesId: []
}

export const favoritesReducer = (state = initialState, action : FavoriteAction): FavoriteState => {
    switch (action.type) {
        case FavoriteActionType.START_ADD_FAVORITE:
            return state
        case FavoriteActionType.ADD_FAVORITE:
            return {...state, favoritesId : [...state.favoritesId , action.payload]}
        case FavoriteActionType.DELETE_FAVORITE:
             const newState = state.favoritesId.filter(favorite => favorite !== action.payload)
             return {favoritesId: newState}
        default:
            return  state;
    }
}
