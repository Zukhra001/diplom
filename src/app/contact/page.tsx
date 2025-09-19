'use client';
import MainHeader from '@/components/MainHeader'
import Heading from '@/components/mini/Heading'
import React, { useState, useEffect } from 'react'
import { FaCircle } from 'react-icons/fa'
import { MdContacts, MdLocationCity, MdSupportAgent } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import Input from '../payment/Input'
import Image from 'next/image'

const Contact = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            title: "Contact Us",
            current: " Contact Us",
            
            // Information section
            info_about: "Information About Us",
            info_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.",
            
            // Contact ways
            contact_way: "Contact Way",
            tel_email: "Tel: (877)-121-8500",
            email_connect: "Email: connect@hakto.com", 
            support_forum: "Support Forum",
            support_hours: "Over for 24 hours",
            address_line1: "20 Margaret st, London",
            address_line2: "Great britain, 3NM98-LK",
            free_shipping: "Free Standard Shipping",
            all_orders: "on all orders",
            
            // Get in touch
            get_in_touch: "Get in Touch",
            touch_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.",
            your_name: "Your Name",
            your_email: "Your Email",
            subject: "Subject", 
            type_message: "Type Your Message",
            send_message: "Send Message"
        },
        ru: {
            title: "Контакты",
            current: " Контакты",
            
            // Information section
            info_about: "Информация о нас",
            info_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.",
            
            // Contact ways
            contact_way: "Способы связи",
            tel_email: "Тел: (877)-121-8500",
            email_connect: "Email: connect@hakto.com",
            support_forum: "Форум поддержки",
            support_hours: "Работаем 24 часа",
            address_line1: "20 Margaret st, London",
            address_line2: "Great britain, 3NM98-LK",
            free_shipping: "Бесплатная стандартная доставка",
            all_orders: "для всех заказов",
            
            // Get in touch
            get_in_touch: "Связаться с нами",
            touch_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.",
            your_name: "Ваше имя",
            your_email: "Ваш Email",
            subject: "Тема",
            type_message: "Введите ваше сообщение",
            send_message: "Отправить сообщение"
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
            <div className='py-10 px-5 md:px-10 lg:px-36 grid lg:grid-cols-2 gap-10 justify-between items-start'>
                <div className='flex flex-col items-start gap-4'>
                    <Heading text={currentTexts.info_about} />
                    <p className='font-lato text-[#8A8FB9]'>{currentTexts.info_description}</p>
                    <div className='flex justify-start items-center gap-3 text-2xl'>
                        <FaCircle color='#5625DF' />
                        <FaCircle color='#FF27B7' />
                        <FaCircle color='#37DAF3' />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <Heading text={currentTexts.contact_way} />
                    <div className='grid md:grid-cols-2 gap-5'>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='bg-[#5726DF] size-11 rounded-full flex justify-center items-center text-white text-2xl'>
                                <MdContacts />
                            </div>
                            <div className='flex flex-col gap-1 font-lato text-[#8A8FB9]'>
                                <p>{currentTexts.tel_email}</p>
                                <p>{currentTexts.email_connect}</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='bg-pink size-11 rounded-full flex justify-center items-center text-white text-2xl'>
                                <MdSupportAgent />
                            </div>
                            <div className='flex flex-col gap-1 font-lato text-[#8A8FB9]'>
                                <p>{currentTexts.support_forum}</p>
                                <p>{currentTexts.support_hours}</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='bg-[#FFB265] size-11 rounded-full flex justify-center items-center text-[#a86f37] text-2xl'>
                                <MdLocationCity />
                            </div>
                            <div className='flex flex-col gap-1 font-lato text-[#8A8FB9]'>
                                <p>{currentTexts.address_line1}</p>
                                <p>{currentTexts.address_line2}</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='bg-[#1BE982] size-11 rounded-full flex justify-center items-center text-white text-2xl'>
                                <TbTruckDelivery />
                            </div>
                            <div className='flex flex-col gap-1 font-lato text-[#8A8FB9]'>
                                <p>{currentTexts.free_shipping}</p>
                                <p>{currentTexts.all_orders}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-10 px-5 md:px-10 lg:px-36 grid lg:grid-cols-2 gap-10 justify-between items-center'>
                <div className='flex flex-col items-start gap-4'>
                    <Heading text={currentTexts.get_in_touch} />
                    <p className='font-lato text-[#8A8FB9]'>{currentTexts.touch_description}</p>
                    <div className='py-5 grid grid-cols-2 gap-5'>
                        <Input placeholder={currentTexts.your_name} v={2} />
                        <Input placeholder={currentTexts.your_email} v={2} />
                        <Input placeholder={currentTexts.subject} span='2' v={2} />
                        <textarea name="message" id="message" rows={5} className='bg-transparent text-gray-700 placeholder:text-[#C5CBE3] border border-[#C5CBE3] outline-none px-3 py-2 col-span-2 w-full' placeholder={currentTexts.type_message}></textarea>
                    </div>
                    <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3'>{currentTexts.send_message}</button>
                </div>
                
                {/* ИСПРАВЛЕНО: убран лишний пробел и изменен класс */}
                <Image 
                    src="/contact.png" 
                    width={725} 
                    height={695} 
                    alt='contact' 
                    className='w-full max-w-[725px] hidden lg:block' 
                />
            </div>
        </div>
    )
}

export default Contact