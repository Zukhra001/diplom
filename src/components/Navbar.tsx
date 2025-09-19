'use client';
import React, { useState, useEffect } from 'react'
import Topbar from './mini/Topbar'
import Link from 'next/link'
import { FiSearch, FiX } from 'react-icons/fi'

// Определяем тип для товара
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
}

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [currentLanguage, setCurrentLanguage] = useState('en')
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState<Product[]>([])
    const [showSearchResults, setShowSearchResults] = useState(false)

    // Мок-данные товаров (замените на ваши реальные данные)
    const products: Product[] = [
        { id: 1, name: 'B&B Italian Sofa', price: 32, category: 'sofa', image: '/images/sofa1.jpg' },
        { id: 2, name: 'Wood Chair', price: 56, category: 'chair', image: '/images/chair1.jpg' },
        { id: 3, name: 'Plastic Chair', price: 32, category: 'chair', image: '/images/chair2.jpg' },
        { id: 4, name: 'Sofa Collection', price: 32, category: 'sofa', image: '/images/sofa2.jpg' },
        { id: 5, name: 'Eams Sofa Compact', price: 56, category: 'sofa', image: '/images/sofa3.jpg' },
        { id: 6, name: 'Modern Dining Table', price: 120, category: 'table', image: '/images/table1.jpg' },
        { id: 7, name: 'Office Desk', price: 89, category: 'table', image: '/images/desk1.jpg' },
        { id: 8, name: 'Vintage Armchair', price: 78, category: 'chair', image: '/images/chair3.jpg' },
    ]

    const texts = {
        en: {
            home: "Home",
            products: "Products", 
            blog: "Blog",
            shop: "Shop",
            about: "About",
            contact: "Contact",
            faq: "FAQ",
            search: "Search products...",
            noResults: "No products found",
            searchResults: "Search Results"
        },
        ru: {
            home: "Главная",
            products: "Товары",
            blog: "Блог", 
            shop: "Магазин",
            about: "О нас",
            contact: "Контакты",
            faq: "FAQ",
            search: "Поиск товаров...",
            noResults: "Товары не найдены",
            searchResults: "Результаты поиска"
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

    // Функция поиска
    const handleSearch = (query: string) => {
        setSearchQuery(query)
        
        if (query.trim() === '') {
            setSearchResults([])
            setShowSearchResults(false)
            return
        }

        const filtered = products.filter((product: Product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        )
        
        setSearchResults(filtered)
        setShowSearchResults(true)
    }

    // Обработка нажатия Enter
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearchSubmit()
        }
    }

    // Обработка отправки поиска
    const handleSearchSubmit = () => {
        if (searchQuery.trim() !== '') {
            // Здесь можете перенаправить на страницу результатов поиска
            console.log('Searching for:', searchQuery)
            // Например: router.push(`/search?q=${searchQuery}`)
        }
    }

    // Закрытие результатов поиска при клике вне
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const searchContainer = document.getElementById('search-container')
            if (searchContainer && !searchContainer.contains(event.target as Node)) {
                setShowSearchResults(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const currentTexts = texts[currentLanguage as keyof typeof texts]
  
    return (
        <div className='w-full'>
            <Topbar />

            <nav className='w-full bg-white px-2 lg:px-40 py-4 grid grid-cols-2 lg:grid-cols-5 justify-between items-center relative'>
                <div className='logo text-[34px] font-bold font-josefin-sans text-black'>Hekto</div>

                <div className='hidden md:flex col-span-2 justify-start gap-4 items-center'>
                    <Link href={"/"} className='font-lato text-offBlue hover:underline hover:text-pink'>{currentTexts.home}</Link>
                    <Link href={"/shop/grid"} className='font-lato text-offBlue hover:underline hover:text-pink'>{currentTexts.products}</Link>
                    <Link href={"/blog"} className='font-lato text-offBlue hover:underline hover:text-pink'>{currentTexts.blog}</Link>
                    <Link href={"/shop"} className='font-lato text-offBlue hover:underline hover:text-pink'>{currentTexts.shop}</Link>
                    <Link href={"/about"} className='font-lato text-offBlue hover:underline hover:text-pink'>{currentTexts.about}</Link>
                    <Link href={"/contact"} className='font-lato text-offBlue hover:underline hover:text-pink'>{currentTexts.contact}</Link>
                </div>

                <div className='flex md:hidden justify-end items-center px-5'>
                    <div className={`w-8 md:hidden flex flex-col justify-center gap-1 ${open ? 'cross' : ''}`} onClick={() => setOpen(!open)}>
                        <div className="w-full h-1 bg-gray-700 transition-transform duration-500 ease-in-out"></div>
                        <div className="w-full h-1 bg-gray-700 transition-transform duration-500 ease-in-out"></div>
                        <div className="w-full h-1 bg-gray-700 transition-transform duration-500 ease-in-out"></div>
                    </div>
                </div>

                {/* Мобильное меню */}
                {open && <div className='z-10 absolute top-40 right-0 bg-navyBlue backdrop:blur-md w-full h-auto flex flex-col items-center justify-start p-10 gap-3'>
                    <div className='w-80 h-10 bg-skyBlue border-gray-200 border grid grid-cols-6 items-center my-4'>
                        <input 
                            type="text" 
                            className='p-3 font-josefin-sans font-semibold text-offNavyBlue border-none outline-none placeholder:text-gray-300 col-span-5' 
                            placeholder={currentTexts.search}
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button 
                            onClick={handleSearchSubmit}
                            className='bg-pink w-full h-full flex justify-center items-center'
                        >
                            <FiSearch size={20} color='white' />
                        </button>
                    </div>
                    <Link href={"/"} className='font-lato text-white hover:underline hover:text-pink'>{currentTexts.home}</Link>
                    <Link href={"/shop/grid"} className='font-lato text-white hover:underline hover:text-pink'>{currentTexts.products}</Link>
                    <Link href={"/blog"} className='font-lato text-white hover:underline hover:text-pink'>{currentTexts.blog}</Link>
                    <Link href={"/shop"} className='font-lato text-white hover:underline hover:text-pink'>{currentTexts.shop}</Link>
                    <Link href={"/about"} className='font-lato text-white hover:underline hover:text-pink'>{currentTexts.about}</Link>
                    <Link href={"/faq"} className='font-lato text-white hover:underline hover:text-pink'>{currentTexts.faq}</Link>
                    <Link href={"/contact"} className='font-lato text-white hover:underline hover:text-pink'>{currentTexts.contact}</Link>
                </div>}

                {/* Десктопный поиск */}
                <div className='hidden md:col-span-5 lg:col-span-2 md:flex justify-end items-center'>
                  <div id="search-container" className='md:w-full lg:w-72 h-10 bg-gray-100 border border-gray-300 rounded-md shadow-sm grid grid-cols-6 items-center transition-all duration-200 hover:bg-gray-200 hover:shadow-md relative'>
                    <input 
                        type="text" 
                        className='p-2 font-josefin-sans font-semibold text-offNavyBlue border-none outline-none placeholder:text-gray-400 col-span-5 rounded-l-md' 
                        placeholder={currentTexts.search}
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        onKeyPress={handleKeyPress}
                        onFocus={() => searchQuery && setShowSearchResults(true)}
                    />
                    <button 
                        onClick={handleSearchSubmit}
                        className='bg-pink w-full h-full flex justify-center items-center rounded-r-md hover:bg-pink-600 transition-colors'
                    >
                        <FiSearch size={20} color='white' />
                    </button>

                    {/* Результаты поиска */}
                    {showSearchResults && (
                        <div className='absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50'>
                            <div className='flex justify-between items-center p-3 border-b border-gray-100'>
                                <span className='font-semibold text-gray-700'>
                                    {currentTexts.searchResults} ({searchResults.length})
                                </span>
                                <button 
                                    onClick={() => setShowSearchResults(false)}
                                    className='text-gray-500 hover:text-gray-700'
                                >
                                    <FiX size={18} />
                                </button>
                            </div>
                            
                            {searchResults.length === 0 ? (
                                <div className='p-4 text-center text-gray-500'>
                                    {currentTexts.noResults}
                                </div>
                            ) : (
                                <div className='max-h-80 overflow-y-auto'>
                                    {searchResults.map((product: Product) => (
                                        <div 
                                            key={product.id} 
                                            className='p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0 flex items-center gap-3'
                                            onClick={() => {
                                                // Перейти на страницу товара
                                                console.log('Navigate to product:', product.id)
                                                setShowSearchResults(false)
                                            }}
                                        >
                                            <div className='w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center'>
                                                {/* Здесь можете добавить изображение товара */}
                                                <span className='text-xs font-semibold text-gray-600'>
                                                    {product.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div className='flex-1'>
                                                <div className='font-medium text-gray-900'>{product.name}</div>
                                                <div className='text-sm text-gray-500 capitalize'>{product.category}</div>
                                            </div>
                                            <div className='font-bold text-pink'>
                                                ${product.price}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                  </div>
                </div>
              </nav>
          </div>
    )
}

export default Navbar