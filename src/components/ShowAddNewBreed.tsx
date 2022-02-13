import React, {useState} from 'react';
import {Button} from "reactstrap";
import ModalForm from "./ModalFormComponent/ModalForm";
import AddNewBreedForm from "./AddNewBreedForm";
import {FormattedMessage} from "react-intl";

const ShowAddNewBreed = () => {

    const [ShowForm, setShowForm] = useState(false)

    return (
        <div>
            <Button onClick = {() => setShowForm(true)}>
                <FormattedMessage id = 'add_new_breed'/>
            </Button>
            <ModalForm visible={ShowForm} setVisible={setShowForm}>
                <AddNewBreedForm/>
            </ModalForm>
        </div>
    );
};

export default ShowAddNewBreed;
