import { Inter } from 'next/font/google'
import sx from '@/styles/Home.module.css'
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
import EmptyAvatar from '@/components/ImageComponents/emptyAvatar';
import CreatePost from '@/components/createPost';
import PostInputField from '@/components/InputComponents/postInputField';
import ThreeColumnLayout from '@/components/Layouts/ThreeColumnLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    </>
  )
}



Home.getLayout = function getLayout(page) {

  const first = <>
    <ProfileSummary />

    <GroupsList data={GROUPS} />
  </>;


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