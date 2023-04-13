const tabs = [
    'Reviews',
    'Search',
    'Account'
]

const tabStyle = {
    backgroundColor: 'grey',
    margin: '2px',
    width: '7%',
    height: '50px',
    textAlign: 'center',
}

const bodyTabHolderStyle = {
    display: 'flex',
    margin: '2px',
}

export default function BodyTabs() {
    return (
        <div style={{backgroundColor: 'darkgrey'}}>
            THIS IS A TABBED HEADER
            <div style={bodyTabHolderStyle}>
                {tabs.map((tab) => <h2 style={tabStyle}>{tab}</h2>)}
            </div>
        </div>
    )
}