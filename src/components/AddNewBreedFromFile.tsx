import React, {FC, useState} from 'react';
import Papa, {ParseResult} from 'papaparse';
import {ICat, IImage} from "../types/types";

interface IProps {
    setCatBreed: (cat: ICat[]) => void;
}

const AddNewBreedFromFile: FC<IProps> = ({setCatBreed}) => {

    const imageInitialState = {
        id: 0,
        url: "",
        width: 0,
        height: 0
    }
    const [breedImage, setBreedImage] = useState<IImage>(imageInitialState)

    const catInitialState = {
        id: "",
        name: "",
        origin: "",
        description: "",
        country_code: "",
        temperament: "",
        life_span_max: 0,
        life_span_min : 0,
        image: breedImage,
        adaptability: 0,
        affection_level: 0,
        dog_friendly: 0,
        energy_level: 0,
        experimental: 0,
        grooming: 0,
        hairless: 0,
        child_friendly: 0,
    }

    const [cat, setCat] = useState<ICat>(catInitialState)
    const [catArray, setCatArray] = useState<ICat[]>([catInitialState])
    const parseFile = (file: any) => {
        Papa.parse( file , {
            header: true,
            complete: (results) => {
                let parseResult: any
                parseResult = results
                console.log(catArray)
                addCatFromFile(parseResult)
            }
        });
    };

    const addCatFromFile = (catInfo: ParseResult<ICat>) => {
        let helpCatArray = catArray
        if (catInfo.meta.fields?.length === 18) {
            let Cat : ICat = catInfo.data[0]
            helpCatArray.push(Cat)
            setCatArray(helpCatArray)
            setCatBreed(helpCatArray)

        } else {
            helpCatArray.push(cat)
            setCatArray(helpCatArray)
        }
    }

    const onLoadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.files && event.currentTarget.files[0] && event.currentTarget.files.length == 1) {
                parseFile(event.currentTarget.files[0]);
        }

        if (event.currentTarget.files && event.currentTarget.files.length > 1) {
            let length = event.currentTarget.files.length
            for (let i = 0; i < length; i++){
                console.log("parsed " + i + " file")
                parseFile(event.currentTarget.files[i]);
            }

        }

    }

    return (
        <div>
            <input type="file" name="loadFile" multiple accept= ".csv,.xls"  onChange={onLoadFile} />
        </div>
    );
};

export default AddNewBreedFromFile;
