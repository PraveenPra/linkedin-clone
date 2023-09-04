
import { BsBookmarkFill,BsBellFill ,BsYoutube} from 'react-icons/bs'
import {BiTask} from 'react-icons/bi'
import {GrNotes} from 'react-icons/gr'
import {FaRegAddressCard} from 'react-icons/fa'
import {IoSettings} from 'react-icons/io5'

const ICONMENU = [
    {
        icon:<BsBookmarkFill/>,
        title:'My Jobs'
    },
    {
        icon:<BsBellFill/>,
        title:'Job alerts'
    },
    {
        icon:<BiTask/>,
        title:'Skill Assessments'
    },
    {
        icon:<GrNotes/>,
        title:'Interview prep'
    },
    {
        icon:<FaRegAddressCard/>,
        title:'Resume builder'
    },
    {
        icon:<BsYoutube/>,
        title:'Job seeker guidance'
    },
    {
        icon:<IoSettings/>,
        title:'Application settings'
    },
]

export default ICONMENU