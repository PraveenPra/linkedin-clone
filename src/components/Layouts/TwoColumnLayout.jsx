import React from 'react'
import Navbar from '../NavComponents/Navbar'
import sx from './TwoColumnLayout.module.scss'

function TwoColumnLayout({ first, second}) {
  return (<>
    <Navbar />
    <div className={sx.container}>

        <div className={sx.first}>
            {first}
        </div>


        <main className={sx.second}>
            {second}
        </main>
        </div>
</>)
}

export default TwoColumnLayout