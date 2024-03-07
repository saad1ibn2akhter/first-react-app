import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Device(props){
  console.log(props);
  return (
    <h3>This Device : {props.name} and price is :{props.price}</h3>
  )
}

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="32000"></Device>
      <Device name="watch" price="4000"></Device>
      <Device></Device>
      <Person></Person>
      <Student grade="7" score="90"></Student>
      <Student grade="12" score="100"></Student>
      <Student grade="12" score="98"></Student>
      <Developer></Developer>
    </>
  )
}

function Person(){
  
  const age = 14;
  const money = 300000;
  const address ={
    name:"arman",
    area:"manchester"
  }
  return(
     <h4>Hello {address.name} , Do you have {money} . and do you live in {address.area}</h4>
     )

}

const {grade , score} = {grade:'7' , score:'100'};

function Student(props){
  const Name = "Zawad";
  const Age = 23;
  return (
    <div className='student'>
      <h2>This is a student </h2>
      <h2>Name :{Name}</h2>
      <h2>Age: {Age}</h2>
    </div>
  )
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding:'20px',
    border:'2px solid green',
    borderRadius:'10px'
  }

  return (
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>coding progrmmming mathematics</p>
    </div>
  )
}
export default App
