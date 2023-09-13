import React from 'react'

import { FaUserAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

function BanneredImage({ url, bannerUrl ,size=4}) {
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
      {bannerUrl !== undefined &&
        <img src={bannerUrl} alt='banner-pik' style={{
          width: '100%',
          height: '100%',
          borderRadius:'5px 5px 0 0'
        }} />}
    </div>

        <div style={{
      background: 'rgba(0,0,0,0.6)',
      color:'white',
      position: 'absolute',
      borderRadius:'100px',
      padding:'2px',
     top:10,
     right:10,
     display:'flex',
     alignItems:'center',
     justifyContent:'center'
        }}
      >
          <IoClose/>
        </div>

    <div style={{

      position: 'absolute',
      // gridColumn: 2,
      transform: 'translate(30%,10%)',
      background: '#f5f7f9',
      padding: url == undefined && '1em',//if no image then use icon
      color: 'black',
      borderRadius: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: size+'em',
      height: size+'em',
      border: '2px solid white'
    }}>
      {url !== undefined ?
        <img src={url} alt='profile-pik' style={{
          width: '100%',
          height: '100%',
          borderRadius: '100px'
        }} />
        :
        <FaUserAlt style={{
          fontSize: '2em',
          color: 'black'
        }} />}
    </div>

    <div style={{
      background: '#fff',
      gridColumn: 'span 3',
    }}>

    </div>
  </div>)
}

export default BanneredImage