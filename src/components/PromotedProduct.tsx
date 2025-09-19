'use client';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const PromotedProduct = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  const texts = {
    en: {
      title: "Unique Features Of leatest & Trending Poducts",
      feature1: "All frames constructed with hardwood solids and laminates",
      feature2: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
      feature3: "Arms, backs and seats are structurally reinforced",
      add_to_cart: "Add to Cart",
      product_name: "B&B Italian Sofa"
    },
    ru: {
      title: "Уникальные особенности новейших и трендовых продуктов",
      feature1: "Все рамы изготовлены из твердого дерева и ламината",
      feature2: "Усилены двойными деревянными дюбелями, клеем, шурупами и машинными гвоздями",
      feature3: "Подлокотники, спинки и сиденья структурно усилены",
      add_to_cart: "В корзину",
      product_name: "Итальянский диван B&B"
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
    <div className='w-full md:h-auto lg:h-[570px] px-10 lg:px-40 py-10 flex flex-col md:flex-row justify-center items-center gap-10 bg-skyBlue'>
      <Image src={"/sofa.png"} alt='sofa' width={500} height={500} />
      <div className='flex flex-col gap-5'>
        <h2 className='text-3xl md:text-4xl font-bold font-josefin-sans text-navyBlue'>{currentTexts.title}</h2>
        <div className='flex flex-col gap-2'>
            <div className='flex justify-start items-center gap-2'>
                <div className='size-3 bg-pink rounded-full'></div>
                <p className='font-lato text-gray-400'>{currentTexts.feature1}</p>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <div className='size-3 bg-navyBlue rounded-full'></div>
                <p className='font-lato text-gray-400'>{currentTexts.feature2}</p>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <div className='size-3 bg-[#2BF5CC] rounded-full'></div>
                <p className='font-lato text-gray-400'>{currentTexts.feature3}</p>
            </div>
        </div>
        <div className='flex justify-start items-center gap-3'>
            <button className='bg-pink text-white font-josefin-sans font-semibold text-lg px-3 py-2 rounded-sm'>{currentTexts.add_to_cart}</button>
            <div className='flex flex-col gap-1'>
                <p className='font-josefin-sans font-semibold text-sm text-navyBlue'>{currentTexts.product_name}</p>
                <p className='font-lato font-normal text-sm text-navyBlue'>$32.00</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PromotedProduct