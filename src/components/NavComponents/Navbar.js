import React from 'react'
import InputField from '../InputComponents/searchInputField'
import sx from './Navbar.module.css'
import { BiSolidHome } from 'react-icons/bi';
import { FaUserGroup,FaBriefcase } from 'react-icons/fa6';
import {HiChatBubbleLeftEllipsis} from 'react-icons/hi2';
import { FaBell } from 'react-icons/fa';

import { useRouter } from 'next/router'

const icons = [
    { icon: <BiSolidHome/>, title: 'Home' ,link:'/'},
    { icon: <FaUserGroup/>, title: 'My Network' ,link:'/my-network'},
    { icon: <FaBriefcase/>, title: 'Jobs' ,link:'/jobs'},
    { icon: <HiChatBubbleLeftEllipsis/>, title: 'Messaging',link:'/messaging' },
    { icon: <FaBell/>, title: 'Notifications' ,link:'/notifications'},
  ]
  
const Navbar = () => {
  const router = useRouter()
  
  const isActive = (link) => router.pathname === link;

  return (
    <nav 
    className={sx.nav}
    >


        <div className={sx.imgContainer} >
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png' alt='logo' className={sx.logo} />
        </div>

          <div className={sx.search}>
        <InputField />
        </div>
        
        {icons?.map((item, i) => {
          const isActiveLink = isActive(item.link);
          return (<div className={sx.li} 
          key={i} 
          onClick={()=>router.push(item?.link)}
          >

            <div className={sx.optionIcon}>
             {item?.icon}
            </div>
            <p className={sx.optionName}>{item.title}</p>
          </div>)
        })}
      </nav>
  )
}

export default Navbar