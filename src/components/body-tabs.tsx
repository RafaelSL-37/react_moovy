import React from "react"

const tabs = [
    "MY_ACCOUNT",
    "MY_REVIEWS",
    "SEARCH",
]

const tabStyle = {
    border: '2px solid red',
    padding: '5px',
    textAlign: 'center' as 'center',
}

const bodyTabHolderStyle = {
    display: 'flex',
    border: '2px solid red',
}

export default function BodyTabs({ currentTab, setTabFunction }: { currentTab: string, setTabFunction: (params: any) => any }) {
    return (
        <div style={{backgroundColor: 'darkgrey'}}>
            THIS IS A TABBED HEADER
            <div style={bodyTabHolderStyle}>
                {tabs.map((tab) => 
                    <h2 style={tabStyle} onClick={() => setTabFunction(tab)}>
                        {tab}
                    </h2>
                )}
                {currentTab}
            </div>
        </div>
    )
}