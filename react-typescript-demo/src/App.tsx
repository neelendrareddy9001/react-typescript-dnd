import React from 'react';
import { Greet } from './components/Greet';
import {Person} from './components/Person';
import { PersonList } from './components/PersonList';
import './App.css';
import { Status } from './Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {

  const personName = {
    first : 'Bruce',
    last : 'Wayne'
  }

  //Array of an Object List
  const nameList = [
    {
      first : 'Bruce',
      last : 'Wayne'
    },
    {
      first : 'Clark',
      last : 'Kent'
    },
    {
      first : 'Princes',
      last : 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name= 'Visws' isLoggedIn={true}/>
      {/* <Person name = {personName}/>
      <PersonList names={nameList}/> */}
      <Status status='success'/>
      
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>

      <Button 
          handleClick={(Event, id) => {
            console.log('Button Clicked', Event,id)
          }}
      />

      <Input value='' handleChange={(event) => console.log(event)}/>
    </div>
  )
}

export default App;
