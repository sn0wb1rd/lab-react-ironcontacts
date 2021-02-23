import React, {Component} from 'react'
import contactsJson from  '../contacts.json';
import ContactList from './ContactList'
import 'bulma/css/bulma.css';


class Contacts extends Component {

    // grabbing first 5 elem from json array
    state = {
        contacts: contactsJson.slice(0,5),
        // randomContact: contacts[Math.floor(Math.random() * contacts.length)]
    }

    // it. 2: function for the Add Random Contact Button
    handleAddRandom = () => {
        // console.log('check add Random')
        let randomIndex = Math.floor(Math.random() * contactsJson.length)
        let randomContact = contactsJson[randomIndex]

        this.setState({
            contacts: [...this.state.contacts, randomContact]
        })
    }    

    handleSortName = () => {
        // console.log('check sorting')
        //clone before use the sort method
        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))

        clonedContacts.sort((first, second) => {
            if (first.name > second.name){
                return 1
            }
            else if (first.name < second.name) {
                return -1
            }
            else {
                return 0
            }
        })

        //Important. Do not forget plz
        this.setState({
            contacts:clonedContacts
        })
    }

    handleSortPop = () => {
        // console.log('check sorting')
        //clone before use the sort method
        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))

        clonedContacts.sort((first, second) => {
            if (first.popularity > second.popularity){
                return 1
            }
            else if (first.popularity < second.popularity) {
                return -1
            }
            else {
                return 0
            }
        })

        //Important. Do not forget plz
        this.setState({
            contacts:clonedContacts
        })
    }

    handleDelete = (contactID) => {
        console.log('check deletion')

        let filteredContacts = this.state.contacts.filter((singleContact) => {
            return singleContact.id !== contactID
        })

        // set state..
        this.setState({
            contacts:filteredContacts
        })
    }

    render() {
        return (
            <>
                <div className="mb-2 container ">
                    <span>
                        <button className="m-1 button is-primary is-small" onClick={this.handleAddRandom}>Add Random Contact</button>
                    </span>
                    <span>
                        <button className="m-1 button is-info is-small" onClick={this.handleSortName}>Sort by name</button>
                    </span>
                    <span>
                        <button className="m-1 button is-info is-small" onClick={this.handleSortPop}>Sort by popularity</button>
                    </span>


                    
                </div>

                <div className="mb-2 container ">
                    <table className="table auto" border = "1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map((singleContact, index) => {
                                    return <ContactList
                                        key={index}
                                        picture={singleContact.pictureUrl}
                                        name={singleContact.name}
                                        popular={singleContact.popularity}
                                        // dont forget for the deletion
                                        id={singleContact.id}
                                        pressDelete={this.handleDelete}                            
                                    />                      
                                })   
                            }                            
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

}


export default Contacts