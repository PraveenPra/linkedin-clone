import React from 'react'

import { FaUserAlt } from 'react-icons/fa';

function BanneredImage({ url, bannerUrl }) {
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

      position: 'absolute',
      gridColumn: 2,
      transform: 'translate(20%,20%)',
      background: '#f5f7f9',
      padding: url == undefined && '1em',//if no image then use icon
      color: 'black',
      borderRadius: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '4em',
      height: '4em',
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