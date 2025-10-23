'use client'
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import './style.css';
import PreLoader from '@/components/PreLoader'
import SidePostItem from '@/components/SidePostItem';

export interface PostProps {
    _id: string;
    img: string;
    category: string;
    date: string;
    title: string;
    brief: string;
    avatar: string;
    author: string;
}

export default function PostItem() {

    const { id } = useParams();
    const [item, setItem] = useState<PostProps | null>(null); // Start as null
    const [items, setItems] = useState<PostProps[]>([]);

    const tabsData = [
        { id: 1, name: 'popular', active: true },
        { id: 2, name: 'Trending', active: false }
    ]
    const [tabs, setTabs] = useState(tabsData);

    const handleTabActive = (id: number) => {
        setTabs(tabsData.map(tab => ({
            ...tab,
            active: tab.id === id
        })));
    }

    const fetchItemById = async () => {
        try {
            const response = await fetch(`/api/postitems/${id}`);
            const data = await response.json();
            setItem(data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    const fetchItems = async () => {
        try {
            const response = await fetch('/api/postitems');
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        if (item?.date) {
            setFormattedDate(new Date(item.date).toLocaleDateString('en-US'));
        }
    }, [item?.date]);

    useEffect(() => {
        fetchItemById();
        fetchItems();
    }, [])

    // Short-circuit rendering until item is fetched
    if (!item) return <PreLoader />

    return (
        <main id="main">
            <section className="single-post-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 post-content">
                            <div className="single-post">
                                <div className="post-meta">
                                    <span className="date">
                                        {item.category}
                                    </span>
                                    <span className="mx-1">
                                        <i className="bi bi-dot"></i>
                                    </span>
                                    <span>{formattedDate}</span>
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
                                    <figcaption className='mt-2 text-muted'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="aside-block">
                                <ul className='nav nav-pills custom-tab-nav mb-4'>
                                    {tabs.map(tab => (
                                        <li className="nav-item" key={tab.id}>
                                            <button className={`nav-link ${tab.active ? 'active' : undefined}`}
                                                onClick={() => handleTabActive(tab.id)}>
                                                {tab.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <div className="tab-content">
                                    <div className={`tab-pane fade ${tabs[0].active ? 'show active' : ''}`}>
                                        {items.slice(0, 6).map((item) => (
                                            <SidePostItem key={item._id} item={item} />
                                        ))}
                                    </div>
                                    <div className={`tab-pane fade ${tabs[1].active ? 'show active' : ''}`}>
                                        {items.slice(6, 12).map((item) => (
                                            <SidePostItem key={item._id} item={item} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="aside-block">
                                <h3 className="aside-title">Video</h3>
                                <div className="video-post">
                                    <a
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        href="https://www.youtube.com/watch?v=uHNS_ZhI62c"
                                        className="link-video"
                                    >
                                        <span className="bi-play-fill"></span>
                                        <img
                                            src="/assets/img/post-landscape-3.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}
