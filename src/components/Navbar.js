import React from 'react'
import InputField from './InputField'



const icons = [
    { url: 'https://cdn.icon-icons.com/icons2/1659/PNG/512/3844435-home-house_110321.png', title: 'Home' },
    { url: 'https://cdn.icon-icons.com/icons2/1812/PNG/512/4213454-connections-media-network-share-social-structure_115377.png', title: 'My Network' },
    { url: 'https://cdn.icon-icons.com/icons2/2346/PNG/512/bell_alarm_icon_142909.png', title: 'Notifications' },
    { url: 'https://cdn.icon-icons.com/icons2/656/PNG/512/mail_email_message_electronic_online_web_icon-icons.com_59986.png', title: 'Messages' },
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
        
        {icons?.map((icon, i) => {
          return (<div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gridColumn: 'span 2',
            borderBottom:i === 0 ? '2px solid black' : 'none',
          }} key={i}>

            <div style={{ width: '20px', height: '20px' }}>
              <img src={icon.url} alt='logo' style={{
                 objectFit: 'contain',
                width: '100%',
                height: '100%',
              }} />
            </div>
            <p style={{
              fontSize: '12px',
              fontWeight:400,
              color:'#666666'
            }}>{icon.title}</p>
          </div>)
        })}
      </nav>
  )
}

export default Navbar