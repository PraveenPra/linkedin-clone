import { Inter } from 'next/font/google'
import sx from '@/styles/Home.module.css'
import InputField from '@/components/InputField'
import Navbar from '@/components/Navbar'
import { RiTeamLine } from 'react-icons/ri';
import { FaBookmark } from 'react-icons/fa';
import ProfileSummary from '@/components/profileSummary';
import GroupsList from '@/components/groupsList';

const inter = Inter({ subsets: ['latin'] })

const jobs = [
  {
    title: 'Js',
    company: 'ihdw',
    location: 'erferg',
    posted: '2hr ago'
  },
  {
    title: 'Js',
    company: 'ihdw',
    location: 'erferg',
    posted: '2hr ago'
  },
  {
    title: 'Js',
    company: 'ihdw',
    location: 'erferg',
    posted: '2hr ago'
  },
  {
    title: 'Js',
    company: 'ihdw',
    location: 'erferg',
    posted: '2hr ago'
  },
  {
    title: 'Js',
    company: 'ihdw',
    location: 'erferg',
    posted: '2hr ago'
  },
]
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
          display:'flex',
          flexDirection:'column',
          gap:'8px',
        }}>
          <ProfileSummary/>

         <GroupsList/>
        </div>
       


        <main style={{
          background: 'white',
          borderRadius: '8px',
          padding: '20px 16px 0px 16px',
        }}>

          <h2 style={{
            fontSize: '18px',
            lineHeight: '14px'
          }}>Recommended for you</h2>
          <p style={{
            fontSize: '14px',
            lineHeight: '8px'
          }}>Based on your profile and search history</p>

          {jobs?.map((j, i) => {
            return <div key={i} style={{
              marginTop: '16px',
              display: 'grid',
              gridTemplateColumns: '1fr 8fr 1fr',
              // gridTemplateRows: '1fr 1fr',
              borderBottom: '1px solid #eeedea',
              paddingBottom: '8px'
            }}>

              <div style={{}}>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  // gridColumn: 1 / 2,
                  padding: '8px '
                }}>
                  <img src='https://media.licdn.com/dms/image/C560BAQG6KMZp1zAiTA/company-logo_100_100/0/1578021573435?e=1700092800&v=beta&t=VQgH-gRrIviYOcsGq_QQCTOuJnSRYDPQ_ly_a-IR3Lw' alt='logo' style={{
                    //  objectFit: 'cover',
                    width: '100%',
                    maxHeight: '100%'
                  }} />
                </div>

              </div>

              <div style={{}}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontSize: '16px',
                    lineHeight: '8px',
                    color: 'blue'
                  }}>React Js Developer </h3>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '20px'
                  }}>Uplers</p>
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '20px'
                  }}>India (Remote)</p>

                  <p style={{
                    fontSize: '12px',
                    color: 'green',
                    lineHeight: '20px',
                    fontWeight: 500,
                    marginTop: '16px'
                  }}>3 hrs ago</p>
                </div>
              </div>


              <div style={{}}>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  // gridColumn: 1 / 2,
                  width: '70%', height: '70%',
                  padding: '8px '
                }}>
                  <img src='https://cdn.icon-icons.com/icons2/3138/PNG/512/bookmark_save_storage_basic_icon_192482.png' alt='logo' style={{
                    //  objectFit: 'cover',
                    width: '100%',
                    maxHeight: '100%'
                  }} />
                </div>

              </div>
            </div>
          })
          }

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
