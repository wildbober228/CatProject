import {CatAction, CatActionType} from "../../types/cat";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchCats = () => {
    return async (dispatch : Dispatch<CatAction>) => {
        try {
            dispatch({type: CatActionType.FETCH_CATS})
            const response = await axios.get('https://api.thecatapi.com/v1/breeds')
            setTimeout(() => {
                dispatch({
                    type:CatActionType.FETCH_CATS_SUCCESS,
                    payload: response.data
                })
            },500)
        } catch (e) {
            dispatch({
                type: CatActionType.FETCH_CATS_ERROR,
                payload: 'Error from loading cats'
            })
        }
    }
}

interface IfetchCatsDynamicPagination {
    currentPage: number;
    setFetching: (value: boolean) => void;
    setCurrentPage: (value: number) => void;
}

export const fetchCatsDynamicPagination= ({currentPage, setFetching, setCurrentPage}:IfetchCatsDynamicPagination ) => {
    return async (dispatch : Dispatch<CatAction>) => {
        try {

            dispatch({type: CatActionType.FETCH_CATS_PAGINATION})
            await axios.get('https://api.thecatapi.com/v1/images/search?limit=20&page='+ currentPage +'&order=DESC')
                .then( response => {
                        setCurrentPage(currentPage + 1);
                        setTimeout(() => {
                            dispatch({
                                type: CatActionType.FETCH_CATS_SUCCESS,
                                payload: response.data
                            })
                        }, 500)
                    }
                ).finally(() => setFetching(false));

        } catch (e) {
            dispatch({
                type: CatActionType.FETCH_CATS_ERROR,
                payload: 'Error from loading cats'
            })
        }
    }
}

export const fetchCat = (id: string | undefined) => {
    return async (dispatch : Dispatch<CatAction>) => {
        try {
            dispatch({type: CatActionType.FETCH_CATS})
            const response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_id='+id)
            setTimeout(() => {
                dispatch({
                    type:CatActionType.FETCH_CATS_SUCCESS,
                    payload: response.data
                })
            },500)
        } catch (e) {
            dispatch({
                type: CatActionType.FETCH_CATS_ERROR,
                payload: 'Error from loading cat'
            })
        }
    }
}
