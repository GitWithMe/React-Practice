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
//Line 61-62 pushes red css class when the number of people in the list are <=2
//line 65-66 pushes bold class on condition for ppl<=1
//line 71 defines dynamic css className

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
       />   
       })}
         </div> 
        );

        style.backgroundColor = 'red';
        
    }
    
    const classes = [];
    if(this.state.person.length <=2 ){
      classes.push('red'); 
    }
    if(this.state.person.length <=1 ){
      classes.push('bold'); 
    }
    return (
      <div className="App">
       <h1>Hello World</h1>
       <p className={classes.join(' ')}>This is working</p>
       <button 
        style = {style}
       onClick= {this.togglePersonHandler}>Toggle Name</button> 
      {person} 
      </div>
    );
  
    
  }
}

export default App;
