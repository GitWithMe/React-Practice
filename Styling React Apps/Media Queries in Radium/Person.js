import React from 'react'; 
import Radium from 'radium';
import './Person.css';

const person = (props) => {
  const style = {
  	'@media (min-width: 500px)' : {
  		width : '450px'
  	}
  };
  //For Media-Queries using Radium Lines 6-9 and call the style class in Line 14

	return( 
		<div className="Person" style={style}>
	<p onClick={props.click}> I am {props.name} and I am {props.age} years old</p>  
	<p> {props.children} </p>   
	</div>
	
	)
};

export default Radium(person); 
