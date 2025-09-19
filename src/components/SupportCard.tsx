'use client';
import React, { useState, useEffect } from 'react'
import Heading from './mini/Heading'
import ServiceCard from './mini/ServiceCard'

const SupportCard = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            shopex_offer: "What Shopex Offer?",
            free_delivery: "Free Delivery",
            return_refund: "Return & Refund",
            premium_quality: "Premium Quality",
            support_247: "24/7 Support"
        },
        ru: {
            shopex_offer: "Что предлагает Shopex?",
            free_delivery: "Бесплатная доставка",
            return_refund: "Возврат и возмещение",
            premium_quality: "Премиум качество",
            support_247: "Поддержка 24/7"
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
        <div className='w-full px-5 lg:px-40 py-10'>
            <Heading text={currentTexts.shopex_offer} />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-10'>
                <ServiceCard title={currentTexts.free_delivery} image='/free-delivery.png' />
                <ServiceCard title={currentTexts.return_refund} image='/cashback.png' />
                <ServiceCard title={currentTexts.premium_quality} image='/quality.png' />
                <ServiceCard title={currentTexts.support_247} image='/support.png' />
            </div>
        </div>
    )
}

export default SupportCard