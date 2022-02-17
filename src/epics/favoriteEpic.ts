import {AnyAction} from "redux";
import {ofType} from "redux-observable";
import {map} from 'rxjs/operators'
import {FavoriteActionType} from "../types/favorite";

export const addFavoriteCat = (id : string | undefined) => ({
    type: FavoriteActionType.START_ADD_FAVORITE,
    id
})

export const addFavoriteCatComplete = (payload : string | undefined) => ({
    type: FavoriteActionType.ADD_FAVORITE,
    payload
})

export const addFavoriteCatEpic = (action$: any) => action$.pipe(
    ofType(FavoriteActionType.START_ADD_FAVORITE),
    map((action: AnyAction) => deleteFavoriteCatComplete(action.id))
);


export const deleteFavoriteCat = (id : string | undefined) => ({
    type: FavoriteActionType.START_DELETE_FAVORITE,
    id
})

export const deleteFavoriteCatComplete = (payload : string | undefined) => ({
    type: FavoriteActionType.DELETE_FAVORITE,
    payload
})

export const deleteFavoriteCatEpic = (action$: any) => action$.pipe(
    ofType(FavoriteActionType.START_DELETE_FAVORITE),
    map((action: AnyAction) => deleteFavoriteCatComplete(action.id))
);
