import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Redirect, withRouter} from "react-router";
import CatInfo from "../components/CatInfo";
import {fetchCat, fetchCatEpic} from "../components/epics/catEpic";
import {useDispatch} from "react-redux";

const CatInfoPage = (props: any) => {
    const {cats, error, loading} = useTypedSelector(state => state.cat)
    //const {fetchCat} = useActions()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCat(props.match.params.id))
    }, [])

    if (!loading){
        return  <h1>Loading ...</h1>
    }

    if (error){
        return  <h1>{error}</h1>
    }

    if (cats.length === 0){
        return <Redirect to={"/"}/>
    }

    return (
        <div>
            {cats.map(cat =>
                <div className ='child' key = {cat.id}>
                   <CatInfo breeds={cat.breeds[0]} url={cat.url} height={cat.height} id={cat.id} width={cat.width}/>
                </div>
            )}
        </div>
    );
};

export default withRouter(CatInfoPage);
