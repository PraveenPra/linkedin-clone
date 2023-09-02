import { Inter } from 'next/font/google'
import sx from '@/styles/Home.module.css'
import InputField from '@/components/InputField'
import Navbar from '@/components/Navbar'
import { RiTeamLine } from 'react-icons/ri';
import { FaBookmark, FaUserAlt } from 'react-icons/fa';
import ProfileSummary from '@/components/profileSummary';
import GroupsList from '@/components/groupsList';
import JOBS from '@/dummy-data/job-list';
import GROUPS from '@/dummy-data/group-list';
import JobsList from '@/components/jobsList';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import AsideJobs from '@/components/asideJobs';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{
        margin: '24px 118px',
        display: 'grid',
        gridTemplateColumns: '225px auto 275px',
        gridGap: '24px',

      }}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          <ProfileSummary />

          <GroupsList data={GROUPS} />
        </div>



        <main style={{

          // padding: '20px 0px 0px 0px',given this to children
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>

          <JobsList data={JOBS.slice(0, 3)}
            title="Recommended for you"
            subtitle='Based on your profile and search history' />

          <JobsList data={JOBS.slice(3, 6)}
            title="Still Hiring"
            subtitle='Jobs you may have missed' />
        </main>


        <aside style={{
           display: 'flex',
           flexDirection: 'column',
           gap: '8px',
        }}>
        <AsideJobs 
         title="Open to work"
         actionTitle="Show recruiters you are open to job opportunities"
         description="Get better job recommendations when you are #OpenToWork - you control who sees this."
         btnText="Get started"/>

         <AsideJobs 
         title="Job seeker guidance"
         actionTitle="I want to improve my resume"
         description="Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity."
         btnText="Show more"/>
        </aside>

      </div>
    </>
  )
}
