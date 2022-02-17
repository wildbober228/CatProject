import React, {UIEvent ,useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import Cat from "../Cat";
import {useDispatch} from "react-redux";
import {fetchCatsDynamicPagination} from "../epics/catEpic";

const CatListDynamicPagination = () => {

    const {cats} = useTypedSelector(state => state.cat)
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)

    //const {fetchCatsDynamicPagination} = useActions()
    const dispatch = useDispatch()
    useEffect(() => {
        if(fetching)
            dispatch(fetchCatsDynamicPagination({payload: {currentPage, setCurrentPage, setFetching}}))
    }, [fetching])

    useEffect( () => {
        (document as any).addEventListener("scroll", scrollHandler);
        return function () {
            (document as any).removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (event: UIEvent<HTMLDivElement>) => {
        if(document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 10){
            setFetching(true )
        }
    }

    return (
        <div className="main">
            {cats.map(cat =>
                <div className='child' key={cat.id}>
                    <Cat
                        id={cat.id}
                        name={cat.name}
                        image={cat}
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
    );
};

export default CatListDynamicPagination;
