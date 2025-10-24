'use client'
import React,{useState, useEffect} from 'react';
import './searchForm.css'
export default function SearchForm({
    active, 
    formOpen
}:{
    active:boolean;
    formOpen:object|any
}){
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any[]>([]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(e.target.value)
    }

    const fetchResult = async()=>{
        setLoading(true);
        try {
            const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
            const data = await res.json();
            setResult(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(!query){
            setResult([]);
            return;
        }
        const timeout = setTimeout(fetchResult, 300);
        return () => clearTimeout(timeout);
    }, [query]);

    return (
    <div className={`search-form-wrap js-search-form-wrap ${active ? 'active' : undefined}`}>
        <form className="search-form">
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
    </div>)
}