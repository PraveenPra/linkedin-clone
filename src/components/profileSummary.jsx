import React from 'react'
import { FaBookmark } from 'react-icons/fa';

function ProfileSummary() {
  return (
    <section style={{
        background: 'white',
        borderRadius: '8px',
        padding: '20px 0px 0px 0px',
        width: 'fit-content',
        border: '1px solid rgba(140, 140, 140,0.3)',
      }}>
        <div style={{
          borderBottom: '1px solid rgb(140, 140, 140,0.3)',
           padding: '8px 16px'
        }}>
          <h3 className='pbold'>Welcome, MANIKANTA!</h3>
          <a style={{
            fontSize: '12px',
            color: 'blue'
          }}>Add a photo</a>
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