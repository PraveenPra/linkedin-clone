import PostInputField from '@/components/InputComponents/postInputField'
import Navbar from '@/components/NavComponents/Navbar'
import AsideJobs from '@/components/asideJobs'
import CreatePost from '@/components/createPost'
import JobsList from '@/components/jobsList'
import React from 'react'
import JOBS from '@/dummy-data/job-list';
import IconMenu from '@/components/MenuComponents/iconMenu'
import { BiEdit } from 'react-icons/bi'
import InputField from '@/components/InputComponents/inputField'
import ThreeColumnLayout from '@/components/Layouts/ThreeColumnLayout'

function Jobs() {

  return (<>
  </>)
}

export default Jobs

Jobs.getLayout = function getLayout(page) {

  const first = <div style={{
    // position: 'fixed',
    position: 'sticky',
    top: 68,
  }}>
    <IconMenu />

    <section style={{ marginTop: '16px' }}>
      <InputField placeholder='Post a free job' icon={<BiEdit color='#0a66c2' />} />
    </section>
  </div>;


  const second = <>
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
  </>;

  const third = <>
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
  </>;

  return (
    <ThreeColumnLayout
      first={first}
      second={second}
      third={third}>
      {page}
    </ThreeColumnLayout>
  )
}