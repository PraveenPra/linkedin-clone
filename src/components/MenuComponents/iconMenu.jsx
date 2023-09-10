import ICONMENU from '@/dummy-data/icon-menu-list'
import React from 'react'


function IconMenu() {
    return (
        <section style={{
            background: 'white',
            borderRadius: '8px',
            padding: '10px 0 10px 0',
            width: '100%',
            border: '1px solid rgba(140, 140, 140,0.3)',
            
        }}>
            {ICONMENU?.map((item,i)=>{
                return (
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' ,
                    padding:'10px 16px',color:'#404040'}}>
                   {item.icon}
                    <h4 className='pbold'>{item.title}</h4>
                </div>
                )
            })}
           
        </section>
    )
}

export default IconMenu