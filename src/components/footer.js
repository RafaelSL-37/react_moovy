const footerStyle = {
    backgroundColor: 'green',
}

export default function Footer(props) {
    return (
        <div style={footerStyle}>
            THIS IS A FOOTER <br />
            {props.children}
        </div>
    );
}