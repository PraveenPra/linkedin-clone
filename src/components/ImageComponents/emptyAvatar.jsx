import React from 'react'
import {  FaUserAlt } from 'react-icons/fa';

function EmptyAvatar() {
  return ( <div style={{
    padding: '8px', background: '#e7e2dc', borderRadius: '100%', width: '50px', height: '50px', display: 'flex',
    justifyContent: 'center', alignItems: 'center',
  }}>
    <FaUserAlt style={{ fontSize: '24px', color: '#788fa5' }} />
  </div>)
}

export default EmptyAvatar