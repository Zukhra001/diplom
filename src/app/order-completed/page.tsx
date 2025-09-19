'use client';
import Companies from '@/components/Companies'
import MainHeader from '@/components/MainHeader'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { GiCheckMark } from 'react-icons/gi'

const OrderCompleted = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            title: "Order Completed",
            current: " Order Completed",
            order_completed: "Your order is completed!",
            thank_you_message: "Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.",
            continue_shopping: "Continue Shopping"
        },
        ru: {
            title: "Заказ выполнен",
            current: " Заказ выполнен",
            order_completed: "Ваш заказ выполнен!",
            thank_you_message: "Спасибо за ваш заказ! Ваш заказ обрабатывается и будет выполнен в течение 3-6 часов. Вы получите подтверждение по электронной почте, когда ваш заказ будет выполнен.",
            continue_shopping: "Продолжить покупки"
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
        <>
        <div className='w-full relative'>
            <MainHeader title={currentTexts.title} current={currentTexts.current} prev='Home . Pages . ' />
            <div className='w-full px-10 lg:px-40 py-20 flex justify-center items-center'>
                <div className='w-[625px] flex flex-col items-center justify-center gap-8'>
                    <div className='size-16 rounded-full bg-[url("/fancytick.png")] flex justify-center items-center'>
                        <GiCheckMark size={35} className='text-pink' />
                    </div>
                    <h1 className='font-josefin-sans text-4xl font-bold text-navyBlue capitalize text-center'>{currentTexts.order_completed}</h1>
                    <p className='text-[#8D92A7] font-lato text-center'>{currentTexts.thank_you_message}</p>
                    <button className='bg-pink rounded-md font-josefin-sans px-8 text-white py-3'>{currentTexts.continue_shopping}</button>
                </div>
            </div>
            <Image src={"/clock.png"} className={'absolute md:top-[350px] lg:top-[400px] md:left-[70px] left-[150px] hidden md:block md:scale-75 lg:scale-100'} width={94} height={94} alt='clock' />
            <Image src={"/checklist.png"} className={'absolute md:bottom-10 lg:right-48 md:right-28 hidden md:block'} width={70} height={70} alt='clock' />
        </div>
        <Companies />
        </>
    )
}

export default OrderCompleted