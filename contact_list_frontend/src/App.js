import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
import Contactlist from "./components/ContactList"

export default class App extends Component {
  state = { contacts: [] }
  
  componentDidMount() {
    // fetchera les contacts au montage du composant et les enregistrera dans ton state
    axios.get('http://localhost:5000/fetchcontact')
    .then(result => {
      console.log('Data shape: ', result)
      this.setState({
        contacts: result.data
      })
    })
  }

  render() {
    return (
      <div>
        <Contactlist contacts={this.state.contacts} />
      </div>
    )
  }
}
