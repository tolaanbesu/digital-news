'use client';

import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import PostitemOne from '@/components/PostitemOne';

import './post.css';


export default function Post(){

    const router = useRouter();
    const [items, setItems] = useState<any | []>([]);

    const fetchItems = async()=>{
        try{
            const response = await fetch('/api/postitems');
            const data = await response.json();
            console.log(data)
            setItems(data);
        }catch(error){
            console.log(`Error fetching data: ${error}`)
        }
    }
    useEffect(()=>{
        fetchItems();
    },[])
    

    return(
    <section id="posts" className='posts'>
      <div className="container" data-aos='fade-up'>
        {items.length > 0 ? (
          items.map((item, index) => <PostitemOne key={index} item={item} />)
        ) : (
          <p>No posts found.</p>
        ) }
      </div>
    </section>)
}