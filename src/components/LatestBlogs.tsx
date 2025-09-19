'use client';
import React, { useState, useEffect } from 'react'
import Heading from './mini/Heading'
import BlogCard, { BlogContent } from './mini/BlogCard'

const LatestBlogs = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  const texts = {
    en: {
      latest_blogs: "Latest Blogs",
      blog_title: "Top essential trends in 2021",
      blog_content: "More off this less hello samlande lied much over tightly circa horse taped mightly"
    },
    ru: {
      latest_blogs: "Последние статьи",
      blog_title: "Топ важных трендов 2021",
      blog_content: "More off this less hello samlande lied much over tightly circa horse taped mightly"
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
  const blogs: BlogContent[] = [
    {title: currentTexts.blog_title, content: currentTexts.blog_content, image: "/blog1.png", date: "20th Dec 2021"},
    {title: currentTexts.blog_title, content: currentTexts.blog_content, image: "/blog2.png", date: "20th Dec 2021"},
    {title: currentTexts.blog_title, content: currentTexts.blog_content, image: "/blog3.png", date: "20th Dec 2021"},
  ]
  
  return (
    <div className='w-full px-5 lg:px-40 py-10'>
    <Heading text={currentTexts.latest_blogs} />
    <div className='grid md:grid-cols-3 md:gap-4 lg:gap-10'>
        {blogs.map((blog, index) => (<BlogCard key={index} data={blog} />))}
    </div>
</div>
  )
}

export default LatestBlogs