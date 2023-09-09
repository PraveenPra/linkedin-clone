import ThreeColumnLayout from '@/components/Layouts/ThreeColumnLayout'
import React from 'react'

function MyNetwork() {
  return (
    <div>

    </div>
  )
}

export default MyNetwork


MyNetwork.getLayout = function getLayout(page){
    return (
        <ThreeColumnLayout 
        first={<h1>first</h1>}
        second={<h2>second</h2>}
    third={<h3>trd</h3>}>{page}</ThreeColumnLayout>
    )
}