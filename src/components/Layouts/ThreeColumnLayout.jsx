import React from 'react'
import Navbar from '../NavComponents/Navbar'
import sx from './ThreeColumnLayout.module.scss'

function ThreeColumnLayout({ first, second, third }) {
    return (<>
        <Navbar />
        <div className={sx.container}>

            <div className={sx.first}>
                {first}
            </div>


            <main className={sx.second}>
                {second}
            </main>

            <aside className={sx.third}>
                {third}
            </aside>

        </div>
    </>)
}

export default ThreeColumnLayout