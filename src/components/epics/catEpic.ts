import {AnyAction, Observable} from "redux";
import {ofType} from "redux-observable";
import {CatActionType} from "../../types/cat";
import { ajax} from 'rxjs/ajax'
import {mergeMap, map, catchError, tap} from 'rxjs/operators'
import {of} from 'rxjs'

interface IfetchCatsDynamicPagination {
    payload : {
        currentPage: number;
        setFetching: (value: boolean) => void;
        setCurrentPage: (value: number) => void;
    }
}

export const fetchCatsDynamicPagination = ({payload}: IfetchCatsDynamicPagination) => ({
    type: CatActionType.FETCH_CATS_PAGINATION,
    payload
})

export const fetchCats = () => ({
    type: CatActionType.FETCH_CATS
})

export const fetchCat = (payload : string | undefined) => ({
    type: CatActionType.FETCH_CAT,
    payload
})

export const fetchCatsSuccess = (payload: any) =>({
    type:CatActionType.FETCH_CATS_SUCCESS,
    payload
})

export const fetchCatsEpic = (action$: any) => action$.pipe(
    ofType(CatActionType.FETCH_CATS),
    mergeMap(action =>
        ajax.getJSON('https://api.thecatapi.com/v1/breeds').pipe(
            map(response => fetchCatsSuccess(response)),
            catchError(error => of({
                type: CatActionType.FETCH_CATS_ERROR,
                payload: 'Error from loading cats'
            }))
        )
    )
);

export const fetchCatsDynamicPaginationEpic = (action$: any) => action$.pipe(
    ofType(CatActionType.FETCH_CATS_PAGINATION),
    mergeMap( (action: AnyAction) =>
        ajax.getJSON('https://api.thecatapi.com/v1/images/search?limit=20&page='+ action.payload.currentPage +'&order=DESC').pipe(
            map(response => fetchCatsSuccess(response) ),
            tap(action.payload.setCurrentPage(action.payload.currentPage + 1)),
            tap(action.payload.setFetching(false)),
            catchError(error => of({
                type: CatActionType.FETCH_CATS_ERROR,
                payload: error.toString()
            }))
        )
    )
);

export const fetchCatEpic  = (action$: any) => action$.pipe(
    ofType(CatActionType.FETCH_CAT),
    mergeMap((action : AnyAction) =>
        ajax.getJSON(`https://api.thecatapi.com/v1/images/search?breed_id=${action.payload}`).pipe(
            map(response => fetchCatsSuccess(response)),
            catchError(error => of({
                type: CatActionType.FETCH_CATS_ERROR,
                payload: 'Error from loading cat'
            }))
        )
    )
);


