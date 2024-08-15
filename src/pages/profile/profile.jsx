import './profile.scss'

import { Button } from 'antd'
import arrow from '../../assets/Arrow.svg'
import location from '../../assets/location.svg'
import calendar from '../../assets/calendar.svg'
import UseUsers from '../../hooks/useUsers'
import pin from '../../assets/pin.svg'
import { useNavigate } from 'react-router-dom'

export default function Profile() {


    const { userData } = UseUsers()

    const route = useNavigate()

    function handleHome() {
        route('/home')
    }


    return (
        <div className="profile h-[100vh] home mx-[400px] pt-[20px] text-[24px] font-[700] border-e-[1px] border-s-[1px] border-[#D8D8D8] ">

            <div className="profile_header ps-[31px] pb-[15px]">
                <div className='flex gap-[30px]'>
                    <img onClick={handleHome} src={arrow} alt="arrow" />

                    <div>
                        <p className='font-[700] text-[20px]'>
                            {userData[5].name}
                        </p>
                        <p className='font-[400] text-[16px]'>1,070 Tweets</p>
                    </div>
                </div>
            </div>

            <div className="profile_main">
                <div className="profile_main_banner h-[280px] px-[10px] flex items-center justify-center bg-[#01374d] relative">
                    <p className='text-white font-[700] text-[50px]'>
                        {userData[5].name}
                    </p>

                    <img className='absolute bottom-[-75px] w-[150px] h-[150px] rounded-[50%] left-[25px] border-[2px] border-white' src={userData[5].avatar} alt={userData[5].name} />

                    <Button size='large' className='text-[18px] font-semibold rounded-[20px] px-[15px] py-[10px] border-[#00000066] absolute bottom-[-60px] right-[25px]'>Edit profile</Button>
                </div>
            </div>

            <div className="profile_info px-[26px] mt-[90px]">
                <p className='font-[700] text-[24px]'>
                    {userData[5].name}
                </p>
                <p className='font-[400] text-[16px]'>
                    @{userData[5].userName}
                </p>
                <p className='font-[400] text-[16px] mt-[15px]'>
                    {userData[5].job}
                </p>

                <div className="profile_info_description mt-[15px] flex items-center justify-between">

                    <div className="flex gap-[10px] items-center">
                        <img src={location} alt="location" />
                        <p className='font-[400] text-[18px]'>
                            {
                                userData[5].location
                            }
                        </p>
                    </div>

                    <div className="flex gap-[10px] items-center">
                        <a href='#' className='font-[400] text-[18px]'>
                            {
                                userData[5].telegram
                            }
                        </a>
                    </div>


                    <div className="flex gap-[10px] items-center">
                        <p className='font-[400] text-[18px]'>
                            {
                                userData[5].birthDate
                            }
                        </p>
                    </div>


                    <div className="flex gap-[10px] items-center">
                        <img src={calendar} alt="location" />
                        <p className='font-[400] text-[18px]'>
                            {
                                userData[5].joinedDate
                            }
                        </p>
                    </div>
                </div>

                <div className="profile_info_followers mt-[15px] flex">
                    <p className='font-[700] text-[18px]'>
                        {
                            userData[5].following
                        }
                        <span className='font-[400] text-[18px] ms-3'>Following</span>
                    </p>

                    <p className='font-[700] text-[18px] ms-5'>
                        {
                            userData[5].followers
                        }
                        <span className='font-[400] text-[18px] ms-3'>Followers</span>
                    </p>
                </div>
            </div>

            <div className="profile_tweets border-b-[1px] border-[#C4C4C4]">
                <ul className='profile_actions flex justify-between px-[50px] mt-10 font-[400] text-[18px]'>
                    <li className='hover:font-[700] cursor-pointer border-b-[5px] pb-[15px] border-transparent hover:border-[#1DA1F2]'>Tweets</li>
                    <li className='hover:font-[700] cursor-pointer border-b-[5px] pb-[15px] border-transparent hover:border-[#1DA1F2]'>Tweets & replies</li>
                    <li className='hover:font-[700] cursor-pointer border-b-[5px] pb-[15px] border-transparent hover:border-[#1DA1F2]'>Media</li>
                    <li className='hover:font-[700] cursor-pointer border-b-[5px] pb-[15px] border-transparent hover:border-[#1DA1F2]'>Likes</li>
                </ul>
            </div>

            <div className="flex gap-5 mx-[66px] my-[15px]">
                <img src={pin} alt="pin" />
                <p className='font-[600] text-[16px]'>
                    Pinned Tweet
                </p>
            </div>


        </div>
    )
}