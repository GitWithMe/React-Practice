import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

//In Lines 14-16 we render name and age by using props in Person.js
//In Line 15 There is a children component and to implelement this, we go to Person.js

/*class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hello World</h1>
       <p>This is working</p>
       <Person name="abc" age="30"/>
       <Person name="xyz" age="19">My Hobbies: Swimming </Person>
       <Person name="efg" age="21"/>
      </div>
    );
  
    
  }
}
*/

//State is only used inside a class that EXTENDS a component
//State accepts input in the form of a Javascript object
//Unlike hardcoding as seen in Lines 14-16, states can be used to perform a dynamic operations within the app class
//Demonstration of clicking action in Lines 38 and 64
class App extends Component {
  state = {
    person:[
     {name: 'abc', age: 29},
     {name: 'efg', age: 20},
     {name: 'xyz', age: 19}
    ]

     }

  clickHandler = () => {
       this.setState = ({
        person:[
     {name: 'twitcher', age: 29},
     {name: 'efg', age: 20},
     {name: 'Thor', age: 19}
    ]
       })  
  
  }
//In Line 66 we pass a click function so that the onClick method inside the Person.js method could work & line 63 demonstrates the inline styling functionality for react
  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid green',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
       <h1>Hello World</h1>
       <p>This is working</p>
       <button 
        style = {style}
       onClick={this.clickHandler}>Click Me</button>
       <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
       <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.clickHandler}>My Hobbies: Swimming </Person>
       <Person name= {this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );
  
    
  }
}

export default App;
