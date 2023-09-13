import React from 'react'
import {  CgUserAdd } from 'react-icons/cg';
import BanneredImage from './ImageComponents/banneredImage';
import EmptyAvatar from './ImageComponents/emptyAvatar';
import { TbCurlyLoop } from 'react-icons/tb';

function GroupItem({data}) {
  const {name,count,profileImage,bannerImage} = data

  return (<div style={{
    background: 'white',
    borderRadius: '8px',
    // padding: '10px 0 10px 0',
    width: '100%',
    border: '1px solid rgba(140, 140, 140,0.3)',
    textAlign:'center'
  }}>
    <BanneredImage url={profileImage} bannerUrl={bannerImage} size={6}/>

    <h3 style={{ padding: '0px 16px',marginTop:'20px' }}>{name}</h3>
    <p style={{ padding: '0px 16px' }} className='plight'>{count} members</p>

    <button style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      gap:'8px',
      border:'1px solid #0a66c2',
      padding:'4px 0',
      width:'80%',
      borderRadius:'100px',
      margin:'18px 16px 8px 16px'
    }}>
     
      <p style={{color:'#0a66c2'}} className='pbold'>Join</p>
    </button>
  </div>)
}

export default GroupItem