'use client';
import React, { useState, useEffect } from 'react'
import ProductCard, { ProductType } from './mini/ProductCard'
import Heading from './mini/Heading'
import PromotedCategory from './mini/PromotedCategory'
import ProductBar from './mini/ProductBar'

const TrendingProducts = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
        en: {
            trending_products: "Trending Products",
            off_products: "23% off in all products",
            shop_now: "Shop Now",
            view_collection: "View Collection"
        },
        ru: {
            trending_products: "Популярные товары",
            off_products: "Скидка 23% на все товары",
            shop_now: "Купить сейчас",
            view_collection: "Посмотреть коллекцию"
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
    const products: ProductType[] = [{title: "Cantilever chair", image:'/product11.png', price: 26.00, discountPrice: 49.00}, {title: "Cantilever chair", image:'/product12.png', price: 26.00, discountPrice: 49.00}, {title: "Cantilever chair", image:'/product13.png', price: 26.00, discountPrice: 49.00}, {title: "Cantilever chair", image:'/product14.png', price: 26.00, discountPrice: 49.00}]
    const minproducts: ProductType[] = [{title: "Executive Seat Chair", price: 32.00, image: "/product15mini.png"}, {title: "Executive Seat Chair", price: 32.00, image: "/product16mini.png"}, {title: "Executive Seat Chair", price: 32.00, image: "/product17mini.png"}]

    return (
        <div className='w-full px-5 lg:px-40 py-10'>
            <Heading text={currentTexts.trending_products} />
            <div className='grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-5 lg:gap-10'>
                {products.map((product, index) => (
                    <ProductCard key={index} data={product} designType='SIMPLE 1/4' />
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4">
                <div className='md:col-span-3'>
                    <PromotedCategory title={currentTexts.off_products} btn={currentTexts.shop_now} image={{src: '/promoted.png', width: 200, height: 200}} isActive={false} />
                </div>
                <div className='md:col-span-3'>
                    <PromotedCategory title={currentTexts.off_products} image={{src: '/promoted2.png', width: 312, height: 173}} isActive={true} btn={currentTexts.view_collection} />
                </div>
                <div className='flex md:col-span-6 lg:col-span-2 flex-col md:flex-row lg:flex-col gap-2'>
                    {minproducts.map((product, index) => (<ProductBar key={index} data={product} />))}
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts