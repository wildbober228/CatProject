export interface FavoriteState {
    favoritesId: any[];
}

export enum FavoriteActionType {
    ADD_FAVORITE = 'ADD_FAVORITE',
    DELETE_FAVORITE = 'DELETE_FAVORITE',
    START_ADD_FAVORITE = 'START_ADD_FAVORITE',
    START_DELETE_FAVORITE = 'START_DELETE_FAVORITE'
}

interface StartAddFavorite{
    type: FavoriteActionType.START_ADD_FAVORITE
}

interface StartDeleteFavorite{
    type: FavoriteActionType.START_DELETE_FAVORITE
}

interface AddFavorite{
    type: FavoriteActionType.ADD_FAVORITE,
    payload: string;
}

interface DeleteFavorite{
    type: FavoriteActionType.DELETE_FAVORITE,
    payload: string;
}

export type FavoriteAction = AddFavorite | DeleteFavorite | StartAddFavorite | StartDeleteFavorite;
