export interface CatState {
    cats: any[];
    loading: boolean;
    error: null |string;
}

export enum CatActionType {
    FETCH_CATS = 'FETCH_CATS',
    FETCH_CATS_PAGINATION = 'FETCH_CATS_PAGINATION',
    FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS',
    FETCH_CATS_ERROR = 'FETCH_CATS_ERROR',
    RESET_LOADING = 'RESET_LOADING'
}

interface FetchCatAction{
    type: CatActionType.FETCH_CATS;
}

interface FetchCatActionPagination{
    type: CatActionType.FETCH_CATS_PAGINATION;
}

interface FetchCatSuccessAction{
    type: CatActionType.FETCH_CATS_SUCCESS;
    payload: any[];
}

interface FetchCatErrorAction{
    type: CatActionType.FETCH_CATS_ERROR;
    payload: string;
}

interface RESET_LOADING{
    type: CatActionType.RESET_LOADING;
}

export type CatAction = FetchCatAction| FetchCatActionPagination | FetchCatSuccessAction | FetchCatErrorAction | RESET_LOADING;
