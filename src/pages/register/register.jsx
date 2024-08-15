import './register.scss'

import { Button, Input } from 'antd'
import logo from '../../assets/logo.svg'
import { useRef, useState } from 'react'
import UseUsers from '../../hooks/useUsers'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {

    const { userData } = UseUsers()
    const route = useNavigate()


    const nameRef = useRef()
    const phoneRef = useRef()
    const monthRef = useRef()
    const dayRef = useRef()
    const yearRef = useRef()
    const passwordRef = useRef()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [month, setMonth] = useState('')
    const [date, setDate] = useState('')
    const [year, setYear] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')



    const handleSubmit = () => {

        if (name && password) {


            const newUser = {
                id: userData.length > 0 ? userData.length + 1 : 1,
                name: name,
                userName: name,
                phone: phone,
                dateBirth: {
                    month: month,
                    day: date,
                    year: year
                },
                password: password
            };

            userData.push(newUser);

            console.log(userData);

            setName('');
            setPhone('');
            setMonth('');
            setDate('');
            setYear('');
            setPassword('');
            setError('');

            route("/");
        } else {
            alert('Please fill out both username and password');
        }

    }

    return (
        <div className="  h-[100vh] flex justify-center items-center">
            <div className="register">
                <div className="register_content">
                    <div className='register_content_image flex justify-center'>
                        <img src={logo} alt="logo" className="register_content_image_item text-center" />
                    </div>

                    <p className='register_content_title font-[700] text-[30px] mt-[45px] text-center leading-10 '>
                        Create an account
                    </p>

                    <form id='1'>
                        <div className='first_form'>

                            <Input
                                ref={nameRef}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Username'
                                className='input h-[70px] py-[23px] ps-[20px] mt-[36px]'
                                required
                            />
                            <Input
                                ref={phoneRef}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Phone number'
                                type='number'
                                className='input h-[70px] py-[23px] ps-[20px] my-[25px]'
                                required
                            />
                        </div>

                        <p className='register_content_title font-[700] text-[18px] mt-6 mb-[17px] text-center leading-10 '>
                            Date of birth
                        </p>

                        <div className="register_content_date flex items-center justify-between gap-[17px]">
                            <Input
                                ref={monthRef}
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                placeholder='Month'
                                type='number'
                                className='input h-[70px] py-[23px] w-[312px]'
                                required
                            />
                            <Input
                                ref={dayRef}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                placeholder='Day'
                                type='number'
                                className='input h-[70px] py-[23px] w-[159px]'
                                required
                            />
                            <Input
                                ref={yearRef}
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                placeholder='Year'
                                type='number'
                                className='input h-[70px] py-[23px] w-[159px]'
                                required
                            />
                        </div>

                        <div className='password'>

                            <Input
                                ref={passwordRef}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                type='Password'
                                className='input  h-[70px] py-[23px] ps-[20px] my-[25px]'
                                required
                            />
                        </div>
                    </form>

                    <div className='lastButton'>

                        <Button
                            type='primary'
                            form='1'
                            onClick={handleSubmit}
                            className='input text-white w-full h-12 py-[18px] rounded-[76px] bg-[#1DA1F2] text-[18px] font-[700] leading-[23.94px] text-center'
                        >Next</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

