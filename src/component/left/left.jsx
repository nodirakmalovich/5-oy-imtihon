import './left.scss'

import logo from '../../assets/logo.svg'
import home from '../../assets/home_fill.svg'
import explore from '../../assets/explore.svg'
import notification from '../../assets/notification.svg'
import message from '../../assets/messages.svg'
import bookmarks from '../../assets/bookmarks.svg'
import lists from '../../assets/lists.svg'
import profile from '../../assets/profile.svg'
import more from '../../assets/more.svg'
import dot from '../../assets/dot.svg'

import { Button } from 'antd'
import UseUsers from '../../hooks/useUsers'
import { useNavigate } from 'react-router-dom'


export default function LeftSide() {



    const actionsData = [
        {
            title: 'Home',
            photo: home,
        },
        {
            title: 'Explore',
            photo: explore,
        },
        {
            title: 'Notification',
            photo: notification,
        },
        {
            title: 'Message',
            photo: message,
        },
        {
            title: 'Bookmarks',
            photo: bookmarks,
        },
        {
            title: 'Lists',
            photo: lists,
        },
        {
            title: 'Profile',
            photo: profile,
        },
        {
            title: 'More',
            photo: more,
        },
    ]

    const route = useNavigate()

    function handleProfile() {
        route('/profile')
    }

    const { userData } = UseUsers()


    return (
        <div className="left_side w-[400px] h-[100vh] fixed  z-40 left-0 pt-[20px] px-[10px]">
            <div className="left_side_header w-full px-[10px] ">
                <img className='w-[40px] h-[33px]' src={logo} alt="logo" />
            </div>
            <div className="left_side_actions flex flex-wrap gap-[30px] mt-[50px] justify-start">
                {actionsData.map((item, index) => {
                    return (
                        <Button onClick={handleProfile} key={index} className='w-[70%] flex gap-5 items-center justify-start border-none shadow-none rounded-[20px] text-[18px] font-semibold'>
                            <img src={item.photo} alt={item.title} />
                            <p>{item.title}</p>
                        </Button>
                    )
                })}
                <Button type='primary' className='w-[80%] rounded-[27.5px] h-[55px] bg-[#1D9BF0] text-[18px] font-[700] '>Tweet</Button>
            </div>

            <div className="left_side_profile flex items-center justify-between  fixed bottom-[10px]">
                <div className='flex gap-[10px]'>
                    <img className='rounded-[50%] w-[50px] h-[50px]' src={userData[5].avatar} alt={userData[5].name} />
                    <div className="left_side_profile_info">
                        <p className='font-semibold text-[16px]'>{userData[5].name}</p>
                        <p className='font-[400] text-[14px]'>@{userData[5].userName}</p>
                    </div>
                </div>

                <img className='ms-[42px]' src={dot} alt="dot" />
            </div>
        </div>
    )
}