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
//In Line 48 we call the person's jsx method so that onClick it will perform the following function
  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;    //Here we create a variable which is by default a null
    if(this.state.showPerson === true){ //same check condition as seen in the 1st approach
      person = (   ///if this is true then person variable will display the following div content
      <div> 
       <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
       <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies: Swimming </Person>
       <Person name= {this.state.person[2].name} age={this.state.person[2].age}/>
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
