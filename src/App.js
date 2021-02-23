import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import contacts from  './contacts.json';

class App extends Component {

  // grabbing first 5 elem from json array
  state = {
    contacts: contacts.slice(0,5)
  }

  render () {
    // test to see wha
    console.log(this.state.contacts[0].name)
    return(
      <div className="App">
      <h1>Contacts</h1>
      {
        this.state.contacts.map((singleContact, index) => {
          console.log(singleContact.name)
          return(
            <>   
              <div>
                <span><img src={singleContact.pictureUrl} width="50" height="60"></img></span>
                <span>{singleContact.name}</span>
                <span>{singleContact.popularity}</span>              
              </div>
            </>           
          )          
        })        
      }
      </div>
    )
  }
}

export default App;
