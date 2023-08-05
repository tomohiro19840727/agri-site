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
   {list.map((post) => (
    <>
    <Link to="/information">
    <p key={post.id}>{post.name}</p>
    </Link>

    <p key={post.id}>{post.fieldSize}</p>
    <p key={post.id}>{post.selectedFieldInfo}</p>
   
    </>
   ))}

    </div>
  )
}

export default Table