'use client'
import {useParams} from 'next/navigation'
import React, {useState, useEffect} from 'react'
import './style.css';
import PreLoader from '@/components/PreLoader'

export interface PostProps{
    date: string;
    title: string;
    brief: string;
    avatar: string;
    author: string;
}

export const initalPost = {
    _id:'',
    img:'',
    category:'',
    date:'',
    title:'',
    brief:'',
    avatar:'',
    author:'',
};

export default function PostItem() {

    const {id} = useParams();
    const [item, setItem] = useState(initalPost);

    const fetchItemById = async()=>{
        try{
            const response = await fetch(`/api/postitems/${id}`)
            const data = await response.json();
            setItem(data);
        }catch(error){
          console.error("Error fetching data", error);
        }
        
    } 

    useEffect(()=>{
        fetchItemById()
    }, [id])

  return (
    <main id="main">
        <section className="single-post-content">
           <div className="conta iner">
             <div className="row">
                <div className="col-md-9 post-content">
                    {
                        item && item.category !== '' ? (
                          <div className="single-post">
                        <div className="post-meta">
                            <span className="date">
                                {item.category}
                            </span>
                            <span className="mx-1">
                                <i className="bi bi-dot"></i>
                            </span>
                            <span>{new Date(item.date).toLocaleDateString('en-US') }</span>
                        </div>
                        <h1 className="mb-s">{item.title}</h1>
                        <p>
                            <span className="firstcharacter">
                                {item.brief && item.brief.charAt(0)}
                            </span>
                            {item.brief && item.brief.substring(1)}
                        </p>
                        <figure className="my-4">
                            <img src={`/${item.img}`} alt="" className="img-fluid" />
                            <figcaption>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            </figcaption>
                        </figure>
                    </div>
                        ) : <PreLoader />
                    }
                    

                </div>
             </div>
           </div>
        </section>
    </main>
  )
}
