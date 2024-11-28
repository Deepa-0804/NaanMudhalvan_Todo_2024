import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Additem = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      checked: true,
      item: "Practice Code"
    },
    {
      id: 2,
      checked: false,
      item: "Take care of yourself"
    },
    {
      id: 3,
      checked: false,
      item: "Do cleaning"
    }
  ]);

  const [newItem, setNewItem] = useState('');

  const handleCheck = (id) => {
    const listItem = item.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  };

  const handleremove = (id) => {
    const listItem = item.filter((item) => item.id !== id);
    setItem(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  };

  const addTodo = (newItemText) => {
    if (!newItemText.trim()) return; // Prevent adding empty items
    const newToDoItem = {
      id: item.length ? item[item.length - 1].id + 1 : 1, // Generate new ID
      checked: false,
      item: newItemText
    };
    const updatedList = [...item, newToDoItem];
    setItem(updatedList);
    localStorage.setItem("todo_list", JSON.stringify(updatedList));
    setNewItem(''); // Clear the input field
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission behavior
    addTodo(newItem); // Add the new item
  };

  return (
    <div>
      <form className="addForm" onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          id="addItem"
          placeholder="Add Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          required
        />
        <button type="submit" aria-label="Add Item">
          <FaPlus className="plus" />
        </button>
      </form>
      <main>
      <ul className='list'>
    <div><div className="spark spark-1"></div>
<div className="spark spark-2"></div>
<div className="spark spark-3"></div>
<div className="spark spark-4"></div>
<div className="spark spark-5"></div>
<div className="spark spark-6"></div></div>
     {item.map((item) => (
      <li className='item' key={item.id}><input className='complete-btn' type="checkbox" 
      onChange={()=>handleCheck(item.id)}
      
      checked={item.checked} />
      <label style={(item.checked)?{textDecoration:'line-through'}:null} htmlFor="">{item.item}</label>
      <FaTrash role='button' onClick={()=>handleremove(item.id)} tabIndex={0} className='complete-btn' /></li>
     ))}
    </ul>
    </main>
    </div>
  );
};

export default Additem;
