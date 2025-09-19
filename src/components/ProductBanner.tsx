'use client';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Heading from './mini/Heading'
import { FaCheck } from 'react-icons/fa'

const ProductBanner = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const texts = {
      en: {
        discount_item: "Discount Item",
        wood_chair: "Wood Chair",
        plastic_chair: "Plastic Chair",
        sofa_collection: "Sofa Collection",
        discount_title: "20% Discount Of All Products",
        eams_sofa: "Eams Sofa Compact",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
        material_expose: "Material expose like metals",
        clear_lines: "Clear lines and geomatric figures",
        neutral_colours: "Simple neutral colours.",
        shop_now: "Shop Now"
      },
      ru: {
        discount_item: "Товары со скидкой",
        wood_chair: "Деревянные стулья",
        plastic_chair: "Пластиковые стулья",
        sofa_collection: "Коллекция диванов",
        discount_title: "Скидка 20% на все товары",
        eams_sofa: "Диван Eams Compact",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
        material_expose: "Открытые материалы как металлы",
        clear_lines: "Четкие линии и геометрические фигуры",
        neutral_colours: "Простые нейтральные цвета.",
        shop_now: "Купить сейчас"
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
        <>
            <Heading text={currentTexts.discount_item} />
            <div className='flex flex-wrap justify-center items-center gap-6 py-2'>
                <p className='text-pink lato text-lg cursor-pointer'>{currentTexts.wood_chair}</p>
                <p className='text-navyBlue lato text-lg cursor-pointer'>{currentTexts.plastic_chair}</p>
                <p className='text-navyBlue lato text-lg cursor-pointer'>{currentTexts.sofa_collection}</p>
            </div>
            <div className='w-full h-auto lg:h-[570px] px-5 lg:px-40 py-10 flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-between items-center bg-white'>
                {/* Текстовый блок - сдвинут влево */}
                <div className='flex flex-col gap-5 w-full md:w-[55%] pr-0 md:pr-8 ml-0 md:-ml-8'>
                    <h2 className='text-4xl font-bold font-josefin-sans text-navyBlue'>{currentTexts.discount_title}</h2>
                    <p className='text-xl text-pink font-semibold font-josefin-sans'>{currentTexts.eams_sofa}</p>
                    <p className='font-lato text-gray-400'>{currentTexts.description}</p>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='flex justify-start items-center gap-4 text-gray-400'>
                            <FaCheck />
                            <p>{currentTexts.material_expose}</p>
                        </div>
                        <div className='flex justify-start items-center gap-4 text-gray-400'>
                            <FaCheck />
                            <p>{currentTexts.clear_lines}</p>
                        </div>
                        <div className='flex justify-start items-center gap-4 text-gray-400'>
                            <FaCheck />
                            <p>{currentTexts.neutral_colours}</p>
                        </div>
                        <div className='flex justify-start items-center gap-4 text-gray-400'>
                            <FaCheck />
                            <p>{currentTexts.material_expose}</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-4'>
                        <button className='bg-pink text-white font-josefin-sans font-semibold px-10 py-3 rounded-sm'>{currentTexts.shop_now}</button>
                    </div>
                </div>
                
                {/* Изображение - сделано еще больше и сдвинуто еще правее */}
                <div className='w-full md:w-[62%] flex justify-end items-center'>
                    <Image src={"/sofachair.png"} alt='sofa' width={1600} height={1500} className='ml-25 md:ml-26' />
                </div>
            </div>
        </>
    )
}

export default ProductBanner