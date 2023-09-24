import TwoColumnLayout from '@/components/Layouts/TwoColumnLayout'
import IconMenu from '@/components/MenuComponents/iconMenu'
import BanneredImage from '@/components/ImageComponents/banneredImage'
import React from 'react'
import sx from './my-network.module.css'
import { CgUserAdd } from 'react-icons/cg';
import EmptyAvatar from '@/components/ImageComponents/emptyAvatar';
import ConnectionItem from '@/components/connectionItem';
import GroupItem from '@/components/groupItem';
function MyNetwork() {
  return (
    <div>

    </div>
  )
}

export default MyNetwork

const groupsData = [
  {
    name: "Test automation",
    count: "211,330",
    profileImage: "https://source.unsplash.com/random/200x200/?logo&1",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&1"
  },
  {
    name: "Javascript",
    count: "450,230",
    profileImage: "https://source.unsplash.com/random/200x200/?logo&2",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&2"
  },
  {
    name: "Geeks for Geeks",
    count: "20,570",
    profileImage: "https://source.unsplash.com/random/200x200/?profile&3",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&3"
  },
  {
    name: "Machine learning",
    count: "906,380",
    profileImage: "https://source.unsplash.com/random/200x200/?logo&4",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&4"
  },
]

const connectionData = [
  {
    name: "Aditya R",
    role: "AI Intern",
    mutualConnections: 13,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&1",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&1"
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    mutualConnections: 8,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&2",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&2"
  },
  {
    name: "Jane Smith",
    role: "Data Scientist",
    mutualConnections: 5,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&3",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&3"
  },
  {
    name: "Michael Johnson",
    role: "Product Manager",
    mutualConnections: 20,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&4",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&4"
  },
  {
    name: "Sarah Davis",
    role: "UX Designer",
    mutualConnections: 15,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&5",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&5"
  },
  {
    name: "David Lee",
    role: "Data Analyst",
    mutualConnections: 7,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&6",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&6"
  },
  {
    name: "Emily White",
    role: "Marketing Specialist",
    mutualConnections: 11,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&7",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&7"
  },
  {
    name: "Alex Wilson",
    role: "Frontend Developer",
    mutualConnections: 9,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&8&9",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&8&9"
  },
  {
    name: "Olivia Brown",
    role: "Project Manager",
    mutualConnections: 14,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&9",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&9"
  },
  {
    name: "Daniel Clark",
    role: "Software Architect",
    mutualConnections: 18,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&10",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&10"
  },
  {
    name: "Sophia Martinez",
    role: "Data Engineer",
    mutualConnections: 6,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&11",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&11"
  },
  {
    name: "Matthew ",
    role: "Sales Manager",
    mutualConnections: 12,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&12",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&12"
  },
  {
    name: "Ella Thomas",
    role: "Graphic Designer",
    mutualConnections: 10,
    profileImage: "https://source.unsplash.com/random/200x200/?profile&13",
    bannerImage: "https://source.unsplash.com/random/1024x768/?banner&13"
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

  const second = <>
    <div className={sx.container}>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', margin: '16px 0'
      }}>
        <p className={sx.gridHeaderText}>People you may know from BMS Institute of Technology and Management</p>
        <button style={{ outline: 'transparent', border: 'none' }}>See all</button>
      </div>


      <section className={sx.connGrid}>

        {connectionData?.map((item, i) => {
          return <ConnectionItem key={i} data={item} />
        })}
      </section>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', margin: '16px 0'
      }}>
        <p className={sx.gridHeaderText}>Groups you may be interested in</p>
        <button style={{ outline: 'transparent', border: 'none' }}>See all</button>
      </div>

      <section className={sx.connGrid}>

        {groupsData?.map((item, i) => {
          return <GroupItem key={i} data={item} />
        })}
      </section>
    </div>
  </>;

  return (
    <TwoColumnLayout
      first={first}
      second={second}>{page}</TwoColumnLayout>
  )
}