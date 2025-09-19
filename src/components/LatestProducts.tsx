'use client';
import React, { useState, useEffect } from 'react'
import Heading from './mini/Heading'
import ProductCard, { ProductType } from './mini/ProductCard'

const LatestProducts = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
      en: {
        latest_products: "Latest Products",
        new_arrivals: "New Arrivals",
        best_seller: "Best Seller",
        featured: "Featured",
        special_offer: "Special Offer"
      },
      ru: {
        latest_products: "Новые товары",
        new_arrivals: "Новинки",
        best_seller: "Хит продаж",
        featured: "Рекомендуемые",
        special_offer: "Специальное предложение"
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
    const products: ProductType[] = [{title: "Comfort Handy Craft", image:'/product5.png', price: 42.00, discountPrice: 65.00}, {title: "Comfort Handy Craft", image:'/product6.png', price: 42.00, discountPrice: 65.00}, {title: "Comfort Handy Craft", image:'/product7.png', price: 42.00, discountPrice: 65.00}, {title: "Comfort Handy Craft", image:'/product8.png', price: 42.00, discountPrice: 65.00}, {title: "Comfort Handy Craft", image:'/product9.png', price: 42.00, discountPrice: 65.00},{title: "Comfort Handy Craft", image:'/product10.png', price: 42.00, discountPrice: 65.00}]

    return (
        <div className='w-full px-5 lg:px-40 py-10'>
            <Heading text={currentTexts.latest_products} />
            <div className='flex justify-center items-center gap-6 py-2 pb-5 flex-wrap'>
                <p className='text-pink lato text-lg cursor-pointer'>{currentTexts.new_arrivals}</p>
                <p className='text-navyBlue lato text-lg cursor-pointer'>{currentTexts.best_seller}</p>
                <p className='text-navyBlue lato text-lg cursor-pointer'>{currentTexts.featured}</p>
                <p className='text-navyBlue lato text-lg cursor-pointer'>{currentTexts.special_offer}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {products.map((product, index) => (
                    <ProductCard key={index} data={product} designType='MEDIUM 1/3' />
                ))}
            </div>
        </div>
    )
}

export default LatestProducts