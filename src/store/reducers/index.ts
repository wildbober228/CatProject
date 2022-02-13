import {combineReducers} from "redux";
import {catReducer} from "./catReducer";
import {favoritesReducer} from "./favoritesReducer";


export const rootReducer = combineReducers({
    cat: catReducer,
    favorite: favoritesReducer
})

export type RootState = ReturnType<typeof rootReducer>
