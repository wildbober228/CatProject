import React, {useState} from "react";
import {useValidation} from "./useValidation";

export const useInput = (initialState: any, validations: any) => {
    const [value, setValue] = useState(initialState)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(valid.numbersOnly){
            const newVal = event.currentTarget.value.replace(/\D+/g, '')
            setValue(newVal)
        } else{
            setValue(event.currentTarget.value)
        }
    }

    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setDirty(true)
    }

    return {
        value,
        setValue,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}
