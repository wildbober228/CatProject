import React, {FC} from 'react';
import {ICat} from "../types/types";
interface IProps {

    multiValue: string[];
    setMultiValue: (value: string) => void;
    filterOptions: ICat[];
}

const MultiSelect: FC<IProps> = ({multiValue, setMultiValue, filterOptions}) => {
    const _ = require("lodash")
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setMultiValue(value);
    }

    const uniqueOrigin = (arr : ICat[]) => {
        arr = _.uniqBy(arr, function (item: ICat) {
            return item.origin
        })
        arr = _.orderBy(arr, [(cat: { origin: string; }) => cat.origin.toLowerCase()], ['asc']);
        return arr;
    }

    return (
        <div>
            <select multiple={true} value={multiValue}  onChange={onChange}>
                <option value="DEFAULT" disabled>
                    ...
                </option>
                {uniqueOrigin(filterOptions).map(cat =>
                    <option key={cat.id} value={cat.origin}>{cat.origin}</option>
                )}
            </select>
        </div>
    );
};
export default MultiSelect;
