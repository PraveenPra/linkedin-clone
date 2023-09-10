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

const connectionData = [
  {
    name: "Aditya R",
    role: "AI Intern",
    mutualConnections: 13,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&1",
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    mutualConnections: 8,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&2",
  },
  {
    name: "Jane Smith",
    role: "Data Scientist",
    mutualConnections: 5,
    profileImage: "https://source.unsplash.com/random/200x200/?profile",
  },
  {
    name: "Michael Johnson",
    role: "Product Manager",
    mutualConnections: 20,
    profileImage: "https://source.unsplash.com/random/200x200/?profile",
  },
  {
    name: "Sarah Davis",
    role: "UX Designer",
    mutualConnections: 15,
    profileImage: "https://source.unsplash.com/random/200x200/?profile",
  },
  {
    name: "David Lee",
    role: "Data Analyst",
    mutualConnections: 7,
    profileImage: "https://source.unsplash.com/random/200x200/?profile",
  },
  {
    name: "Emily White",
    role: "Marketing Specialist",
    mutualConnections: 11,
    profileImage: "https://source.unsplash.com/random/200x200/?profile",
  },
  {
    name: "Alex Wilson",
    role: "Frontend Developer",
    mutualConnections: 9,
    profileImage: "https://source.unsplash.com/random/200x200/?profile",
  },
  {
    name: "Olivia Brown",
    role: "Project Manager",
    mutualConnections: 14,
    profileImage: "https://source.unsplash.com/random/200x200/?profile",
  },
  {
    name: "Daniel Clark",
    role: "Software Architect",
    mutualConnections: 18,
    profileImage: "https://source.unsplash.com/random/200x200/?profile",
  },
  {
    name: "Sophia Martinez",
    role: "Data Engineer",
    mutualConnections: 6,
    profileImage: "https://source.unsplash.com/random/200x200/?profile",
  },
  {
    name: "Matthew Anderson",
    role: "Sales Manager",
    mutualConnections: 12,
    profileImage: "https://source.unsplash.com/random/200x200/?profile",
  },
  {
    name: "Ella Thomas",
    role: "Graphic Designer",
    mutualConnections: 10,
    profileImage: "https://source.unsplash.com/random/200x200/?profile",
  },
];

MyNetwork.getLayout = function getLayout(page) {

  const first = <div style={{
    // position: 'fixed',
    position: 'sticky',
    top: 0,
  }}>
    <IconMenu />
  </div>;

  const second = <section style={{
    background: 'white',
    borderRadius: '8px',
    padding: '10px 16px 10px 16px',
    // width: '100%',
    border: '1px solid rgba(140, 140, 140,0.3)',
    display:'grid',
    gap:'8px',
    gridTemplateColumns:'repeat(4,1fr)',
  }}>

{connectionData?.map((item,i)=>{
  return <ConnectionItem key={i} data={item}/>
})}
  </section>;

  return (
    <TwoColumnLayout
      first={first}
      second={second}>{page}</TwoColumnLayout>
  )
}