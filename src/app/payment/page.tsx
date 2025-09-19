'use client';
import MainHeader from '@/components/MainHeader'
import React, { useState, useEffect } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import Input from './Input'
import JustItem from '../cart/JustItem'
import Link from 'next/link'

const Payment = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            title: "Checkout",
            current: " Payment",
            contact_info: "Contact Information",
            already_account: "Already have an account? Log in",
            email_phone: "Email or mobile phone number",
            keep_updated: "Keep me up to date on news and excluive offers.",
            shipping_address: "Shipping Address",
            first_name: "First Name (Optional)",
            last_name: "Last Name",
            address: "Address",
            apartment: "Appartment, Suit etc (Optional)",
            city: "City",
            country: "Pakistan",
            postal_code: "Postal code",
            continue_shipping: "Continue Shipping",
            subtotal: "Subtotal",
            total: "Total",
            shipping_note: "Shipping and Taxes calculated at checkout.",
            place_order: "Place Order"
        },
        ru: {
            title: "Оформление заказа",
            current: " Оплата",
            contact_info: "Контактная информация",
            already_account: "Уже есть аккаунт? Войти",
            email_phone: "Email или номер телефона",
            keep_updated: "Держите меня в курсе новостей и эксклюзивных предложений.",
            shipping_address: "Адрес доставки",
            first_name: "Имя (необязательно)",
            last_name: "Фамилия",
            address: "Адрес",
            apartment: "Квартира, офис и т.д. (необязательно)",
            city: "Город",
            country: "Казахстан",
            postal_code: "Почтовый индекс",
            continue_shipping: "Продолжить доставку",
            subtotal: "Промежуточная сумма",
            total: "Итого",
            shipping_note: "Доставка и налоги рассчитываются при оформлении заказа.",
            place_order: "Разместить заказ"
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
    const images = ['/cart1.png', '/cart2.png', '/cart3.png', '/cart4.png', '/cart5.png']
    
    return (
        <div className='w-full'>
            <MainHeader title={currentTexts.title} current={currentTexts.current} prev='Home . Pages . Checkout . ' />
            <div className='w-full px-2 lg:px-40 py-20 grid grid-cols-4 lg:grid-cols-6'>
                <div className='col-span-4 flex flex-col gap-y-3 p-3 lg:p-10 bg-[#F8F8FD]'>
                    <div className='flex justify-between items-center py-4'>
                        <h2 className='font-josefin-sans font-bold text-lg text-navyBlue' >{currentTexts.contact_info}</h2>
                        <p className='font-lato font-medium text-[#C1C8E1]'>{currentTexts.already_account}</p>
                    </div>

                    <Input placeholder={currentTexts.email_phone} />
                    <div className='flex justify-start gap-1 pt-8 pb-10'>
                        <IoIosCheckmarkCircle className='text-xs text-green-600' />
                        <p className='text-xs text-gray-500 font-lato'>{currentTexts.keep_updated}</p>
                    </div>

                    <h2 className='font-josefin-sans font-bold text-lg text-navyBlue py-4' >{currentTexts.shipping_address}</h2>
                    <div className="grid grid-cols-2 gap-8">
                        <Input placeholder={currentTexts.first_name} />
                        <Input placeholder={currentTexts.last_name} />
                        <Input placeholder={currentTexts.address} span='2' />
                        <Input placeholder={currentTexts.apartment} span='2' />
                        <Input placeholder={currentTexts.city} span='2' />
                        <Input placeholder={currentTexts.country} />
                        <Input placeholder={currentTexts.postal_code} />
                    </div>
                    <div className='mt-10 mb-5 flex justify-start'>
                        <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3'>{currentTexts.continue_shipping}</button>
                    </div>
                </div>

                <div className='flex flex-col gap-10 col-span-full lg:col-span-2 p-4'>
                    <div className='flex flex-col gap-5'>
                        {images.map((image, index) => {
                            return (
                                <div key={index} className='border-b border-gray-300 pb-2 flex justify-between items-center'>
                                    <JustItem image={image} />
                                    <p className='font-semibold font-josefin-sans text-navyBlue'>$32.00</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='bg-[#F4F4FC] rounded-sm p-4'>
                        <div className='flex justify-between items-center pt-4 pb-2 border-b border-gray-400 py-4'>
                            <p className='font-lato font-semibold text-lg text-navyBlue'>{currentTexts.subtotal}</p>
                            <p className='font-lato text-lg text-navyBlue'>$219.00</p>
                        </div>
                        <div className='flex justify-between items-center pt-10 pb-2 border-b border-gray-400 py-4'>
                            <p className='font-lato font-semibold text-lg text-navyBlue'>{currentTexts.total}</p>
                            <p className='font-lato text-lg text-navyBlue'>$345.00</p>
                        </div>
                        <div className='flex justify-start gap-1 pt-8 pb-10'>
                            <IoIosCheckmarkCircle className='text-xs text-green-600' />
                            <p className='text-xs text-gray-500 font-lato'>{currentTexts.shipping_note}</p>
                        </div>
                        <Link href={"/order-completed"}><button className='bg-green-500 rounded-md text-white w-full py-3'>{currentTexts.place_order}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment