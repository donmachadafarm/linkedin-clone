import "./Sidebar.css"
import {Avatar} from '@mui/material'
import RecentItem from "./RecentItem"

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/003/273/882/small/wave-blue-background-wallpaper-free-vector.jpg" alt="" />
            <Avatar className='sidebar__avatar' />
            <h2>Don Mac</h2>
            <h4>don.macadat@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>12</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar__statNumber'>12</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            <RecentItem topic="React" />
            <RecentItem topic="CSS" />
            <RecentItem topic="Web Dev" />
            <RecentItem topic="Programming" />
            <RecentItem topic="Software" />
        </div>
    </div>
  )
}

export default Sidebar