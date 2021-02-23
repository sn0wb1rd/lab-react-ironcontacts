import React from 'react'

function ContactList(props) {

    return (
        <div>
            <span><img src={props.picture} width="50" height="60"></img></span>
            <span>{props.name}</span>
            <span>{props.popular}</span>         
        </div>
    )
}

export default ContactList