import React from 'react'

import {  FaUserAlt } from 'react-icons/fa';

function BanneredImage() {
  return (<div style={{

    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '3em 3em',
  }}>
    <div style={{
      background: '#a0b4b7',
      gridColumn: 'span 3',
      borderRadius: '8px 8px 0 0',
    }}>

    </div>



    <div style={{

      position: 'absolute',
      gridColumn: 2,
      transform: 'translate(20%,20%)',
      background: '#f5f7f9',
      padding: '1em',
      color: 'black',
      borderRadius: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '4em',
      height: '4em',
      border: '2px solid white'
    }}>
      <FaUserAlt style={{
        fontSize: '2em',
        color: 'black'
      }} />
    </div>

    <div style={{
      background: '#fff',
      gridColumn: 'span 3',
    }}>

    </div>
  </div>)
}

export default BanneredImage