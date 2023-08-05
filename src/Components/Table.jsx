import { collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase';

const Table = () => {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(query(collection(db, 'location')));
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
    
   },[]);

  return (
    <div>
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">一覧</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    

    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
    {list.map((post) => (
      <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
        <Link to="/information" class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
          <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </Link>

        <div class="flex flex-col gap-2 p-4 lg:p-6">
          <span class="text-sm text-gray-400">{post.fieldSize}</span>
          <span class="text-sm text-gray-400">{post.selectedFieldInfo}</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{post.name}</a>
          </h2>

          <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>

          <div>
            <a href="#" class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
          </div>
        </div>
      </div>
       ))}   
    </div>
  </div>
</div>

    </div>
  )
}

export default Table