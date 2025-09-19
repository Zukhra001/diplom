'use client';
import React, { useState, useEffect } from 'react'

const Subscription = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            newsletter_title: "Get Latest Update By Subscribe Our Newslater",
            shop_now: "Shop Now"
        },
        ru: {
            newsletter_title: "Получайте последние обновления, подписавшись на нашу рассылку",
            shop_now: "Купить сейчас"
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
        <div className='w-full h-[460px] flex justify-center items-center bg-[url("/bg.png")] bg-center px-5 md:px-0'>
            <div className="flex flex-col gap-y-5 items-center justify-center w-[570px] text-center">
                <h1 className='font-josefin-sans font-bold text-3xl text-navyBlue'>{currentTexts.newsletter_title}</h1>
                <button className='bg-pink text-white font-josefin-sans font-semibold px-10 py-2 rounded-sm'>{currentTexts.shop_now}</button>
            </div>
        </div>
    )
}

export default Subscription