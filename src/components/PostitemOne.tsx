import React from 'react';
import Link from 'next/link'
import './postitemOne.css'

export default function PostitemOne({item, large}){
    return (
  <div className={`post-entry-1 ${large ? 'lg' : undefined}`}>
    <Link href={`postitems/${item._id}`}>
      {/* <img src={`/${item.img}`} alt="" className="img-fluid" /> */}
      <img
        src={item.img ? (item.img.startsWith('http') ? item.img : `/${item.img}`) : '/placeholder.jpg'}
        alt={item.title || 'Post Image'}
        className="img-fluid"
      />


    </Link>

    <div className="post-meta">
      <span className="date">{item.category}</span>
      <span className="mx-1">
        <i className="bi bi-dot"></i>
      </span>
      <span>{new Date(item.date).toLocaleDateString('en-US')}</span>
    </div>

    <h2>
      <Link href={`postitems/${item._id}`}>{item.title}</Link>
    </h2>

    {large ? (
      <>
      <p className="mb-4 d-block">{item.brief}</p>

      <div className="d-flex align-items-center author">
      <div className="photo">
        {item.avatar && <img src={item.avatar} alt="" className="img-fluid" />}
      </div>
      <div className="name">
        <h3 className="m-0 p-0">{item.author}</h3>
      </div>
    </div>
      </>
    ) : null}
  </div>
);

}                    