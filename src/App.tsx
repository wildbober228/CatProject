import React, {useState} from 'react';
import {Route, Router, Switch} from "react-router-dom";
import CatMainPage from "./pages/CatMainPage";
import CatInfoPage from "./pages/CatInfoPage";
import { withRouter, } from "react-router";
import { useHistory } from "react-router-dom";
import {IntlProvider} from "react-intl";
import {LOCALES} from "./i18n/locales";
import {messages} from "./i18n/messages";
import SelectLanguage from "./components/SelectLanguage";

const App = () => {

    const H = useHistory();

    const getInitialLocale = () => {
        const savedLocale = localStorage.getItem('locale')
        return savedLocale || LOCALES.ENGLISH
    }

    const [currentLocale, setCurrentLocale] = useState(getInitialLocale())

    return (
        <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale = {LOCALES.ENGLISH}>
            <SelectLanguage currentLocale={currentLocale} setCurrentLocale={setCurrentLocale}/>
        <Router history={H}>
            <Switch>
                <Route key = "home" exact = {true} path="/" component={CatMainPage}/>
                <Route key = "info" path="/info/:id" component={CatInfoPage}/>
            </Switch>
        </Router>
        </IntlProvider>
    );
};

export default withRouter(App);
