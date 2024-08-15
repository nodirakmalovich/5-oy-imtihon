import { Button, Input } from 'antd'
import logo from '../../assets/logo.svg'
import './login.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import UseUsers from '../../hooks/useUsers';

export default function LogIn() {

    const { userData } = UseUsers()

    const router = useNavigate()

    const usernameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = () => {
        const username = usernameRef.current.input.value;
        const password = passwordRef.current.input.value;

        const isValidUser = userData.some(user =>
            user.userName === username && user.password === password
        );

        if (isValidUser) {
            router("/home")
        } else {
            alert("Invalid username or password");
        }

    }

    return (
        <div className="myContainer  h-[100vh] flex justify-center items-center">
            <div className="login w-[450px] mx-auto ">
                <div className="login_content">
                    <div className='login_content_image flex justify-center'>
                        <img src={logo} alt="logo" className="login_content_image_item text-center" />
                    </div>

                    <p className='login_content_title font-[900] text-[42px] mt-9'>
                        Log in to Twitter
                    </p>

                    <Input ref={usernameRef} placeholder='Username' className=' py-[23px] ps-[20px] mt-[36px]' />
                    <Input ref={passwordRef} placeholder='Password' type='Password' className=' py-[23px] ps-[20px] my-[25px]' />

                    <Button onClick={handleSubmit} type='primary' className='text-white w-full h-12 py-[18px] rounded-[76px] bg-[#1DA1F2] text-[18px] font-[700] leading-[23.94px] text-center'>Log In</Button>

                    <div className="login_content_actions flex justify-between items-center mt-10">
                        <a href="#" className='text-[18px] font-[400] text-[#1DA1F2]'>Forgot password?</a>

                        <Link to={'/register'} className='text-[18px] font-[400] text-[#1DA1F2]'>
                            Sign up to Twitter
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}