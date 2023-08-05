import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (

    <header class="mb-8 bg-gray-300  flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
    
    <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl ml-20" aria-label="logo">
      <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
      </svg>

      農家の記録アプリ
    </a>
    

    
    
    <nav class="hidden gap-12 lg:flex">
      <Link to="/" class="text-3xl font-semibold text-indigo-500">ホーム</Link>
      <Link to="/work" class="text-3xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">作業予定</Link>
      <Link to="/manegement" class="text-3xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">在庫管理</Link>
      <Link to="/table" class="text-3xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">一覧表</Link>
      <Link to="/about" class="text-3xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">登録</Link>
    </nav>
    
    <a href="#" class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact Sales</a>

    <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>

      Menu
    </button>
    
  </header>
  )
}

export default MenuBar