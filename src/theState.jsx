import React, { useState } from 'react';
function Person(){
    const [person, setPerson] = useState({name:'Doe', age: 99})


    /*
     // BAD - Don't do this! State should be immutable
  const handleIncreaseAge = () => {
    // mutating the current state object
    person.age = person.age + 1;
    setPerson(person);
  };
  */

  // Good to do this

  const handleIncreaseAge = () =>{
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = {...person, age: person.age + 1};
    setPerson(newPerson)
  }

  return(
    <>
    <h1>{person.name}</h1>
    <h2>{person.age}</h2>
    <button onClick={handleIncreaseAge}>Increase Age!</button>
    </>
  )
}

export default Person;