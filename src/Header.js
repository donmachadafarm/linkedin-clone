import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124011.png" alt="" />

            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className="header__right">
            <HeaderOption title='Home' Icon={HomeIcon} />
            <HeaderOption title='My Network' Icon={SupervisorAccountIcon}/>
            <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
            <HeaderOption title='Messaging' Icon={ChatIcon} />
            <HeaderOption title='Notifications' Icon={NotificationsIcon} />
            <HeaderOption avatar="https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg" title="me" />
        </div>
    </div>
  )
}

export default Header