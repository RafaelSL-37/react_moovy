import React from "react"

const tabs = [
    'Reviews',
    'Search',
    'Account'
]

const tabStyle = {
    border: '2px solid red',
    width: '7%',
    height: '40px',
    textAlign: 'center' as 'center',
}

const bodyTabHolderStyle = {
    display: 'flex',
    border: '2px solid red',
}

export default function BodyTabs() {
    return (
        <div style={{backgroundColor: 'darkgrey'}}>
            THIS IS A TABBED HEADER
            <div style={bodyTabHolderStyle}>
                {tabs.map((tab) => 
                    <h2 style={tabStyle}>
                        {tab}
                    </h2>
                )}
            </div>
        </div>
    )
}