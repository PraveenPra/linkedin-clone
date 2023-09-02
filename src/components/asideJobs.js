import React from 'react'

import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import {  FaUserAlt } from 'react-icons/fa';

function AsideJobs({title,actionTitle,btnText,description}) {
  return (
    <div style={{
        background: 'white',
        borderRadius: '8px',
        border: '1px solid rgba(140, 140, 140,0.3)',
      }}>
         <h3 style={{ padding: '20px 16px 0px 16px' }}>{title}</h3>
          <p style={{ padding: '0px 16px 2px 16px' }} className='plight'>Recommended based on your activity</p>

          <div style={{
            background: '#edf3f8', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '8px 16px', marginTop: '8px',gap:'8px'
          }}>
            <h3 className='plight' style={{
              color: '#333', flex: 1
            }}>{actionTitle}</h3>

            <div style={{
              padding: '8px', background: '#e7e2dc', borderRadius: '100%', width: '50px', height: '50px', display: 'flex',
              justifyContent: 'center', alignItems: 'center',
            }}>
              <FaUserAlt style={{ fontSize: '24px', color: '#788fa5' }} />
            </div>
          </div>

          <p className='plight' style={{ padding: '8px 16px',color:'#000' }}>{description}
          </p>


          <Link href='' style={{ display: 'flex', alignItems: 'center', justifyContent: "flex-start", gap: '4px', textDecoration: 'none', color: '#5e5e5e' ,marginBottom:'16px'}}>
            <h4 className='plight' style={{ paddingLeft: '16px' }}>{btnText}</h4>
            <span >
              <BsArrowRight style={{ fontWeight: '600' }} /> </span></Link>
    </div>
  )
}

export default AsideJobs