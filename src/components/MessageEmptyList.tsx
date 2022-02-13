import React, {FC} from 'react';
import {FormattedMessage} from "react-intl";

interface IProps {
    resetFilters: () => void;
}

const MessageEmptyList: FC<IProps> = ({resetFilters}) => {
    return(
        <div>
            <h1>
                <FormattedMessage id = 'list_is_empty'/>
            </h1>
            <button onClick={resetFilters}>
                <FormattedMessage id = 'reset_filters'/>
            </button>
        </div>
    );
};

export default MessageEmptyList;
