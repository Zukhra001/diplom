'use client';
import MainHeader from '@/components/MainHeader'
import BlogCard, { BlogContent } from '@/components/mini/BlogCard'
import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar';

const Blogs = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            title: "Blog Page",
            current: " Blog Page",
            blog_title: "Mauris at orci non vulputate diam tincidunt nec.",
            blog_content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, ipsam natus. Excepturi, modi fuga natus repellat illum placeat facilis alias quis"
        },
        ru: {
            title: "Страница блога",
            current: " Страница блога",
            blog_title: "Mauris at orci non vulputate diam tincidunt nec.",
            blog_content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, ipsam natus. Excepturi, modi fuga natus repellat illum placeat facilis alias quis"
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
    const content = currentTexts.blog_content;
    const blogs: BlogContent[] = [
        {title: currentTexts.blog_title, content: content, date: "12 Aug 2021", image: "/blog4.png"},
        {title: currentTexts.blog_title, content: content, date: "12 Aug 2021", image: "/blog5.png"},
        {title: currentTexts.blog_title, content: content, date: "12 Aug 2021", image: "/blog6.png"},
    ]
    
    return (
        <div className='w-full'>
            <MainHeader title={currentTexts.title} prev='Home . Pages . ' current={currentTexts.current} />
            <div className='w-full px-5 lg:px-40 py-20 grid md:grid-cols-6 gap-10'>
                <div className='flex flex-col gap-5 md:col-span-3 lg:col-span-4'>
                    {blogs.map((blog, index) => (
                        <BlogCard key={index} size='LARGE' data={blog} />
                    ))}
                </div>
                <Sidebar />
            </div>
        </div>
    )
}

export default Blogs