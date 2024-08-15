import './right.scss'

import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

import setting from '../../assets/settings.svg'
import dot from '../../assets/dot.svg'
import UseUsers from "../../hooks/useUsers";


export default function RightSide() {

    const { userData } = UseUsers()

    return (
        <div className="right_side w-[400px] h-[100vh] fixed right-0 top-0 mt-5 z-40 overflow-auto">
            <div className="right_side_wrapper w-[80%] mx-auto">
                <Input
                    placeholder="Search Twitter"
                    prefix={<SearchOutlined style={{ color: '#5C6C79' }} />}
                    className="rounded-[31px] placeholder-gray-[#5C6C79] placeholder: text-[18px] placeholder: font-[400] bg-[#EFF3F4]"
                />

                <div className="right_side_wrapper_trends mt-5 bg-[#EFF3F4] p-[15px] rounded-[10px]">
                    <div className="right_side_wrapper_trends_header mt-5 flex justify-between">
                        <p className="font-[700] text-[24px]">
                            Trends for you
                        </p>

                        <img src={setting} alt="setting" className="cursor-pointer" />
                    </div>

                    <div className="right_side_wrapper_trends_menu mt-5 ">

                        <div className="texts flex flex-wrap">
                            <div className='flex w-full items-center justify-between'>
                                <div className="left_side_profile_info">
                                    <p className='font-[400] text-[16px] text-[#393B41]'>Trending in Germany </p>
                                    <p className='font-semibold text-[20px]'>Revolution</p>
                                </div>


                                <img className='ms-[42px]' src={dot} alt="dot" />
                            </div>

                            <p className='font-[400] text-[16px] text-[#393B41]'>50.4K Tweets </p>

                        </div>
                        <div className="texts flex flex-wrap mt-[15px]">
                            <div className='flex w-full items-center justify-between'>
                                <div className="left_side_profile_info">
                                    <p className='font-[400] text-[16px] text-[#393B41]'>Trending in Germany </p>
                                    <p className='font-semibold text-[20px]'>Revolution</p>
                                </div>


                                <img className='ms-[42px]' src={dot} alt="dot" />
                            </div>

                            <p className='font-[400] text-[16px] text-[#393B41]'>50.4K Tweets </p>

                        </div>
                        <div className="texts flex flex-wrap mt-[15px] mb-[30px]">
                            <div className='flex w-full items-center justify-between'>
                                <div className="left_side_profile_info">
                                    <p className='font-[400] text-[16px] text-[#393B41]'>Trending in Germany </p>
                                    <p className='font-semibold text-[20px]'>Revolution</p>
                                </div>


                                <img className='ms-[42px]' src={dot} alt="dot" />
                            </div>

                            <p className='font-[400] text-[16px] text-[#393B41]'>50.4K Tweets </p>

                        </div>

                        <a href="#" className='text-[18px] font-[400] text-[#1DA1F2] mt-[30px]'>Show more</a>
                    </div>
                </div>

                <div className="right_side_wrapper_likes bg-[#EFF3F4] p-[15px] rounded-[10px] mt-[20px]">
                    <div className="right_side_wrapper_trends_header mt-5 flex justify-between">
                        <p className="font-[700] text-[24px]">
                            You might like
                        </p>
                    </div>

                    {
                        userData.slice(1, 3).map((user, index) => {
                            return (
                                <div key={index} className="left_side_profile flex items-center justify-between  mt-[25px]">
                                    <div className='flex gap-[10px]'>
                                        <img className='rounded-[50%] w-[50px] h-[50px]' src={user.avatar} alt={user.name} />
                                        <div className="left_side_profile_info">
                                            <p className='font-semibold text-[16px]'>{user.name}</p>
                                            <p className='font-[400] text-[14px]'>@{user.userName}</p>
                                        </div>
                                    </div>

                                    <img className='ms-[42px]' src={dot} alt="dot" />
                                </div>
                            )
                        })
                    }
                    <div className="mt-[30px] pb-[20px]">

                        <a href="#" className='text-[18px] font-[400] text-[#1DA1F2] mt-[30px]'>Show more</a>
                    </div>

                </div>

                <div className="right_side_wrapper_terms p-[5px] mb-[30px]">

                    <ul className="font-[400] text-[16px] text-[#393B41] flex flex-wrap gap-2">
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Imprint</li>
                        <li>Ads Info</li>
                        <li>More ···</li>
                        <li>© 2021 Twitter, Inc.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}