import React from 'react';
import CatList from "../components/CatList/CatList";
import {withRouter} from "react-router";

const CatMainPage = () => {

    return (
        <div>
            <CatList/>
        </div>
    );
};

export default withRouter(CatMainPage);
