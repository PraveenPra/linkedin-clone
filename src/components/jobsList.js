import Link from 'next/link';
import React from 'react'

import { BsBookmark ,BsArrowRight} from 'react-icons/bs';

import { PiTargetBold } from 'react-icons/pi';

function JobsList({data,title,subtitle}) {
    return (<div style={{
        padding: '20px 0px 0px 0px', 
        border: '1px solid rgba(140, 140, 140,0.3)',
        background: 'white',
          borderRadius: '8px',}}>

        <h3 style={{padding:'0px 16px'}}>{title}</h3>
        <p style={{padding:'0px 16px'}} className='plight'>{subtitle}</p>

        {data?.map((job, i) => {
            return <div key={i} style={{
                marginTop: '16px',
                display: 'grid',
                gridTemplateColumns: '2fr 9fr 1fr',
                // gridTemplateRows: '1fr 1fr',
                borderBottom: '1px solid #eeedea',
                padding:'0px 0px 8px 8px',
                // paddingBottom: '8px',
            }}>

                <div >

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gridColumn: 1 / 2,
                        padding: '8px '
                    }}>
                        <img src={job.logoUrl} alt='title' style={{
                            objectFit: 'cover',
                            width: '100%',
                            maxHeight: '100%'
                        }} />
                    </div>

                </div>

                <div >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 className='pbold' style={{
                            color: '#146cc4'
                        }}>{job.title} </h3>
                        <p className='plight' style={{ color: '#000' }}>{job.company}</p>
                        <p className='plight'>{job.location}</p>
                        <p><PiTargetBold style={{ color: '#01754f' }} /> <span className='alight'>Actively recruiting</span>
                        </p>
                        <p style={{
                            fontSize: '12px',
                            color: 'green',
                            lineHeight: '20px',
                            fontWeight: 500,
                            marginTop: '4px'
                        }}>{job.postedTime}</p>
                    </div>
                </div>


                <div >
                    <BsBookmark style={{
                        width: '16px',
                        maxHeight: '16px'
                    }} />
                </div>
            </div>
        })
        }

<div style={{ padding: '8px 0px', textAlign:'center', borderTop: '1px solid rgb(140, 140, 140,0.3)',}}>

<Link href='' style={{display:'flex',alignItems:'center',justifyContent:"center",gap:'4px',textDecoration:'none',color:'#5e5e5e'}}>
    <p>Show more</p>
     <span >
     <BsArrowRight style={{fontWeight:'600'}}/> </span></Link>
</div>
    </div>)
}

export default JobsList