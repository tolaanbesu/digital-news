'use client'
import React, { useState, useEffect } from 'react';
import './searchForm.css';

interface PostItem {
  _id: string;
  title: string;
}

export default function SearchForm({
    active, 
    formOpen
}:{
    active: boolean;
    formOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<PostItem[]>([]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    

    useEffect(() => {
        if (!query) {
            setResult([]);
            return;
        }

        const fetchResult = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
            const data: PostItem[] = await res.json();
            setResult(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
        const timeout = setTimeout(fetchResult, 300);
        return () => clearTimeout(timeout);
    }, [query]); 

    return (
        <div className={`search-form-wrap js-search-form-wrap ${active ? 'active' : undefined}`}>
            <form className="search-form" onSubmit={e => e.preventDefault()}>
                <span className='icon bi-search'></span>
                <input 
                  type='text' 
                  value={query}
                  placeholder='Search' 
                  onChange={handleChange}
                  className="form-control"
                />
                <button className='btn js-search-close' onClick={formOpen}>
                    <span className="bi-x"></span>
                </button>
            </form>

            {/* Live results */}
            {loading && <div className="loading">Searching...</div>}
            {result.length > 0 && (
                <ul className="search-results">
                    {result.map(item => (
                        <li key={item._id}>
                            <a href={`/postitems/${item._id}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
