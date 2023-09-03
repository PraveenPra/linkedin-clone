import React from 'react'
import { HiPhoto } from 'react-icons/hi2';
import { BiCalendar } from 'react-icons/bi';
import { MdOutlineArticle } from 'react-icons/md';

function CreatePost() {
  return (<div style={{display:'flex',justifyContent:'space-around',alignItems:'center',padding:'8px 16px 0px 16px'}}>
    <div style={{ display: 'flex' }}>
      <div>
        <HiPhoto color='#378fe9' fontSize={18} />
      </div>
      <p className='pbold' style={{marginLeft:'8px', textAlign: 'center', color: '#5e5e5e' }}>
        Media
      </p>
    </div>

    <div style={{ display: 'flex' }}>
      <div>
        <BiCalendar color='#c37d16' fontSize={18} />
      </div>
      <p className='pbold' style={{ marginLeft:'8px', textAlign: 'center', color:  '#5e5e5e' }}>
        Media
      </p>
    </div>

    <div style={{ display: 'flex' }}>
      <div>
        <MdOutlineArticle color='#e16745' fontSize={18} />
      </div>
      <p className='pbold' style={{marginLeft:'8px',  textAlign: 'center', color:  '#5e5e5e' }}>
        Media
      </p>
    </div>
    </div>)
}

export default CreatePost