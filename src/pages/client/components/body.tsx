import BodyTabs from './body-tabs';
import Search from '../search/components/search-body';
import React, { useState } from 'react';
import { CLIENT_AREA_TABS } from '../../../constants/tabs';
import Library from '../library/components/library-body';
import Account from '../my-account/account';

const bodyStyle = {
    backgroundColor: 'black',
    color: 'white',
    display: 'block',
    width: '100%',
    height: 'auto',
    border: '2px',
}

export default function ClientBody() {
    const [ tab, setTab ] = useState(CLIENT_AREA_TABS.MY_REVIEWS);

    switch (tab) {
        case CLIENT_AREA_TABS.MY_ACCOUNT:
            return (
                <div style={bodyStyle}>
                    <BodyTabs setTabFunction={ setTab } currentTab={ tab } />
                    <Account />
                </div>
            );
        case CLIENT_AREA_TABS.MY_REVIEWS:
            return (
                <div style={bodyStyle}>
                    <BodyTabs setTabFunction={ setTab } currentTab={ tab } />
                    <Library />
                </div>
            );
        case CLIENT_AREA_TABS.SEARCH:
            return (
                <div style={bodyStyle}>
                    <BodyTabs setTabFunction={ setTab } currentTab={ tab } />
                    <Search />
                </div>
            );
    }
}

//REMEMBER: MATERIAL UI -> TABBING AND SIDEBAR MENU