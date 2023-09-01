import { Inter } from 'next/font/google'
import sx from '@/styles/Home.module.css'
import InputField from '@/components/InputField'
import Navbar from '@/components/Navbar'
import { RiTeamLine } from 'react-icons/ri';
import { FaBookmark } from 'react-icons/fa';
import ProfileSummary from '@/components/profileSummary';
import GroupsList from '@/components/groupsList';
import JOBS from '@/dummy-data/job-list';
import GROUPS from '@/dummy-data/group-list';
import JobsList from '@/components/jobsList';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{
        margin: '24px 118px',
        display: 'grid',
        gridTemplateColumns: '225px auto 300px',
        gridGap: '24px',

      }}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          <ProfileSummary />

          <GroupsList data={GROUPS}/>
        </div>



        <main style={{
          
          // padding: '20px 0px 0px 0px',given this to children
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>

         <JobsList data={JOBS.slice(0, 3)}
          title="Recommended for you"
         subtitle='Based on your profile and search history'/>

         <JobsList data={JOBS.slice(3, 6)}
          title="Still Hiring"
          subtitle='Jobs you may have missed'/>
        </main>


        <aside style={{
          background: 'white',
          borderRadius: '8px',
          padding: '20px 16px 0px 16px'
        }}>l</aside>

      </div>
    </>
  )
}
