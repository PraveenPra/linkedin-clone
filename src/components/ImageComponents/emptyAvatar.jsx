import React from 'react'
import {  FaUserAlt } from 'react-icons/fa';

function EmptyAvatar({size = 50,w = size,h=size}) {
  return ( <div style={{
    padding: '8px', background: '#e7e2dc', borderRadius: '100%', width: w+'px', height: h+'px', display: 'flex',
    justifyContent: 'center', alignItems: 'center',
  }}>
    <FaUserAlt style={{ fontSize: '24px', color: '#788fa5' }} />
  </div>)
}

export default EmptyAvatar