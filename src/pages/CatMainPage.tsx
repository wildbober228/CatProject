import React from 'react';
import CatList from "../components/CatList/CatList";
import {withRouter} from "react-router";
import {useDispatch} from "react-redux";
import {fetchCat, fetchCats} from "../components/epics/catEpic";
import CatListDynamicPagination from "../components/CatList/CatListDynamicPagination";
import {addFavoriteCat} from "../components/epics/favoriteEpic";

const CatMainPage = () => {

    return (
        <div>
            <CatList/>
            {/*<CatListDynamicPagination/>*/}
        </div>
    );
};

export default withRouter(CatMainPage);
