import {useState} from 'react'
import './App.css';

function App() {
  const [toDo,setToDo]=useState("")
  const [toDos,setToDos]=useState([])

  const handleRemove1 = obj => {
    setToDos(toDos.filter(i => i !== obj));
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj)=>{
            return ( <div className="todo">
                 <div className="left">
                 <input onChange={(e)=>{setToDos(toDos.filter(obj2=>{
                      if(obj2.id===obj.id ){
                      obj2.status=e.target.checked
        }
        return obj2 }))}} type="checkbox" name="" id="" />
             <p>{obj.text}</p>
                  </div>
          <div className="right">
            <i onClick={() => handleRemove1(obj)} className="fas fa-times"></i>
          </div>
        </div>)
        })}
          
          <div className="subHeading">
        <br />
        <h2>Acive Tasks ☕ </h2>
      </div>
      {
        toDos.map((obj=>{
          if (obj.status){
         return<div className="input">
          <input type="text" disabled="true" placeholder={obj.text} /></div>
        }
        return null
      
      }))}
           
      </div>
    </div>
  );
}


export default App;
