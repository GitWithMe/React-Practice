import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    person:[
     { id:'p1' , name: 'abc', age: 29},
     { id:'p2' , name: 'efg', age: 20},
     { id:'p3' , name: 'xyz', age: 19}
    ],
    showPerson : false

     }

     deletePersonHandler = (personIndex) => {  //This arrow function takes the personIndex as the parameter
      //const person = this.state.person.slice(); //This creates the copy of the person's object
      const person = [...this.state.person]; //This is the ES6 implementation of the slice method where the 3 dots are spread operator
      person.splice(personIndex,1);
      this.setState({person: person});
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
      {this.state.person.map((person,index)  => { //Passing 2 indexes with parenthesis in an arrow function for delete method
       return <Person   
       click={() => this.deletePersonHandler(index)}  //deletes the index of the element clicked on       
       name = {person.name}        //  Dynamic List
       age = {person.age} 
       key = {person.id}     //key is needed so that react could know the uniqueness of the index to be modified for an efficient program
       />                      
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
