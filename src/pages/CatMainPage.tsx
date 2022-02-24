import React from 'react';
import CatList from "../components/CatList/CatList";
import {withRouter} from "react-router";
import {useDispatch} from "react-redux";
import {fetchCat, fetchCats} from "../epics/catEpic";
import CatListDynamicPagination from "../components/CatList/CatListDynamicPagination";
import {addFavoriteCat} from "../epics/favoriteEpic";
import "../components/CatList/CatList.css"
const CatMainPage = () => {

    return (
        // <div className="flexbox-container">
        //     <div className="flexbox-item flexbox-item-up">
        //         test
        //     </div>
        //     <div className="flexbox-item flexbox-item-center">
        //         test
        //     </div>
        //
        //     {/*<CatListDynamicPagination/>*/}
        // </div>
        <CatList/>
    );
};

export default withRouter(CatMainPage);
