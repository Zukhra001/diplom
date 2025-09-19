'use client';
import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import React, { useState, useEffect } from 'react'

const Login = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            title: "My Account",
            current: " My Account",
            login_title: "Login",
            login_subtitle: "Please login using account detail bellow.",
            email_placeholder: "Email Address",
            password_placeholder: "Password",
            forgot_password: "Forgot your password?",
            sign_in: "Sign In",
            create_account: "Don't have account? Create One"
        },
        ru: {
            title: "Мой аккаунт",
            current: " Мой аккаунт", 
            login_title: "Вход",
            login_subtitle: "Пожалуйста, войдите, используя данные своего аккаунта.",
            email_placeholder: "Адрес электронной почты",
            password_placeholder: "Пароль",
            forgot_password: "Забыли пароль?",
            sign_in: "Войти",
            create_account: "Нет аккаунта? Создайте его"
        }
    }

    useEffect(() => {
        const savedLang = localStorage.getItem('language') || 'en'
        setCurrentLanguage(savedLang)

        const handleLanguageChange = (event: CustomEvent) => {
            setCurrentLanguage(event.detail)
        }

        window.addEventListener('languageChanged', handleLanguageChange as EventListener)

        return () => {
            window.removeEventListener('languageChanged', handleLanguageChange as EventListener)
        }
    }, [])

    const currentTexts = texts[currentLanguage as keyof typeof texts]

    return (
        <div className='w-full'>
            <MainHeader title={currentTexts.title} prev='Home . Pages . ' current={currentTexts.current} />
            <div className='flex justify-center items-center w-full'>
                <div className='flex flex-col shadow-sm shadow-gray-500 rounded-md p-10 md:w-[545px] my-28'>
                    <div>
                        <h3 className='text-black font-josefin-sans text-4xl font-bold text-center'>{currentTexts.login_title}</h3>
                        <p className='text-gray-400 text-center font-lato'>{currentTexts.login_subtitle}</p>
                    </div>
                    <input type="text" className='bg-transparent mt-4 my-2 text-navyBlue placeholder:text-[
#C2C5E1] border border-[
#C2C5E1] outline-none w-full p-3' placeholder={currentTexts.email_placeholder} />
                    <input type="password" className='bg-transparent my-2 text-navyBlue placeholder:text-[
#C2C5E1] border border-[
#C2C5E1] outline-none w-full p-3' placeholder={currentTexts.password_placeholder} />
                    <p className='text-gray-400 text-left font-lato'>{currentTexts.forgot_password}</p>
                    <button className='bg-pink rounded-md font-josefin-sans px-8 text-white py-3 text-xl my-4'>{currentTexts.sign_in}</button>
                    <p className='text-gray-400 text-center mt-5 font-lato'>{currentTexts.create_account}</p>
                </div>
            </div>
            <Companies />
        </div>
    )
}

export default Login