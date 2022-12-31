import React from 'react'
import './featured.css';

export const temp = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src='https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
            <div className='featuredTitle'>
                <h1>Apna Kitchen</h1>
                <h2>3 Plans</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://images.unsplash.com/photo-1585672840563-f2af2ced55c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
            <div className='featuredTitle'>
                <h1>Khana Khazana</h1>
                <h2>South Indian Plans</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://images.unsplash.com/photo-1616170687910-2edb17b633d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
            <div className='featuredTitle'>
                <h1>Mumma's Best</h1>
                <h2>Quality & Reasonable</h2>
            </div>
        </div>
    </div>
  )
}
