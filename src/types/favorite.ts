export interface FavoriteState {
    favoritesId: any[];
}

export enum FavoriteActionType {
    ADD_FAVORITE = 'ADD_FAVORITE',
    DELETE_FAVORITE = 'DELETE_FAVORITE'
}

interface AddFavorite{
    type: FavoriteActionType.ADD_FAVORITE,
    payload: string;
}

interface DeleteFavorite{
    type: FavoriteActionType.DELETE_FAVORITE,
    payload: string;
}

export type FavoriteAction = AddFavorite | DeleteFavorite;
