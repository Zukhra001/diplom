'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { ProductType } from '@/components/mini/ProductCard';

const Sidebar = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            search: "Search",
            search_posts: "Search Posts",
            categories: "Categories",
            women: "Women",
            recent_posts: "Recent Posts",
            blog_title: "It is a long established fact",
            sale_product: "Sale Product",
            offer_product: "Offer Product",
            follow: "Follow",
            tags: "Tags",
            tags_item: "Tags"
        },
        ru: {
            search: "Поиск",
            search_posts: "Поиск постов",
            categories: "Категории",
            women: "Женщины",
            recent_posts: "Последние посты",
            blog_title: "Это давно установленный факт",
            sale_product: "Товары по скидке",
            offer_product: "Предложения",
            follow: "Подписаться",
            tags: "Теги",
            tags_item: "Теги"
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

    const products: ProductType[] = [
        {
            title: "sit amet consectetur",
            price: 31.00,
            discountPrice: 52.00,
            image: "/product31.png"
        },
        {
            title: "vel elit eusim",
            price: 26.00,
            discountPrice: 42.00,
            image: "/product32.png"
        },
        {
            title: "sit amet consectetur",
            price: 31.00,
            discountPrice: 52.00,
            image: "/product33.png"
        },
        {
            title: "sed do eiusmod",
            price: 23.00,
            discountPrice: 39.00,
            image: "/product34.png"
        },
        {
            title: "tempor incididunt ut",
            price: 28.00,
            discountPrice: 49.00,
            image: "/product35.png"
        },
        {
            title: "labore et dolore",
            price: 32.00,
            discountPrice: 55.00,
            image: "/product36.png"
        },
        {
            title: "magna aliqua ut",
            price: 29.00,
            discountPrice: 53.00,
            image: "/product37.png"
        },
    ]

    return (
        <div className='flex flex-col gap-5 p-5 md:col-span-3 lg:col-span-2'>
            <div>
                <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>{currentTexts.search}</h2>
                <div className='flex justify-between items-center border border-[#BDBDD8] rounded-sm py-2 px-3'>
                    <input type="text" className='bg-transparent border-none outline-none w-4/6 placeholder:text-gray-300' placeholder={currentTexts.search_posts} />
                    <button className='bg-transparent text-gray-300 text-xl'><BiSearch /></button>
                </div>
            </div>
            <div>
                <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>{currentTexts.categories}</h2>
                <div className='grid grid-cols-2 gap-2'>
                    {[0, 1, 2, 3, 4, 5].map((val) => {
                        return (
                            <span key={val} className='bg-white text-sm font-josefin-sans text-offBlue hover:bg-pink hover:text-white rounded-sm px-3 py-2'>{currentTexts.women} (16)</span>
                        )
                    })}
                </div>
            </div>

            <div>
                <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>{currentTexts.recent_posts}</h2>
                <div className='flex flex-col gap-5'>
                    {['/blog1.png', '/blog2.png', '/blog3.png', '/girl.png'].map((val, index) => {
                        return (
                            <div key={index} className='flex justify-start items-center w-full gap-4'>
                                <Image src={val} width={70} height={51} alt='blog' />
                                <div className='flex flex-col'>
                                    <h3 className='font-josefin-sans text-sm text-navyBlue'>{currentTexts.blog_title}</h3>
                                    <p className='text-gray-400 font-lato text-[11px]'>Aug 09 2021</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>{currentTexts.sale_product}</h2>
                <div className='flex flex-col gap-5'>
                    {products.slice(0, 3).map((product, index) => {
                        return (
                            <div key={index} className='flex justify-start items-center w-full gap-4'>
                                <Image src={product.image} width={70} height={51} alt='product' />
                                <div className='flex flex-col'>
                                    <h3 className='font-josefin-sans text-sm text-navyBlue'>{product.title}</h3>
                                    <p className='text-gray-400 font-lato text-[11px]'>${product.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>{currentTexts.offer_product}</h2>
                <div className='grid grid-cols-2 gap-5'>
                    {products.slice(3,7).map((product, index) => {
                        return (
                            <div key={index} className='flex flex-col justify-start items-center gap-2'>
                                <Image src={product.image} width={70} height={51} alt='product' />
                                <div className='flex flex-col'>
                                    <h3 className='font-josefin-sans text-navyBlue'>{product.title}</h3>
                                    <p className='text-gray-400 font-lato text-sm text-center'>${product.price} - ${product.discountPrice}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>{currentTexts.follow}</h2>
                <div className='flex justify-start items-center gap-2'>
                   <div className='flex justify-center items-center bg-navyBlue size-7 rounded-full text-white'>
                    <FaFacebookF />
                   </div>
                   <div className='flex justify-center items-center bg-pink size-7 rounded-full text-white'>
                    <FaInstagram />
                   </div>
                   <div className='flex justify-center items-center bg-[#37DAF3] size-7 rounded-full text-white'>
                    <FaTwitter />
                   </div>
                </div>
            </div>

            <div>
                <h2 className='font-semibold font-josefin-sans text-navyBlue text-2xl py-4'>{currentTexts.tags}</h2>
                <div className='grid grid-cols-3 gap-2'>
                    {[0, 1, 2, 3, 4].map((val) => {
                        return (
                            <span key={val} className='bg-white text-sm font-josefin-sans text-offBlue hover:text-pink underline'>{currentTexts.tags_item} (1)</span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Sidebar