import {useEffect, useState} from "react";

export const useValidation = (value: any, validations: any) => {

    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [numbersOnly, setNumbersOnly] = useState(false)

    useEffect(() => {
        for (const validation in validations){
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'numbersOnly': {
                    setNumbersOnly(true)
                }
            }
        }
    },[value])

    return {
        isEmpty,
        minLengthError,
        numbersOnly
    }
}
