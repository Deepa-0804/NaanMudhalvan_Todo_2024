import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Additem from './Additem'
import { useState } from 'react'
import './index.css';

const App = () => {
  const [ item, setItem ] = useState(
    [
      {
        id:1,
        checked:true,
        item:"Practice Code"
      },
      {
        id:2,
        checked:false,
        item:"take care your self"
      },
      {
        id:3,
        checked:false,
        item:"do cleaning"
      }
    ]
  );
  const [newItem,setNewItem]=useState('')
  const handleCheck =(id)=>{
    const listItem=item.map((item)=>item.id=== id ? {...item,checked:!item.checked} : item)
    setItem(listItem)
    localStorage.setItem("todo_list",JSON.stringify(listItem))
  }
const handleRemove=(id)=>{
    const listItem=item.filter((item)=>item.id!==id )
    setItem(listItem)
    localStorage.setItem("todo_list",JSON.stringify(listItem))


}
const handleSubmit=(e)=>{
  console.log('submitted')
}
  return (
    <div>
      <Header title="To Do List"/>
      <Additem/>
    
      <Footer />
    </div>
  )
}

export default App
