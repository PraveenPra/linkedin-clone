import PostInputField from '@/components/InputComponents/postInputField'
import Navbar from '@/components/Navbar'
import AsideJobs from '@/components/asideJobs'
import CreatePost from '@/components/createPost'
import JobsList from '@/components/jobsList'
import React from 'react'
import JOBS from '@/dummy-data/job-list';
import IconMenu from '@/components/MenuComponents/iconMenu'
import { BiEdit } from 'react-icons/bi'
import InputField from '@/components/InputComponents/inputField'

function Jobs() {
  return (  <>
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
        <IconMenu/>

<section>
    <InputField placeholder='Post a free job' icon={ <BiEdit color='#0a66c2'/>}/>
</section>
       
        {/* <ProfileSummary />

        <GroupsList data={GROUPS} /> */}
      </div>



      <main style={{

        // padding: '20px 0px 0px 0px',given this to children
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        <div style={{
         background: '#fff', padding: '16px', borderRadius: '8px', width: '100%',
          border: '1px solid rgba(140, 140, 140,0.3)',
        }}>
          
            <PostInputField />
          
                      <CreatePost />

        </div>
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
          btnText="Get started" />

        <AsideJobs
          title="Job seeker guidance"
          actionTitle="I want to improve my resume"
          description="Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity."
          btnText="Show more" />
      </aside>

    </div>
  </>)
}

export default Jobs