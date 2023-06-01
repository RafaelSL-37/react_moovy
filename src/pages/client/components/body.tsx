import BodyTabs from './body-tabs';
import Search from '../search/components/search-body';
import React, { useState } from 'react';
import { CLIENT_AREA_TABS } from '../../../constants/tabs';
import Library from '../library/components/library-body';
import Account from '../my-account/account';
import { Link } from 'react-router-dom';

const bodyStyle = {
    backgroundColor: 'black',
    color: 'white',
    display: 'block',
    width: '100%',
    height: 'auto',
    border: '2px',
}

function decideTabBody (tab: CLIENT_AREA_TABS) {
    switch (tab) {
        case CLIENT_AREA_TABS.MY_ACCOUNT:
            return <Account />;

        case CLIENT_AREA_TABS.MY_REVIEWS:
            return <Library />;

        case CLIENT_AREA_TABS.SEARCH:
            return <Search />;
    }
}

export default function ClientBody() {
    const [ tab, setTab ] = useState(CLIENT_AREA_TABS.MY_REVIEWS);

    const tabBody = decideTabBody(tab);

    return (
        <div style={bodyStyle}>
            <BodyTabs setTabFunction={ setTab } currentTab={ tab } />
            {tabBody}
            <Link to='/'>Back To Landing</Link>
        </div>
    );
}