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

  // clickHandler = () => {
  //      this.setState = ({
  //       person:[
  //    {name: 'twitcher', age: 29},
  //    {name: 'efg', age: 20},
  //    {name: 'Thor', age: 19}
  //   ]
  //      })  
  
  // }
//We wrap the content between the div classes which we need to toggle it's view on the main page, in this case all the persons are wrapped
 //In lines 50-55 we add a parenthsis as it's the target div in the JSX code where we want to perform dynamic operations, so here we can write  JS Codes
 //And there we add Ternary operator so that if true then show, else don't 
  togglePersonHandler = () => { //Logic for toggling functionality
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});

  }

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
       onClick= {this.togglePersonHandler}>Toggle Name</button> 

       { this.state.showPerson === true ?  //If this is true, then we display that div content, as showPerson is false it will show the content
        <div> 
       <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
       <Person name={this.state.person[1].name} age={this.state.person[1].age}>My Hobbies: Swimming </Person>
       <Person name= {this.state.person[2].name} age={this.state.person[2].age}/>
         </div>  : null //If the content is shown, then pressing the button again hides it
       }
 
      </div>
    );
  
    
  }
}

export default App;
