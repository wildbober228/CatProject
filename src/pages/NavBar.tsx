import React, {useState} from 'react';
import {Navbar, NavbarBrand} from "reactstrap";
import {Link} from "react-router-dom";
import {CatActionType} from "../types/cat";
import {useDispatch} from "react-redux";
import {FormattedMessage} from "react-intl";

const NavBar = () => {

    const dispatch = useDispatch()
    const ChangeLoadingHandler = () => {
        dispatch({
            type:CatActionType.RESET_LOADING
        })
    }

    return (
        <Navbar>
            <NavbarBrand onClick={ChangeLoadingHandler} tag={Link} to="/">
                <FormattedMessage id = 'back_to_library'/>
            </NavbarBrand>
        </Navbar>
    );
};

export default NavBar;
