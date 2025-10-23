'use client'
import React, {useState, useEffect, use} from 'react'
import {initalState} from '../page'

export default function EditPostIem({params}:{params:{id:string}}) {
    const id = params.id;
    const [post, setPost] = useState(initalState);

    const getItembyId = ()=>{
         fetch(`/api/postitems/${id}`)
         .then(res=>res.json())
         .then(data=>setPost(data))
         .catch(e=>console.log(e.message))
    };

    useEffect(()=>{
        getItembyId()
    },[]);

    const handlePostChange = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
            const {name, value} = e.target;
            setPost({...post,[name]:value, validate: ''})
        }

    const handleFormSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault();
        if(
            post.title===""||
            post.img===""||
            post.category===""||
            post.brief===""){
                setPost({...post, validate: 'incomplete'})
                return;
            }

            try{
               const response = await fetch(`/api/postitems/${id}`,{
                 method: "PUT",
                 headers: {
                    'Content-Type':'application/json'
                 },
                 body: JSON.stringify(post)
               })

               setPost({...post, validate:'loading'});
               
               if(response.status===201){
                setPost({...post, validate: 'success'})
               }
            }catch(error){
               setPost({...post, validate:'error'})
            }
    };
  return (
    <main id="main">
      <section className="create-post-content">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="row d-flex justify-content-center mt-5">
                <div className="col-lg-12">
                  <div className="col-lg-12 text-center mb-5">
                    <h1 className="page-title">Edit Post</h1>
                  </div>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <label>Title</label>
                            <input type="text"
                             name="title"
                             value={post.title}
                             onChange={handlePostChange}
                             className="form-control"
                             placeholder="Enter Title"/>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <label>Image</label>
                            <input type="text"
                             name="img"
                             value={post.img}
                             onChange={handlePostChange}
                             className="form-control"
                             placeholder="Enter Image URL"/>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <label>Category</label>
                            <input type="text"
                             name="category"
                             value={post.category}
                             onChange={handlePostChange}
                             className="form-control"
                             placeholder="Enter Post Category"/>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <label>author</label>
                            <input type="text"
                             name="author"
                             value={post.author}
                             onChange={handlePostChange}
                             className="form-control"
                             placeholder="Enter Author Name"/>
                        </div>
                        <div className="col-12 mb-3">
                             <label>Brief</label>
                             <textarea name="brief" 
                             className="form-control"
                             value={post.brief}
                             onChange={handlePostChange}
                             placeholder='Enter some discription about the post'
                             cols={30}
                             rows={10}>
                            </textarea>
                        </div>
                        <div className="mb-3">
                            {post.validate === 'loading'&&(
                                <div className="loading">Sending Post</div>
                            )}
                            {post.validate === 'incomplete'&&(
                                <div className="error-message">Please fill in all above details</div>
                            )}
                            {post.validate === 'success'&&(
                                <div className="sent-message">
                                your news was posted successfully. Thank you!</div>
                            )}
                            {post.validate === 'error'&&(
                                <div className="error-message">Server Error</div>
                            )}
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <input type="submit" className="btn btn-primary" value = 'Post Item'/>
                        </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
