import React, {FC} from 'react';
import * as styles from './StarsBreed.module.scss'

interface IStarsBreedComponent {
    characteristics: string;
    amountStars: number;
}

const StarsBreedComponent: FC<IStarsBreedComponent> = ({characteristics, amountStars}) => {

    const getBreedStars = () => {
        let emptyStars = 5 - amountStars;
        let content = [];
        for (let i= 0; i < amountStars; i++){
            content.push("★")
        }
        for (let i= 0; i < emptyStars; i++){
            content.push("☆")
        }
        return content;
    }

    return (
    <div className={styles.default.container}>
        <div className={styles.default.box}>
            <div>{characteristics}</div>
            <div>{getBreedStars()}</div>
        </div>
    </div>
    );
};

export default StarsBreedComponent;
