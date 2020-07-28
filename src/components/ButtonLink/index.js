import React from 'react';
import './ButtonLink.css'

function ButtonLink(props) {
    // props => { className: "o que passar lá", href: "/"}
    console.log(props)
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink;