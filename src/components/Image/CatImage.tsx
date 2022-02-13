import React, {FC} from 'react';
import {IImage} from "../../types/types";

interface ICatImage {
    image: IImage;
}

const CatImage: FC<ICatImage> = ({image}) => {
    if(image) {
        return (
            <div>
                <img src={image.url} alt="" width={150} height={140}/>
            </div>
        );
    }
    else {
        return (
            <div>
                <img src= "http://via.placeholder.com/40" alt="" width={150} height={140}/>
            </div>
        );
    }
};

export default CatImage;
