import React from 'react'
import { FaBookmark } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import Link from 'next/link';

function ProfileSummary() {
  return (
    <section style={{
      background: 'white',
      borderRadius: '8px',
      padding: '0px 0px 0px 0px',
      width: '100%',
      border: '1px solid rgba(140, 140, 140,0.3)',
    }}>

      <div style={{

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

        </div>



        <div style={{

          position: 'absolute',
          gridColumn: 2,
          transform: 'translate(20%,20%)',
          background: '#f5f7f9',
          padding: '1em',
          color: 'black',
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '4em',
          height: '4em',
          border: '2px solid white'
        }}>
          <BsFillCameraFill style={{
            fontSize: '2em',
            color: 'black'
          }} />
        </div>

        <div style={{
          background: '#fff',
          gridColumn: 'span 3',
        }}>

        </div>
      </div>
      <div style={{
        borderBottom: '1px solid rgb(140, 140, 140,0.3)',
        padding: '8px 16px'
      }}>
        <h3 className='pbold' style={{textAlign:'center'}}>Welcome, MANIKANTA!</h3>
        <Link href='/' style={{
          textDecoration:'none'}}>
         <p style={{
          fontSize: '12px',
          color: 'blue',
          textAlign:'center',
        }}>
         Add a photo
         </p>       
        </Link>
        <a ></a>
      </div>
      <div style={{
        borderBottom: '1px solid rgb(140, 140, 140,0.3)',
        padding: '8px 16px'
      }}>
        <h3 className='pbold'>
          Analytics & tools
        </h3>
        <p>29 post impressions</p>
      </div>

      <div style={{
        borderBottom: '1px solid rgb(140, 140, 140,0.3)',
        padding: '8px 16px'
      }}>
        <p>Access exclusive tools & insights</p>
        <a style={{
          textDecoration: 'underline',
        }}>Get hired faster. Try Premium free.</a>
      </div>

      <div style={{ padding: '8px 16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <FaBookmark style={{ width: '14px', height: '14px', color: '#5e5e5e' }} />
        <a>My items</a>
      </div>
    </section>
  )
}

export default ProfileSummary