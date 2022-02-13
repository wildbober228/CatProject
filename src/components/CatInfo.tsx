import React, {FC} from 'react';
import {ICatInfo} from "../types/types";
import CatCard, {CardVariant} from "./CatCard";
import "./CatList/CatList.css"
import NavBar from "../pages/NavBar";

const CatInfo: FC<ICatInfo> = ({id = 0, breeds,url }) => {

    return (
        <CatCard  variant={CardVariant.primary} width='100%' height='100%'>
            <NavBar/>
            <div style={{textAlign:"left"}}>
                <img src={url} alt="" width={100} height={100}/>
            </div>
            <div style={{textAlign:"center"}}>{breeds.name}</div>

            <div className ='parent' style={{textAlign:"right"}}>
                <div>Description: {breeds.description}</div>
                <div>Origin: {breeds.origin}</div>
                <div>Temperament: {breeds.temperament}</div>
                <div>
                    Weight: <div style={{color:'gray'}}>{breeds.weight.metric}</div>
                </div>
            </div>
        </CatCard>
    );
};

export default CatInfo;
