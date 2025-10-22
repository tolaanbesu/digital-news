'use client';

import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import PostitemOne from '@/components/PostitemOne';

import './post.css';


export default function Post(){

    const router = useRouter();
    const [items, setItems] = useState<any | []>([]);

    const fetchItems = ()=>{

          fetch('/api/postitems')
          .then(res=>res.json())
          .then(data=>setItems(data))
          .catch(e=>console.log(e.message))
    };

    useEffect(()=>{
        fetchItems();
    },[])
    

    return(
    <section id="posts" className='posts'>
      <div className="container" data-aos='fade-up'>
        <div className="row g-5">
          <div className="col-lg-4">
           
          </div>
          <div className="col-lg-8">
            <div className="row g-5">
            <div className="col-lg-4">
              {items && items.length > 0 && (
                  items.filter((item:{ trending:boolean,top:boolean})=>!item.trending &&!item.top).slice(0,3)
                  .map((item) => <PostitemOne key={item._id} item={item} large={false}/>)
                )  
              }
            </div>
            <div className="col-lg-4">
              {items && items.length > 0 && (
                  items.filter((item:{ trending:boolean,top:boolean})=>!item.trending &&!item.top).slice(3,6)
                  .map((item) => <PostitemOne key={item._id} item={item} large={false}/>)
                )  
              }
            </div>
            <div className="col-lg-4"></div>

          </div>
          </div>
          
        </div>
        
      </div>
    </section>)
}