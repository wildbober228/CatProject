import React, {FC} from 'react';
import CatCard, {CardVariant} from "./CatCard";
import {FormattedMessage} from "react-intl";


interface ToggleProps {
    changeState: () => void;
    value: boolean;
}


const TongleFilter: FC<ToggleProps> = ({changeState, value}) => {

    const handleChange = () => {
        changeState();
    };

    return (
        <CatCard variant={CardVariant.outlined} width="100%" height="50px">
            <div>
                <input defaultChecked={!value} type="checkbox" data-toggle="toggle" onChange={handleChange}/>
                <FormattedMessage id = 'show_only_favorite'/>
            </div>
        </CatCard>
    );
};

export default TongleFilter;
