import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    person:[
     {name: 'abc', age: 29},
     {name: 'efg', age: 20},
     {name: 'xyz', age: 19}
    ],
    showPerson : false

     }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});

  }
//In Line 50 we call the person's jsx method so that onClick it will perform the following function
  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;    
    if(this.state.showPerson === true){ 
      person = (   
      <div> 
      {this.state.person.map(person => { //The Map functions take the JS objects and maps them into a valid JSX format during the time of render
       return <Person
       name = {person.name}
       age = {person.age} />
       })}
         </div> 
        );
    }
    return (
      <div className="App">
       <h1>Hello World</h1>
       <p>This is working</p>
       <button 
        style = {style}
       onClick= {this.togglePersonHandler}>Toggle Name</button> 
      {person} 
      </div>
    );
  
    
  }
}

export default App;
