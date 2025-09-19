'use client';
import React, { useState, useEffect } from 'react'
import { FaFacebookF, FaInstagramSquare, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            sign_up: "Sign Up",
            enter_email: "Enter Email Address...",
            contact_info: "Contact Info",
            categories: "Categories",
            customer_care: "Customer Care",
            pages: "Pages",
            all_rights: "Techryzer - All right reserved",
            
            // Categories
            laptops_computer: "Laptops & Computer",
            camera_photography: "Camera & Photography",
            smartphones_tablets: "Smartphones & Teblates",
            video_games: "Video Games & Consoles",
            waterproof_headphones: "Waterproof Headphones",
            
            // Customer Care
            my_account: "My Account",
            discount: "Discount",
            returns: "Returns",
            order_history: "Order History",
            order_tracking: "Order Tracking",
            
            // Pages
            blog: "Blog",
            browse_shop: "Browse the Shop",
            category: "Category",
            pre_built: "Pre Built Pages",
            visual_composer: "Visual Composer Elements",
            woocommerce: "Woocommerce Pages"
        },
        ru: {
            sign_up: "Подписаться",
            enter_email: "Введите email адрес...",
            contact_info: "Контактная информация",
            categories: "Категории",
            customer_care: "Служба поддержки",
            pages: "Страницы",
            all_rights: "Techryzer - Все права защищены",
            
            // Categories
            laptops_computer: "Ноутбуки и компьютеры",
            camera_photography: "Камеры и фотография",
            smartphones_tablets: "Смартфоны и планшеты",
            video_games: "Видеоигры и консоли",
            waterproof_headphones: "Водонепроницаемые наушники",
            
            // Customer Care
            my_account: "Мой аккаунт",
            discount: "Скидки",
            returns: "Возвраты",
            order_history: "История заказов",
            order_tracking: "Отслеживание заказов",
            
            // Pages
            blog: "Блог",
            browse_shop: "Просмотр магазина",
            category: "Категория",
            pre_built: "Готовые страницы",
            visual_composer: "Элементы Visual Composer",
            woocommerce: "Страницы Woocommerce"
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
        <div className='w-full h-auto px-5 lg:px-32 py-16 bg-skyBlue grid md:grid-cols-2 lg:grid-cols-5 gap-10'>
            <div className='flex flex-col gap-2 md:col-span-2'>
                <div className='logo text-[34px] font-bold font-josefin-sans text-black'>Hekto</div>
                <div className='grid grid-cols-6'>
                    <input 
                        type="text" 
                        className='bg-white px-3 py-2 col-span-4 text-gray-700 placeholder:text-gray-400 font-lato outline-none' 
                        placeholder={currentTexts.enter_email} 
                    />
                    <button className='bg-pink text-white col-span-2 px-3 py-2 rounded-r-md'>{currentTexts.sign_up}</button>
                </div>
                <p className='text-[#8A8FB9] font-lato text-sm'>{currentTexts.contact_info}</p>
                <p className='text-[#8A8FB9] font-lato text-sm'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>

            <div>
                <h6 className='text-xl font-semibold text-black font-josefin-sans'>{currentTexts.categories}</h6>
                <ul className='flex flex-col gap-3 text-[#8A8FB9] py-4'>
                    <li>{currentTexts.laptops_computer}</li>
                    <li>{currentTexts.camera_photography}</li>
                    <li>{currentTexts.smartphones_tablets}</li>
                    <li>{currentTexts.video_games}</li>
                    <li>{currentTexts.waterproof_headphones}</li>
                </ul>
            </div>

            <div>
                <h6 className='text-xl font-semibold text-black font-josefin-sans'>{currentTexts.customer_care}</h6>
                <ul className='flex flex-col gap-3 text-[#8A8FB9] py-4'>
                    <li>{currentTexts.my_account}</li>
                    <li>{currentTexts.discount}</li>
                    <li>{currentTexts.returns}</li>
                    <li>{currentTexts.order_history}</li>
                    <li>{currentTexts.order_tracking}</li>
                </ul>
            </div>

            <div>
                <h6 className='text-xl font-semibold text-black font-josefin-sans'>{currentTexts.pages}</h6>
                <ul className='flex flex-col gap-3 text-[#8A8FB9] py-4'>
                    <li>{currentTexts.blog}</li>
                    <li>{currentTexts.browse_shop}</li>
                    <li>{currentTexts.category}</li>
                    <li>{currentTexts.pre_built}</li>
                    <li>{currentTexts.visual_composer}</li>
                    <li>{currentTexts.woocommerce}</li>
                </ul>
            </div>
        </div>
        <div className='px-5 lg:px-40 py-5 bg-skyBlue flex justify-between items-center'>
            <p className='text-[#8A8FB9]'>{currentTexts.all_rights}</p>
            <div className="flex justify-end gap-2">
                <div className='flex justify-center items-center bg-navyBlue rounded-full size-5'>
                    <FaFacebookF color='white' size={12} />
                </div>
                <div className='flex justify-center items-center bg-navyBlue rounded-full size-5'>
                    <FaInstagramSquare color='white' size={12} />
                </div>
                <div className='flex justify-center items-center bg-navyBlue rounded-full size-5'>
                    <FaTwitter color='white' size={12} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer