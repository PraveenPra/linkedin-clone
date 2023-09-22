import React from 'react'
import Navbar from '../NavComponents/Navbar'

function TwoColumnLayout({ first, second}) {
  return (<>
    <Navbar />
    <div style={{
        margin: '24px 118px',
        display: 'grid',
        gridTemplateColumns: '265px auto',
        gridGap: '24px',
        paddingTop: '53px',
    }}>

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
        }}>
            {first}
        </div>


        <main style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
        }}>
            {second}
        </main>
        </div>
</>)
}

export default TwoColumnLayout