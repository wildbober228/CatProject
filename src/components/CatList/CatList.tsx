import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
//import {fetchCats} from "../../store/action-creators/cat";
import {useActions} from "../../hooks/useActions";
import Cat from "../Cat";
import TongleFilter from "../TongleFilter"
import "./CatList.css"
import {withRouter} from "react-router";
import MultiSelect from "../MultiSelect";
import {FormattedMessage} from "react-intl";
import {List, ListRowProps} from "react-virtualized";
import MessageEmptyList from "../MessageEmptyList";
import ShowAddNewBreed from "../ShowAddNewBreed";
import {useDispatch} from "react-redux";
import {fetchCats} from "../../epics/catEpic";

const listHeight = 850;
const rowHeight = 220;
const rowWidth = 1450;


const CatList: React.FC = () => {
    const {cats, error, loading} = useTypedSelector(state => state.cat)
    // const {fetchCats} = useActions()
    const catsArray = useTypedSelector(state => state.cat)

    const [checkFilter,setCheckFilter] = useState(true)
    const [show, setShow] = useState(false)

    const [multiValue, setMultiValue] = useState([""])
    const store = require('store')
    const [fetchLoad, setFetchLoad] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCats())
    }, [])


    const renderRow = ( {index , key, style}: ListRowProps) => {
        return (
            <div key={key} style={style} className='wrapper2' >
                    <div className='box1'>
                        <Cat
                            id={cats[index].id}
                            name={cats[index].name}
                            image={cats[index].image}
                            origin={cats[index].origin}
                            adaptability={cats[index].adaptability}
                            affection_level={cats[index].affection_level}
                            child_friendly={cats[index].child_friendly}
                            dog_friendly={cats[index].dog_friendly}
                            energy_level={cats[index].energy_level}
                            experimental={cats[index].experimental}
                            grooming={cats[index].grooming}
                            hairless={cats[index].hairless}
                        />
                    </div>
                <div className='box2'>
                    <Cat
                        id={cats[index+4].id}
                        name={cats[index+4].name}
                        image={cats[index+4].image}
                        origin={cats[index+4].origin}
                        adaptability={cats[index+4].adaptability}
                        affection_level={cats[index+4].affection_level}
                        child_friendly={cats[index+4].child_friendly}
                        dog_friendly={cats[index+4].dog_friendly}
                        energy_level={cats[index+4].energy_level}
                        experimental={cats[index+4].experimental}
                        grooming={cats[index+4].grooming}
                        hairless={cats[index+4].hairless}
                    />
                </div>
                <div className='box3'>
                    <Cat
                        id={cats[index+8].id}
                        name={cats[index+8].name}
                        image={cats[index+8].image}
                        origin={cats[index+8].origin}
                        adaptability={cats[index+8].adaptability}
                        affection_level={cats[index+8].affection_level}
                        child_friendly={cats[index+8].child_friendly}
                        dog_friendly={cats[index+8].dog_friendly}
                        energy_level={cats[index+8].energy_level}
                        experimental={cats[index+8].experimental}
                        grooming={cats[index+8].grooming}
                        hairless={cats[index+8].hairless}
                    />
                </div>
            </div>
        );
    }

    const setFavoriteCat = () => {
        var a = cats;
        var b = store.get('favoriteCats');
        const testArray: string | any[] = []
        if(b.length > 0) {
            var result = a.filter(function (v) {
                return b.some(function (v2: any) {
                    return v.id === v2;
                })
            });
            return result;
        }
        else {
            console.log(testArray.length)
            return testArray;
        }
    }

    const showFavoritesCats = () => {
        setCheckFilter(!checkFilter)
        if(checkFilter === true) {
            catsArray.cats = setFavoriteCat();
            setShow(true)
        }
        else{
            setShow(false)
            fetchCats()
        }
    }

    const resetFilters = () => {
        setMultiValue([""])
        setShow(false)
        dispatch(fetchCats())
    }


    if (!loading){
        if(!error) {
            return <h1>
                <FormattedMessage id='loading'/>
            </h1>
        } else {
            return <h1>
                <FormattedMessage id='error_from_loading'/>
            </h1>
        }
    }

    if (error){
        return  <h1>{error}</h1>
    }

    if(loading && fetchLoad === false){
        setFetchLoad(true)
        const catsFavoriteInStore = store.get('favoriteCats')
        if(!catsFavoriteInStore)
        store.set('favoriteCats', ' ')
        console.log(store.get('favoriteCats'))
    }

    if(catsArray.cats.length === 0){
        return(
        <MessageEmptyList resetFilters={resetFilters}/>)
    }


    const funcSetMultiValue = (option : string) => {
        console.log(option)
        setMultiValue([...multiValue, option])
        console.log(multiValue)
        setShow(true)
    }

    if(show === false) {
        return (
            <div className="wrapper">
                <ShowAddNewBreed/>
                <div className="sidebar">
                    <TongleFilter changeState={showFavoritesCats}/>
                    <MultiSelect filterOptions={cats} multiValue={multiValue} setMultiValue={funcSetMultiValue}/>
                    <hr/>
                    <FormattedMessage id = 'filter_with'/>
                    {multiValue.map(val =>
                        <div key={val}>
                            {val}
                        </div>
                    )}
                    <div>
                        <button onClick={resetFilters}>
                            <FormattedMessage id='reset_filters'/>
                        </button>
                    </div>
                </div>
                <div className="main">
                        <List
                            width={rowWidth}
                            height={listHeight}
                            rowHeight={rowHeight}
                            rowRenderer={renderRow}
                            rowCount={cats.length - 8}
                            overscanRowCount={3}/>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="wrapper">
                <div className="sidebar">
                    <TongleFilter changeState={showFavoritesCats}/>
                    <MultiSelect filterOptions={cats} multiValue={multiValue} setMultiValue={funcSetMultiValue} />
                    <hr/>
                    <FormattedMessage id = 'filter_with'/>
                    {multiValue.map(val =>
                        <div  key={val}>
                            {val}
                        </div>
                    )}
                    <div>
                        <button onClick={resetFilters}>
                            <FormattedMessage id = 'reset_filters'/>
                        </button>
                    </div>
                </div>
                <div className="main">
                    {cats.filter((cat) => multiValue.includes(cat.origin)).map(cat =>
                        <div className='child' key={cat.id}>
                            <Cat
                                id={cat.id}
                                name={cat.name}
                                image={cat.image}
                                origin={cat.origin}
                                adaptability={cat.adaptability}
                                affection_level={cat.affection_level}
                                child_friendly={cat.child_friendly}
                                dog_friendly={cat.dog_friendly}
                                energy_level={cat.energy_level}
                                experimental={cat.experimental}
                                grooming={cat.grooming}
                                hairless={cat.hairless}
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

export default withRouter(CatList);
