import React from 'react'
import {  CgUserAdd } from 'react-icons/cg';
import BanneredImage from './ImageComponents/banneredImage';
import EmptyAvatar from './ImageComponents/emptyAvatar';
import { TbCurlyLoop } from 'react-icons/tb';

function ConnectionItem() {
  return (<div style={{
    background: 'white',
    borderRadius: '8px',
    // padding: '10px 0 10px 0',
    width: '100%',
    border: '1px solid rgba(140, 140, 140,0.3)',
    textAlign:'center'
  }}>
    <BanneredImage />

    <h3 style={{ padding: '0px 16px' }}>Aditya R</h3>
    <p style={{ padding: '0px 16px' }} className='plight'>AI Intern</p>

    <div style={{
      padding: '8px 16px 4px 16px',
      display:'flex',
      gap:'2px',
      alignItems:'center',
      justifyContent:'flex-start'
    }}>
      {/* <EmptyAvatar size={24}/> */}
      <TbCurlyLoop color='rgba(0,0,0,0.4)'/>
      <p style={{ textAlign:'left' }} className='ptiny'>13 mutual connections</p>
    </div>
    <button style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      gap:'8px',
      border:'1px solid #0a66c2',
      padding:'4px 0',
      width:'80%',
      borderRadius:'100px',
      margin:'4px 16px 8px 16px'
    }}>
      <span >
        <CgUserAdd style={{
      fontSize: '1em',
      color: '#0a66c2',
      fontWeight:600
    }} />
      </span>
      <p style={{color:'#0a66c2'}} className='pbold'>Connect</p>
    </button>
  </div>)
}

export default ConnectionItem