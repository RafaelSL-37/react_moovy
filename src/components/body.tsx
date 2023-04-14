import BodyTabs from './body-tabs';
import Library from './library';
import Search from './search';
import Account from './account';
import React from 'react';
import LoginArea from './login-area';

const bodyStyle = {
    backgroundColor: 'black',
    color: 'white',
    display: 'block',
    width: '100%',
    height: 'auto',
    border: '2px',
}

export default function Body() {
    //const { tab, useTab } = TODO: STATE AQUI

    return (
        <div style={bodyStyle}>
            THIS IS A BODY
            <LoginArea />
            <BodyTabs  />
            <Library />
            <Search />
            <Account />
        </div>
    );//TODO: ADICIONAR UM TESTE PRA VER QUAL DELES VAI CARREGAR
}

//REMEMBER: MATERIAL UI -> TABBING AND SIDEBAR MENU