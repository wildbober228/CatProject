import React, {FC, useState} from 'react';
import {ICat} from "../types/types";
import CatCard, {CardVariant} from "./CatCard";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import {CatActionType} from "../types/cat";
import {useDispatch} from "react-redux";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import ModalForm from "./ModalFormComponent/ModalForm";
import CatCharacteristics from "./CatCharacteristics";
import {FormattedMessage} from "react-intl";
import CatImage from "./Image/CatImage";
import {addFavoriteCat, deleteFavoriteCat} from "../epics/favoriteEpic";

const Cat: FC<ICat> = ({
           id = '0',
           name = '',
           image ,
           adaptability,
           affection_level,
           grooming,
           experimental,
           energy_level,
           dog_friendly,
           child_friendly,
           hairless

}) => {
    const dispatch = useDispatch()
    //const {addFavoriteCat, deleteFavoriteCat} = useActions() //addFavoriteCat
    const store = require('store')

    const [showCharacteristic, setShowCharacteristic] = useState(false)

    const ChangeLoadingHandler = () => {
            dispatch({
                type:CatActionType.RESET_LOADING
            })
    }

    const addToFavorite = () => {

        if(!store.get('favoriteCats').includes(id)) {
            console.log("dad")
            dispatch(addFavoriteCat(id))
            store.set('favoriteCats', [...store.get('favoriteCats'), id])
            //addFavoriteCat(id);

        }
        else {
            dispatch(deleteFavoriteCat(id));
            const newCatFavArray = store.get('favoriteCats').filter((favorite: string) => favorite !== id)
            store.clearAll();
            store.set('favoriteCats', newCatFavArray);
        }
    }


    return (
            <CatCard variant={CardVariant.primary} width='500px' height='200px'>
                <div style={{textAlign:"center"}}>
                   <div>{name}</div>
                        <CatImage image={image}/>
                </div>
                <div style={{float: "left", display:"inline-block", marginLeft: "40%"}}>
                    <Button onClick={addToFavorite}>★</Button>
                    <Button size="sm" color="info" onClick={ChangeLoadingHandler} tag={Link} to={"/info/"+ id}>
                        <FormattedMessage id = 'show_more'/>
                    </Button>
                    <Button onClick = {() => setShowCharacteristic(true)}>
                        I
                    </Button>
                    <ModalForm visible={showCharacteristic} setVisible={setShowCharacteristic}>
                       <CatCharacteristics
                           catName={name}
                           adaptability={adaptability}
                           hairless={hairless}
                           grooming={grooming}
                           experimental={experimental}
                           energy_level={energy_level}
                           dog_friendly={dog_friendly}
                           child_friendly={child_friendly}
                           affection_level={affection_level}
                       />
                    </ModalForm>
                </div>
            </CatCard>
    );
};

export default Cat;
