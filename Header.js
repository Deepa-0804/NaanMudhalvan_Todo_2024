import React from 'react'
import './index.css';


const Header = ({title}) => {
  return (
      <header className='header'>
        <h1 className='todo'>{title}</h1>
        </header>
  )
}
Header.defaultProps={
  title:"TO DO LIST"
}

export default Header
