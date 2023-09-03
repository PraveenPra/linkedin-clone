import React from 'react'
import EmptyAvatar from '../ImageComponents/emptyAvatar'

function PostInputField() {
  return (
    <div style={{
        display: 'flex', gap: '8px',
    }}>
         <EmptyAvatar />

<input type='text' placeholder='Start a post' style={{
  height: '50px', padding: '8px', borderRadius: '50px', flex: 1,
  border: '1px solid #b2b2b2', color: '#5e5e5e'
}} />
    </div>
  )
}

export default PostInputField