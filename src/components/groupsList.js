import React from 'react'

import { RiTeamLine } from 'react-icons/ri';

function GroupsList({data}) {
    return (
        <section style={{
            background: 'white',
            borderRadius: '8px',
            padding: '20px 0px 0px 0px',
            width: '100%',
            border: '1px solid rgba(140, 140, 140,0.3)',
        }}>
            <p className='pbold' style={{paddingLeft:'16px'}}>Recent</p>

            {data?.map((item, i) => {
                return <div key={i} style={{ padding: '4px 16px', display: 'flex', gap: '8px', alignItems: 'center', }}>
                    <RiTeamLine style={{ width: '14px', height: '14px', color: '#5e5e5e' }} />
                    <a className='alight' style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        // maxWidth: '100%',
                    }}>{item.text}</a>
                </div>
            })}

            <div style={{ padding: '8px 0px', textAlign:'center', borderTop: '1px solid rgb(140, 140, 140,0.3)',}}>

                <a style={{}}>Discover more</a>
            </div>
        </section>
    )
}

export default GroupsList