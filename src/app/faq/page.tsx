'use client';
import MainHeader from '@/components/MainHeader'
import Heading from '@/components/mini/Heading'
import React, { useState, useEffect } from 'react'
import Input from '../payment/Input'
import Companies from '@/components/Companies'

const FAQs = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            title: "FAQs",
            current: " FAQ",
            general_info: "General Information",
            question: "Eu dictumst cum at sed euismood condimentum?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
            ask_question: "Ask a Question",
            your_name: "Your Name",
            subject: "Subject",
            type_message: "Type Your Message",
            send_message: "Send Message"
        },
        ru: {
            title: "FAQ",
            current: " FAQ",
            general_info: "Общая информация",
            question: "Eu dictumst cum at sed euismood condimentum?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
            ask_question: "Задать вопрос",
            your_name: "Ваше имя",
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
            <div className='w-full px-5 md:px-12 lg:px-40 grid md:grid-cols-2 gap-10'>
                <div>
                    <Heading text={currentTexts.general_info} />
                    <div className='flex flex-col gap-4'>
                        {[1,2,3,4].map((item) => (
                            <div key={item} className='flex flex-col gap-2'>
                                <h3 className='font-semibold font-josefin-sans font-xl'>{currentTexts.question}</h3>
                                <p className='font-josefin-sans text-[#A1ABCC]'>{currentTexts.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col justify-start items-start gap-4 bg-[#F8F8FD] p-2 lg:p-14'>
                    <h2 className={`py-2 text-2xl font-bold font-josefin-sans text-center text-navyBlue`}>
                        {currentTexts.ask_question}
                    </h2>
                    <div className='py-5 w-full grid grid-cols-2 gap-5'>
                        <Input placeholder={currentTexts.your_name} span='2' v={2} />
                        <Input placeholder={currentTexts.subject} span='2' v={2} />
                        <textarea name="message" id="message" rows={5} className='bg-transparent text-gray-700 placeholder:text-[#C5CBE3] border border-[#C5CBE3] outline-none px-3 py-2 col-span-2 w-full' placeholder={currentTexts.type_message}></textarea>
                    </div>
                    <button className='bg-pink rounded-sm font-josefin-sans px-8 text-white py-3'>{currentTexts.send_message}</button>
                </div>
            </div>
            <Companies />
        </div>
    )
}

export default FAQs