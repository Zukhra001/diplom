'use client';
import MainHeader from '@/components/MainHeader'
import Heading from '@/components/mini/Heading'
import ServiceCard from '@/components/mini/ServiceCard'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const AboutPage = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            // Page header
            title: "About Us",
            current: " About Us",
            
            // Main content
            main_title: "Know about our Ecommerce Business History!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.",
            contact_us: "Contact Us",
            
            // Features
            our_features: "Our Features",
            free_delivery: "Free Delivery",
            return_refund: "Return & Refund", 
            premium_quality: "Premium Quality",
            support_247: "24/7 Support",
            
            // Testimonials
            client_say: "Our Client Say!",
            ceo_title: "CEO at Webaccy Digital",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent."
        },
        ru: {
            // Page header
            title: "О нас",
            current: " О нас",
            
            // Main content  
            main_title: "Узнайте об истории нашего бизнеса в электронной коммерции!",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.",
            contact_us: "Связаться с нами",
            
            // Features
            our_features: "Наши преимущества", 
            free_delivery: "Бесплатная доставка",
            return_refund: "Возврат и возмещение",
            premium_quality: "Премиум качество",
            support_247: "Поддержка 24/7",
            
            // Testimonials
            client_say: "Что говорят наши клиенты!",
            ceo_title: "Генеральный директор Webaccy Digital",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent."
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
            <div className='w-full px-5 md:px-10 lg:px-40 py-20 '>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                    <div className='hidden lg:block border border-gray-300 w-[570px] h-[370px] bg-navyBlue rounded-md relative'>
                        <Image src={"/about.png"} width={555} height={390} className='rounded-md absolute w-1/2 lg:w-full -top-1 -right-4' alt='about' />
                    </div>
                    <Image src={"/about.png"} width={555} height={390} className='rounded-md block lg:hidden' alt='about' />
                    <div className='flex flex-col items-start justify-start w-full md:w-[550px] md:pl-10'>
                        <h1 className='font-bold text-3xl text-navyBlue py-3 font-josefin-sans'>{currentTexts.main_title}</h1>
                        <p className='font-lato text-[#8A8FB9]'>{currentTexts.description}</p>
                        <div className='flex justify-start items-center py-10'>
                            <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3'>{currentTexts.contact_us}</button>
                        </div>
                    </div>
                </div>

                <div className='py-20'>
                    <Heading text={currentTexts.our_features} color={{ primary: false, value: 'black' }} />
                    <div className='grid md:grid-cols-3 lg:grid-cols-4 py-10 gap-10'>
                        <ServiceCard title={currentTexts.free_delivery} image='/free-delivery.png' />
                        <ServiceCard title={currentTexts.return_refund} image='/cashback.png' />
                        <ServiceCard title={currentTexts.premium_quality} image='/quality.png' />
                        <ServiceCard title={currentTexts.support_247} image='/support.png' />
                    </div>
                </div>
            </div>
            <div className='py-20 px-5 lg:px-40 w-full bg-[#FBFBFF]'>
                <Heading text={currentTexts.client_say} color={{ primary: false, value: 'black' }} />
                <div className='flex-col flex justify-center items-center py-10'>
                    <div className='flex justify-center items-center gap-2'>
                        <Image src={'/mask.png'} width={50} height={50} className='rounded-md' alt='user' />
                        <Image src={'/mask.png'} width={55} height={59} className='rounded-md mb-1' alt='user' />
                        <Image src={'/mask.png'} width={50} height={50} className='rounded-md' alt='user' />
                    </div>
                    <div className='py-5'>
                        <p className='font-semibold font-lato text-2xl text-black'>Selina Gomezi</p>
                        <p className='text-center text-[10px] text-gray-400'>{currentTexts.ceo_title}</p>
                    </div>
                    <p className='font-bold font-lato text-center text-gray-500 w-full md:w-[690px]'>{currentTexts.testimonial}</p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                    <div className='w-5 h-1 bg-offPurple rounded-md'></div>
                    <div className='w-7 h-1 bg-pink rounded-md'></div>
                    <div className='w-5 h-1 bg-offPurple rounded-md'></div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage