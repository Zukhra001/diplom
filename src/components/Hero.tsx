'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Hero = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')
    
    const texts = {
        en: {
            best_furniture: "Best Furniture For Your Castle....",
            new_furniture_collection: "New Furniture Collection\nTrends in 2020",
            furniture_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            shop_now: "Shop Now"
        },
        ru: {
            best_furniture: "Лучшая мебель для вашего замка....",
            new_furniture_collection: "Новые тренды мебели\nКоллекции 2020",
            furniture_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
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
        <div className='w-full lg:max-w-[1920px] h-auto md:h-[580px] bg-skyBlue px-5 lg:px-32 flex flex-col md:flex-row justify-between items-center relative'>
            {/* Текстовый блок */}
            <div className='flex w-full md:w-[55%] flex-col items-start gap-3 py-8 md:py-0 ml-0 md:ml-6 lg:ml-10'>
                <p className='text-pink font-josefin-sans font-bold text-sm'>{currentTexts.best_furniture}</p>
                <h1 className='font-bold text-black text-4xl lg:text-[48px] font-josefin-sans leading-tight whitespace-pre-line'>
                    {currentTexts.new_furniture_collection}
                </h1>
                <p className='text-offNavyBlue font-josefin-sans text-sm'>{currentTexts.furniture_description}</p>
                <Link href={"/shop"} className='px-6 md:px-4 py-2 text-center bg-pink text-white font-josefin-sans font-semibold text-sm'>{currentTexts.shop_now}</Link>
            </div>
            
            {/* Изображение кресла */}
            <div className='w-full md:w-[48%] flex justify-center md:justify-end items-center'>
                <Image src={"/offer.png"} className='w-[90%] max-w-[480px]' alt='chair' width={480} height={480} />
            </div>
            
            {/* Декоративные элементы */}
            <Image 
            alt='light' 
            src={"/light.png"} 
            height={250} 
            width={250} 
            className='hidden lg:block absolute top-0.5 -left-7' 
/>

        </div>
    )
}

export default Hero