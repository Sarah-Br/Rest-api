import React from 'react'
import Contactcard from './contactcard'
import AddContact from './addContact'

import React, { Component } from 'react'

export default class contactlist extends Component {

    state={
        list= props.contacts,
    }
    render() {
        return (
            <div>
              <h1>Contact List </h1>  
              <button >Show contacts</button>
              {this.props.state.list.map((contact=>{
                  <Contactcard contact={contact}/>
              }))}

              <AddContact/>
              
            </div>
        )
    }
}
