import React from 'react'; 
import './Person.css';
//Creating a custom function
//Props are used to set up dynamic content inside a jsx file
 //Line 12 used to render the Child component in Line 14 of App.js
 //In order to use Click Property in Person.js we pass an onClick function by using props.click as click is the name of property in line 57 of App.js
 //So when we click a paragraph where click function is passed, it should work, Line 10 for css class
const person = (props) => {
	return( 
		<div className="Person">
	<p onClick={props.click}> I am {props.name} and I am {props.age} years old</p>  
	<p> {props.children} </p>   
	</div>
	
	)
};

export default person; 
