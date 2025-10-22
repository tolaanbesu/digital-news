'use client';

import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import PostitemOne from '@/components/PostitemOne';
import TrendingPost from '@/components/TrendingPost';

import './post.css';
import PreLoader from '@/components/PreLoader';


export default function Post(){

    const router = useRouter();
    const [items, setItems] = useState<any | []>([]);
    const [item, setItem] = useState({});

    const fetchItems = ()=>{

          fetch('/api/postitems')
          .then(res=>res.json())
          .then(data=>setItems(data))
          .catch(e=>console.log(e.message))
    };

    const fetchItemById = async (id:any)=>{
     try{
        const res = await fetch(`api/postitems/${id}`);
       const data = await res.json();
       setItem(data);
     }catch(error){
      console.error('Error Fetching item:',error);
     }
       
    }

    useEffect(()=>{
        fetchItems();
        fetchItemById('68f8c27b9ce4651d8921a299');
    },[])
    

    return(
    <section id="posts" className='posts'>
      <div className="container" data-aos='fade-up'>
        <div className="row g-5">
          <div className="col-lg-4">
           {
             <PostitemOne item={item} large={true}/>
           }
          </div>
          <div className="col-lg-8">
            <div className="row g-5">
            <div className="col-lg-4 border-start custom-border">
              {items && items.length > 0 ? (
                  items.filter((item:{ trending:boolean,top:boolean})=>!item.trending &&!item.top).slice(0,3)
                  .map((item) => <PostitemOne key={item._id} item={item} large={false}/>)
                ) : <PreLoader />
              }
            </div>
            <div className="col-lg-4 border-start custom-border">
              {items && items.length > 0 ? (
                  items.filter((item:{ trending:boolean,top:boolean})=>!item.trending &&!item.top).slice(3,6)
                  .map((item) => <PostitemOne key={item._id} item={item} large={false}/>)
                )  : <PreLoader />
              }
            </div>
            <div className="col-lg-4">
              <div className="trending">
                <h3>Trending</h3>
                <ul className="trending-post">
                  {
                    items && items.length > 0 ? (items.filter((item:{trending:boolean})=>item.trending)
                    .map((item:{_id:string,title:string,author:string},index:number)=><TrendingPost key={item._id} item={item} index={index}/>)
                  ):<PreLoader />
                  }
                </ul>
              </div>
            </div>

          </div>
          </div>
          
        </div>
        
      </div>
    </section>)
}