'use client';
import React, { useState, useEffect } from 'react'
import Heading from './mini/Heading'
import ProductCard, { ProductType } from './mini/ProductCard'

const FeaturedProducts = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  const texts = {
    en: {
      featured_products: "Featured Products"
    },
    ru: {
      featured_products: "Рекомендуемые товары"
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
  const products: ProductType[] = [{title: "Cantilever chair", image:'/product1.png', price: 42.00}, {title: "Cantilever chair", image:'/product2.png', price: 42.00}, {title: "Cantilever chair", image:'/product3.png', price: 42.00}, {title: "Cantilever chair", image:'/product4.png', price: 42.00}]
  
  return (
    <div className='w-full px-5 lg:px-40 py-10'>
        <Heading text={currentTexts.featured_products} />
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10'>
          {products.map((product, index) => (
            <ProductCard key={index} data={product} designType='SIMPLE 1/4' />
          ))}
        </div>
    </div>
  )
}

export default FeaturedProducts