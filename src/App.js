import React from 'react'
import DyCarList from './DyCarList'
import DyBikeList from './DyBikeList'
import DyMobileList from './DyMobileList'
import './App.css'

function App() {
  return (
    <div className='mainContainer'>
        <DyCarList />
        <DyBikeList />
        <DyMobileList />
    </div>
  )
}

export default App
