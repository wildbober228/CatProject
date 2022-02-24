import React, {FC, ReactDOM} from "react";
import * as styles from './ModalForm.module.scss'
import {Portal} from "react-portal";


interface IModalForm {
    visible:boolean;
    setVisible: (value: boolean) => void;
}

const ModalForm:FC<IModalForm> = ({children, visible, setVisible}) => {

    const rootClasses = [styles.default.myModal]
    if(visible){
        rootClasses.push(styles.default.active);
    }

    return (
        <Portal>
        <div className = {rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.default.myModalContent} onClick={(event => event.stopPropagation())}>
                {children}
            </div>
        </div>
        </Portal>
    );
};

export default ModalForm;
