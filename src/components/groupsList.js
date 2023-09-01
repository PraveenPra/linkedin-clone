import React from 'react'

import { RiTeamLine } from 'react-icons/ri';


const DATA = [
    {
        text: 'UI/UX User experience'
    },
    {
        text: 'Frontend Development Community'
    },
    {
        text: 'Product Design Enthusiasts'
    },
    {
        text: 'Data Science and Analytics Forum'
    },
    {
        text: 'Software Engineering Network'
    },
    {
        text: 'Digital Marketing Professionals'
    },
    {
        text: 'AI and Machine Learning Enthusiasts'
    },
    {
        text: 'Entrepreneurship & Startups'
    },
    {
        text: 'Graphic Design Creative Hub'
    },
    {
        text: 'Healthcare Innovators Network'
    },
    {
        text: 'Finance and Investment Professionals'
    }
];


function GroupsList() {
    return (
        <section style={{
            background: 'white',
            borderRadius: '8px',
            padding: '20px 0px 0px 0px',
            width: '100%',
            border: '1px solid rgba(140, 140, 140,0.3)',
        }}>
            <p className='pbold' style={{paddingLeft:'16px'}}>Recent</p>

            {DATA?.map((item, i) => {
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