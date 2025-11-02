'use client'
import React,{useState, useEffect} from 'react'
import PreLoader from '@/components/PreLoader'
import PostitemOne from '@/components/PostitemOne';
import PageTitle from '@/components/PageTitle';

type PostItem = {
  _id: string;
}

export default function PostItems() {
     const [items, setItems] = useState<PostItem[]>([]);

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
     }, [])

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
