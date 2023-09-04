import React from 'react'
import InputField from './InputComponents/searchInputField'

import { BiSolidHome } from 'react-icons/bi';
import { FaUserGroup,FaBriefcase } from 'react-icons/fa6';
import {HiChatBubbleLeftEllipsis} from 'react-icons/hi2';
import { FaBell } from 'react-icons/fa';

import { useRouter } from 'next/router'

const icons = [
    { icon: <BiSolidHome/>, title: 'Home' ,link:'/'},
    { icon: <FaUserGroup/>, title: 'My Network' ,link:'/'},
    { icon: <FaBriefcase/>, title: 'Jobs' ,link:'/jobs'},
    { icon: <HiChatBubbleLeftEllipsis/>, title: 'Messaging',link:'/' },
    { icon: <FaBell/>, title: 'Notifications' ,link:'/'},
  ]
  
const Navbar = () => {
  const router = useRouter()
  return (
    <nav style={{
        background: '#ffffff',
        padding: '0 118px',
        height: '53px',
        display: 'grid',
        gridTemplateColumns: ' repeat(24, 1fr)',
        zIndex:10,
        position:'fixed',
        top:0,
        left:0,
        right:0,
      }}>


        <div style={{
          display: 'flex',
          alignItems: 'center',
          gridColumn: 1 / 2,
          padding: '8px ',
          
        }} >
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
          }} key={i} onClick={()=>router.push(item?.link)}>

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