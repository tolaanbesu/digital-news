'use client'
import React,{useState, useEffect} from 'react'
import PreLoader from '@/components/PreLoader'
import PostitemOne from '@/components/PostitemOne';
import PageTitle from '@/components/PageTitle';

export default function PostItems() {
     const [items, setItems] = useState([]);

     const fetchItems = async()=>{
         
       try{
        const response = await fetch('/api/postitems');
        const data = await response.json();
        setItems(data);
       }catch(error){
        console.error('coudnot fetch data:', error)
       }
        
     }

     useEffect(()=>{ 
       fetchItems()
     }, [items])

  return (
    <main id="main">
        <section id="posts" className="posts">
          <div className="container">
            <div className="row">
                <PageTitle title="Post List"/>
                {
                    items && items.length > 0 ? (
                        items.map((item) => (
                        <div className="col-lg-3 col-md-6" key={item._id}>
                            <PostitemOne item={item} large={false}/>
                        </div>
                        ))
                    ) : (
                        <PreLoader/>
                    )
                }

            </div>
          </div>
        </section>
    </main>
  )
}
