import React from 'react'
import Cards from '../Cards/Cards';
import RightSide from '../RigtSide/RightSide';
import Table from '../Table/Table';
import './Maindash.css';
const Maindash = () => {
  return (
    <div className="MainDash">
      <h1>DashBoard</h1>
     
    
      <Cards/>
      <h2>Recent Orders</h2>
      <Table/>
      
    </div>
  )
}

export default Maindash
