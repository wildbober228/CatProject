import {combineEpics} from "redux-observable";
import {fetchCatEpic, fetchCatsDynamicPaginationEpic, fetchCatsEpic} from "./catEpic";
import {addFavoriteCatEpic} from "./favoriteEpic";

export const rootEpics = combineEpics(
    fetchCatsEpic,
    fetchCatEpic,
    fetchCatsDynamicPaginationEpic,
    addFavoriteCatEpic
)
