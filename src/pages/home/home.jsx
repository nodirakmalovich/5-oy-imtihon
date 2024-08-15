import './home.scss'

import { Link } from "react-router-dom";

import customize from '../../assets/Customize.svg'
import dot from '../../assets/dot.svg'
import comment from '../../assets/comment.svg'
import retweet from '../../assets/retweet.svg'
import like from '../../assets/like.svg'
import exportIcon from '../../assets/export.svg'
import views from '../../assets/views.svg'

import UseUsers from "../../hooks/useUsers";
import { Button, Form, Input } from "antd";
import { useRef } from 'react'




export default function Home() {

    const { userData } = UseUsers()
    const tweetRef = useRef()


    function newTweet() {
        const newTweet = {
            id: userData[5].tweet.length + 1,
            content: tweetRef.current.input.value,
            createdAt: "2024-08-15T20:00:00Z",
            views: 0,
            likes: 0,
            retweets: 0,
            comments: 0,
        }

        userData[5].tweet.push(newTweet)

        console.log(userData[5].tweet)

        tweetRef.current.input.value = ''

    }

    return (
        <div className="home mx-[400px] pt-[20px] text-[24px] font-[700] border-e-[1px] border-s-[1px] border-[#D8D8D8] ">
            <div className="home_header flex items-center justify-between px-[20px] pb-[20px]">
                <Link to={"/home"} className="">Home</Link>
                <img src={customize} alt="customize" />
            </div>


            <div className="home_content">
                {
                    userData.slice(1, 11).map((user, index) => {
                        return (
                            <div key={index} className="border-t-[1px] border-[#D8D8D8] ">
                                <div className="px-[20px] pt-[11px] pb-[20px]">

                                    <div className="home_content_userContent flex justify-between items-start">
                                        <div className="flex gap-[15px]">
                                            <img className="rounded-[50%] w-[60px] h-[60px]" src={user.avatar} alt={user.name} />
                                            <div >
                                                <div className="home_content_userContent_name flex gap-[10px]">
                                                    <p className="font-[700] text-[20px]">
                                                        {user.name}
                                                    </p>
                                                    <p className="font-[400] text-[18px]">
                                                        @{user.userName}
                                                    </p>
                                                </div>

                                                <p className="font-[400] text-[18px]">
                                                    {user.tweet[0].content}
                                                </p>

                                                <div className="actions flex justify-between items-center mt-[22px]">
                                                    <div className="comment flex gap-[10px]">
                                                        <img src={comment} alt="comment" />
                                                        <p className="font-[400] text-[16px]">
                                                            {user.tweet[0].comments}
                                                        </p>
                                                    </div>

                                                    <div className="retweet flex gap-[10px]">
                                                        <img src={retweet} alt="retweet" />
                                                        <p className="font-[400] text-[16px]">
                                                            {user.tweet[0].retweets}
                                                        </p>
                                                    </div>

                                                    <div className="retweet flex gap-[10px]">
                                                        <img src={like} alt="like" />
                                                        <p className="font-[400] text-[16px]">
                                                            {user.tweet[0].likes}
                                                        </p>
                                                    </div>


                                                    <div className="retweet flex gap-[10px]">
                                                        <img src={exportIcon} alt="exportIcon" />

                                                    </div>

                                                    <div className="retweet flex gap-[10px]">
                                                        <img src={views} alt="views" />
                                                        <p className="font-[400] text-[16px]">
                                                            {user.tweet[0].views}
                                                        </p>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <img src={dot} alt="dot" />
                                    </div>

                                </div>

                            </div>

                        )
                    })
                }
            </div>


            <div className="newTweet my-[30px] mx-[25px]">
                <Form className="flex gap-[30px]">
                    <Input ref={tweetRef} className="rounded-[30px]" size="large" placeholder="New tweet" />
                    <Button onClick={newTweet} className="rounded-[30px]" size="large" type="primary">Tweet</Button>
                </Form>
            </div>
        </div>
    )
}