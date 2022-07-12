import React,{useState} from 'react'
import Child from './component/child'
import CurrentDate from './component/CurrentDate'
import List from './component/List'


function App() {
  const [message] = useState("Welcome to Techmojo!")
  return (
    <div>
      <div className='App'/>
      <Child state = {"DEFAULT"}/>
      <Child state = {"BAR"}/>
      <Child state = {"FOO"}/>
      <div>
        <h3>What Date is it?</h3>
      <CurrentDate date = {Date()}/>
      </div>
      <div>
        <p>{message}</p>
      </div>
      <div>
        <h1>To Do List</h1>
        <h2>Today</h2>
        <List tasks = {['Walk', 'Cook', 'Bake']}/>
        <h2>Tomorrow</h2>
        <List tasks = {["Study","Cook","Eat"]}/>
        <h4></h4>
      </div>
    </div>
    
  );
}


export default App

