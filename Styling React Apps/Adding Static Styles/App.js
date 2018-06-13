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

  render() {
    const style ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '3px solid green',
      padding: '8px',
      cursor: 'pointer'
    };
//Line 54, makes button red dynamically and on clicking that will result to collapsing the list
    let person = null;    
    if(this.state.showPerson === true){ 
      person = (   
      <div> 
      {this.state.person.map((person,index)  => { 
       return <Person   
       click={() => this.deletePersonHandler(index)}        
       name = {person.name}        
       age = {person.age} 
       key = {person.id}     
       />   //Line 54, dynamic CSS and line 61 is for CSS class created in line 57 by calling red and bold from App.css                
       })}
         </div> 
        );

        style.backgroundColor = 'red';
        
    }
    let classes =['red','bold'].join(' ');
    return (
      <div className="App">
       <h1>Hello World</h1>
       <p className={classes}>This is working</p>
       <button 
        style = {style}
       onClick= {this.togglePersonHandler}>Toggle Name</button> 
      {person} 
      </div>
    );
  
    
  }
}

export default App;
