import React from "react"
import { CLIENT_AREA_TABS } from '../../../constants/tabs'

const tabStyle = {
    border: '2px solid red',
    padding: '5px',
    textAlign: 'center' as 'center',
}

const tabStyleClicked = {
    border: '2px solid red',
    padding: '5px',
    textAlign: 'center' as 'center',
    backgroundColor: 'red',
}

const bodyTabHolderStyle = {
    display: 'flex',
    border: '2px solid red',
}

export default function ClientBodyTabs({ currentTab, setTabFunction }: { currentTab: string, setTabFunction: (params: any) => any }) {
    const tabKeys = Object.keys(CLIENT_AREA_TABS);

    return (
        <div style={{backgroundColor: 'darkgrey'}}>
            <div style={bodyTabHolderStyle}>
                {tabKeys.map((tabKey) => 
                    <h2 style={currentTab === tabKey ? tabStyleClicked : tabStyle} onClick={() => setTabFunction(tabKey)}>
                        {tabKey}
                    </h2>
                )}
            </div>
        </div>
    )
}