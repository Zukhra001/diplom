'use client';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaList } from 'react-icons/fa'
import { IoGrid } from 'react-icons/io5'

const StoreDatahandler = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            main_title: "Ecommerce Acceories & Fashion item",
            results_info: "About 9,620 results (0.62 seconds)",
            per_page: "Per Page:",
            sort_by: "Sort By:",
            best_match: "Best Match",
            all_results: "All Results",
            view: "View:"
        },
        ru: {
            main_title: "Аксессуары и модные товары для электронной коммерции",
            results_info: "Около 9,620 результатов (0.62 секунды)",
            per_page: "На странице:",
            sort_by: "Сортировать по:",
            best_match: "Лучшее совпадение",
            all_results: "Все результаты",
            view: "Вид:"
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
        <div className='w-full px-5 md:px-10 lg:px-40 py-5 lg:py-20 flex lg:flex-row flex-col justify-between items-center'>
            <div className=' flex flex-col items-start justify-start'>
                <h2 className='text-2xl font-bold font-josefin-sans text-offBlue'>{currentTexts.main_title}</h2>
                <p className='text-xs text-gray-400 font-normal font-lato'>{currentTexts.results_info}</p>
            </div>
            <div className='flex justify-start flex-wrap items-center gap-5'>
                <div className='flex items-center justify-start gap-2'>
                    <label htmlFor="perpage" className='text-offBlue font-lato'>{currentTexts.per_page}</label>
                    <input type="text" className='w-14 h-7 rounded-sm border border-gray-300 focus:border-navyBlue outline-none text-gray-700 px-2' />
                </div>
                <div className='flex items-center justify-start gap-2'>
                    <label htmlFor="perpage" className='text-offBlue font-lato font-medium'>{currentTexts.sort_by} </label>
                    <select className='h-7 rounded-sm border border-gray-300 focus:border-navyBlue outline-none text-gray-500'>
                        <option value="best">{currentTexts.best_match}</option>
                        <option value="all">{currentTexts.all_results}</option>
                    </select>
                </div>
                <div className='flex items-center justify-start gap-2'>
                    <label htmlFor="perpage" className='text-offBlue font-lato flex justify-start items-center gap-3'>{currentTexts.view} <Link href={"/shop"}><IoGrid size={15} className='text-navyBlue' /></Link>
                    <Link href={"/shop/grid"}><FaList size={15} className='text-navyBlue' /></Link>
                    </label>
                    <input type="text" className='w-14 h-7 rounded-sm border border-gray-300 focus:border-navyBlue outline-none text-gray-700 px-2' />
                </div>
            </div>
        </div>
    )
}

export default StoreDatahandler