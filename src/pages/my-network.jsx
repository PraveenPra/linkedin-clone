import TwoColumnLayout from '@/components/Layouts/TwoColumnLayout'
import IconMenu from '@/components/MenuComponents/iconMenu'
import BanneredImage from '@/components/ImageComponents/banneredImage'
import React from 'react'

import {  CgUserAdd } from 'react-icons/cg';
import EmptyAvatar from '@/components/ImageComponents/emptyAvatar';
import ConnectionItem from '@/components/connectionItem';
function MyNetwork() {
  return (
    <div>

    </div>
  )
}

export default MyNetwork


MyNetwork.getLayout = function getLayout(page) {

  const first = <div style={{
    position: 'fixed',
  }}>
    <IconMenu />
  </div>;

  const second = <section style={{
    background: 'white',
    borderRadius: '8px',
    padding: '10px 16px 10px 16px',
    width: '100%',
    border: '1px solid rgba(140, 140, 140,0.3)',
    display:'grid',
    gap:'8px',
    gridTemplateColumns:'repeat(4,1fr)',
  }}>

<ConnectionItem/>
<ConnectionItem/>
<ConnectionItem/>
<ConnectionItem/>
<ConnectionItem/>
<ConnectionItem/>
<ConnectionItem/>
    
  </section>;

  return (
    <TwoColumnLayout
      first={first}
      second={second}>{page}</TwoColumnLayout>
  )
}