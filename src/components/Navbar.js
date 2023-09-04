import React from 'react'
import InputField from './InputComponents/searchInputField'

import { BiSolidHome } from 'react-icons/bi';
import { FaUserGroup,FaBriefcase } from 'react-icons/fa6';
import {HiChatBubbleLeftEllipsis} from 'react-icons/hi2';
import { FaBell } from 'react-icons/fa';

const icons = [
    { icon: <BiSolidHome/>, title: 'Home' },
    { icon: <FaUserGroup/>, title: 'My Network' },
    { icon: <FaBriefcase/>, title: 'Jobs' },
    { icon: <HiChatBubbleLeftEllipsis/>, title: 'Messaging' },
    { icon: <FaBell/>, title: 'Notifications' },
  ]
  
const Navbar = () => {
  return (
    <nav style={{
        background: '#ffffff',
        padding: '0 118px',
        height: '53px',
        display: 'grid',
        gridTemplateColumns: ' repeat(24, 1fr)',
        // '53px 412px 52px 52px 52px 52px ',
        // gridTemplateRows: '1fr '
      }}>


        <div style={{
          display: 'flex',
          alignItems: 'center',
          gridColumn: 1 / 2,
          padding: '8px ',
          
        }}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png' alt='logo' style={{
            //  objectFit: 'cover',
            width: '100%',
            maxHeight: '100%'
          }} />
        </div>

          <div style={{gridColumn:'span 10'}}>
        <InputField />
        </div>
        
        {icons?.map((item, i) => {
          return (<div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gridColumn: 'span 2',
            borderBottom:i === 0 ? '2px solid black' : 'none',
          }} key={i}>

            <div style={{ width: '20px', height: '20px' }}>
             {item?.icon}
            </div>
            <p style={{
              fontSize: '12px',
              fontWeight:400,
              color:'#666666'
            }}>{item.title}</p>
          </div>)
        })}
      </nav>
  )
}

export default Navbar