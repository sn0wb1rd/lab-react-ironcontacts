import React, {Component} from 'react'
import contactsJson from  '../contacts.json';
import ContactList from './ContactList'

class Contacts extends Component {

    // grabbing first 5 elem from json array
    state = {
        contacts: contactsJson.slice(0,5),
        // randomContact: contacts[Math.floor(Math.random() * contacts.length)]
    }

    // function for the Add Random Contact Button
    handleAddRandom = () => {
        let randomIndex = Math.floor(Math.random() * contactsJson.length)
        let randomContact = contactsJson[randomIndex]

        this.setState({
            contacts: [...this.state.contacts, randomContact]
        })
    }    

    render() {
        return (
            <>
                <h1>Contacts</h1>
                <button onClick={this.handleAddRandom}>Add Random Contact</button>
                {
                    this.state.contacts.map((singleContact, index) => {
                        return <ContactList
                            key={index}
                            picture={singleContact.pictureUrl}
                            name={singleContact.name}
                            popular={singleContact.popularity}                            
                        />                      
                    })   
                }
            </>
        )
    }

}


export default Contacts