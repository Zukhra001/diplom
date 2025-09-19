'use client';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const JustItem = ({image}: {image: string}) => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            product_name: "Ut diam consequat",
            color: "Color: ",
            color_value: "Brown",
            size: "Size: ",
            size_value: "XL"
        },
        ru: {
            product_name: "Ut diam consequat",
            color: "Цвет: ",
            color_value: "Коричневый",
            size: "Размер: ",
            size_value: "XL"
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
        <div className='flex flex-col md:flex-row justify-start items-center gap-5 p-1'>
            <Image src={image} width={83} height={87} alt='image' className='rounded-md object-cover' />
            <div className='flex flex-col'>
                <h2>{currentTexts.product_name}</h2>
                <div className='flex justify-start items-center'>
                    <p className='text-gray-400 hidden md:block'>{currentTexts.color}</p>
                    <span className='text-gray-500 font-semibold' title='color'>{currentTexts.color_value}</span>
                </div>
                <div className='flex justify-start items-center'>
                    <p className='text-gray-400 hidden md:block'>{currentTexts.size}</p>
                    <span className='text-gray-500 font-semibold' title='size'>{currentTexts.size_value}</span>
                </div>
            </div>
        </div>
    )
}

export default JustItem