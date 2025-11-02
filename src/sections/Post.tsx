'use client';

import React, { useEffect, useState } from 'react';
import PostitemOne from '@/components/PostitemOne';
import TrendingPost from '@/components/TrendingPost';

import './post.css';
import PreLoader from '@/components/PreLoader';

type PostItem = {
  _id: string;
  title: string;
  author: string;
  content?: string;
  img?: string;
  trending?: boolean;
  top?: boolean;
};

export default function Post() {
  const [items, setItems] = useState<PostItem[]>([]);
  const [item, setItem] = useState<PostItem | null>(null);

  const fetchItems = () => {
    fetch('/api/postitems')
      .then(res => res.json())
      .then((data: PostItem[]) => setItems(data))
      .catch(e => console.log(e.message));
  };

  const fetchItemById = async (id: string) => {
    try {
      const res = await fetch(`/api/postitems/${id}`);
      const data: PostItem = await res.json();
      setItem(data);
    } catch (error) {
      console.error('Error Fetching item:', error);
    }
  };
  //68f8c27b9ce4651d8921a299
  useEffect(() => {
    fetchItems();
    fetchItemById('69070b93c1a62a12449ff208');
  }, []);

  return (
    <section id="posts" className="posts">
      <div className="container" data-aos="fade-up">
        <div className="row g-5">
          <div className="col-lg-4">
            {item && <PostitemOne item={item} large={true} />}
          </div>
          <div className="col-lg-8">
            <div className="row g-5">
              <div className="col-lg-4 border-start custom-border">
                {items.length > 0 ? (
                  items
                    .filter(item => !item.trending && !item.top)
                    .slice(0, 3)
                    .map(item => <PostitemOne key={item._id} item={item} large={false} />)
                ) : (
                  <PreLoader />
                )}
              </div>
              <div className="col-lg-4 border-start custom-border">
                {items.length > 0 ? (
                  items
                    .filter(item => !item.trending && !item.top)
                    .slice(3, 6)
                    .map(item => <PostitemOne key={item._id} item={item} large={false} />)
                ) : (
                  <PreLoader />
                )}
              </div>
              <div className="col-lg-4">
                <div className="trending">
                  <h3>Trending</h3>
                  <ul className="trending-post">
                    {items.length > 0 ? (
                      items
                        .filter(item => item.trending)
                        .map((item, index) => (
                          <TrendingPost key={item._id} item={item} index={index} />
                        ))
                    ) : (
                      <PreLoader />
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
