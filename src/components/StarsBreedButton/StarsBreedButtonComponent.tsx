import React, {FC, useEffect, useState} from 'react';
import * as styles from "../StarsBreed/StarsBreed.module.scss";

interface IStarsBreedComponent {
    characteristics: string;
    amountStars: number;
    setValue: (value: number) => void;
}

const StarsBreedButtonComponent: FC<IStarsBreedComponent> = ({characteristics, amountStars, setValue}) => {

    const starsState = [
        { id: 0, icon: "★", active: true, value: 1 },
        { id: 1, icon: "☆", active: false, value: 2 },
        { id: 2, icon: "☆", active: false, value: 3 },
        { id: 3, icon: "☆", active: false, value: 4 },
        { id: 4, icon: "☆", active: false, value: 5 }
    ];

    useEffect(() => {
        let arrayStars = [...stars]
        for (let i = 0; i <= amountStars-1; i++) {
            if(arrayStars[i].active == false) {
                arrayStars[i] = {id: i, icon: "★", active: true, value: i+1}
            }
        }
        setStars(arrayStars)

    },[amountStars])



    const [stars,setStars] = useState(starsState)

    const updateButtonSkin = (id: number, event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        let arrayStars = [...stars]

        if(arrayStars[id].active == true) {
            setStars(starsState)
        }

        for (let i = 0; i <= id; i++) {
            if(arrayStars[i].active == false) {
                arrayStars[i] = {id: i, icon: "★", active: true, value: i+1}
            }
        }
        for (let i = id+1; i < 5; i ++) {
                arrayStars[i] = {id: i, icon: "☆", active: false, value: i+1}
        }
        setStars(arrayStars)
        setValue(id+1)
    }

    return (
        <div className={styles.default.container}>
            <div className={styles.default.box}>
                <div>{characteristics}</div>
                <div>
                    {stars.map((state, index) =>(
                        <button key={state.id} onClick={(event) => updateButtonSkin(state.id, event)}>{state.icon}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StarsBreedButtonComponent;
