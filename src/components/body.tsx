import BodyTabs from './body-tabs';
import Library from '../pages/reviews/components/library';
import Search from '../pages/search/components/search';
import Account from './account';
import React, { useState } from 'react';
import LoginArea from '../pages/login/components/login-area';
import { CLIENT_AREA_TABS } from '../constants/tabs';

const bodyStyle = {
    backgroundColor: 'black',
    color: 'white',
    display: 'block',
    width: '100%',
    height: 'auto',
    border: '2px',
}

export default function Body() {
    const [ tab, setTab ] = useState(CLIENT_AREA_TABS.MY_REVIEWS);

    return (
        <div style={bodyStyle}>
            THIS IS A BODY
            <LoginArea />
            <BodyTabs setTabFunction={ setTab } currentTab={ tab } />
            <Library />
            <Search />
            <Account />
        </div>
    );//TODO: ADICIONAR UM TESTE PRA VER QUAL DELES VAI CARREGAR
}

//REMEMBER: MATERIAL UI -> TABBING AND SIDEBAR MENU