import React, {FC} from 'react';
import StarsBreedComponent from "./StarsBreed/StarsBreedComponent";

interface ICatCharacteristics {
    catName: string;
    adaptability?: number;
    affection_level?: number;
    child_friendly?: number;
    dog_friendly?: number;
    energy_level?: number;
    experimental?: number;
    grooming?: number;
    hairless?: number;
}

const CatCharacteristics: FC<ICatCharacteristics> = ({
            catName,
            adaptability,
            affection_level,
            child_friendly,
            dog_friendly,
            energy_level,
            experimental,
            grooming,
            hairless
}) => {
    return (
        <div>
            <h2>{catName}'s Characteristics</h2>
            <hr/>
            <StarsBreedComponent characteristics={"Adaptability"} amountStars={Number(adaptability)}/>
            <StarsBreedComponent characteristics={"AffectionLevel"} amountStars={Number(affection_level)}/>
            <StarsBreedComponent characteristics={"ChildFriendly"} amountStars={Number(child_friendly)}/>
            <StarsBreedComponent characteristics={"DogFriendly"} amountStars={Number(dog_friendly)}/>
            <StarsBreedComponent characteristics={"EnergyLevel"} amountStars={Number(energy_level)}/>
            <StarsBreedComponent characteristics={"Experimental"} amountStars={Number(experimental)}/>
            <StarsBreedComponent characteristics={"Grooming"} amountStars={Number(grooming)}/>
            <StarsBreedComponent characteristics={"Hairless"} amountStars={Number(hairless)}/>
            <hr/>
        </div>
    );
};

export default CatCharacteristics;
