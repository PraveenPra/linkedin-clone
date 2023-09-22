import React from 'react'
import Navbar from '../NavComponents/Navbar'

function ThreeColumnLayout({ first, second, third }) {
    return (<>
        <Navbar />
        <div style={{
            margin: '24px 118px',
            display: 'grid',
            gridTemplateColumns: '225px auto 275px',
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

            <aside style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
            }}>
                {third}
            </aside>

        </div>
    </>)
}

export default ThreeColumnLayout