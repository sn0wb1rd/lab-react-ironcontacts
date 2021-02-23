import React from 'react'

function ContactList(props) {

    return (
        <>
            <tr>
                <td><img src={props.picture} width="50" height="60"></img></td>
                <td>{props.name}</td>
                <td>{props.popular}</td>
                <td><button 
                    onClick={ () => {props.pressDelete(props.id)} }
                    >Delete
                </button></td>
            </tr>
        </>
    )
}

export default ContactList