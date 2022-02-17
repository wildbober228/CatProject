import {Dispatch} from "redux";
import {FavoriteAction, FavoriteActionType} from "../../types/favorite";

export const addFavoriteCat = (idCat: string) => {
    return (dispath: Dispatch<FavoriteAction>) => {
        try{
            dispath({
                type: FavoriteActionType.ADD_FAVORITE,
                payload: idCat
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteFavoriteCat = (idCat: string) => {
    return (dispath: Dispatch<FavoriteAction>) => {
        try{
            dispath({
                type: FavoriteActionType.DELETE_FAVORITE,
                payload: idCat
            })
        } catch (e) {
            console.log(e)
        }
    }
}
