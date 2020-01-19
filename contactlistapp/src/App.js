import React from 'react';
import './App.css';
import Contactlist from "./components/contactlist"

export default class App extends Component {
  state={
    tab=[{id:Math.random,name:"sarah",age:"27",email:"sara@mail.com"},
    {id:Math.random,name:"samir",age:"28",email:"samir@mail.com"},
    {id:Math.random,name:"firas",age:"29",email:"firas@mail.com"}
  ]
  }

  render() {
    return (
      <div>
        <Contactlist contacts={this.state.tab}/>
        
      </div>
    )
  }
}
