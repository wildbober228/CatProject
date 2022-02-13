import React, {FC} from 'react';
import {LOCALES} from "../i18n/locales";

interface ISelectLanguage {
    currentLocale: string;
    setCurrentLocale: (value: string) => void;
}

const SelectLanguage: FC<ISelectLanguage> = ({currentLocale, setCurrentLocale}) => {

    const languages = [
        { name: 'English', code: LOCALES.ENGLISH },
        { name: 'Русский', code: LOCALES.RUSSIAN },
    ]

    const hangleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        localStorage.setItem('locale', value)
        setCurrentLocale(value)
    }

    return (
            <div className='switcher'>
                Languages
            <select onChange={hangleChange} value={currentLocale}>
                {languages.map(({ name, code }) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </select>
            </div>
    );
};

export default SelectLanguage;
