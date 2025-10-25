'use client'
import React,{useEffect, useState} from 'react';


const initalState = {
  name:'',
  email:'',
  subject:'',
  message:'',
  validate:false
}

export default function Contact() {

  const [info , setInfo] = useState(initalState);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name, value} = e.target;
    setInfo((prev)=>({
      ...prev, [name]:value
    }))
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(info)

    })
    if(res.ok){
      setInfo((prev) => ({ ...initalState, validate: true }));

      setTimeout(() => {
      setInfo(initalState);
    }, 3000);
    }
    
  }

  
  return (
    <div
      className="d-flex flex-column align-items-center px-3 py-5"
      style={{ maxWidth: '1000px', margin: '0 auto', marginTop: '80px' }} // adjust to match header height
    >
      {/* Title */}
      <h1 className="text-black mb-4 text-center fw-bold">Contact us</h1>

      {/* Address Section */}
      <div className="d-flex w-100 justify-content-between mb-4" style={{ gap: '2rem' }}>
        <div className="text-center flex-grow-1" style={{ position: 'relative' }}>
          <i className="bi bi-geo-alt fs-1 mb-2"></i>
          <h3>ADDRESS</h3>
          <p>Niger St, Addis Ababa, Ethiopia</p>
          {/* Vertical line separator */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: '10%',
              bottom: '10%',
              width: '0.5px',
              backgroundColor: 'rgba(0,0,0,0.1)'
            }}
            className="d-none d-lg-block"
          ></div>
        </div>

        <div className="text-center flex-grow-1 position-relative">
          <i className="bi bi-telephone fs-1 mb-2"></i>
          <h3>PHONE</h3>
          <p>+251 946820183</p>
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: '10%',
              bottom: '10%',
              width: '0.5px',
              backgroundColor: 'rgba(0,0,0,0.1)'
            }}
            className="d-none d-lg-block"
          ></div>
        </div>

        <div className="text-center flex-grow-1">
          <i className="bi bi-envelope fs-1 mb-2"></i>
          <h3>EMAIL</h3>
          <p>tolaanbesu927@gmail.com</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-100" style={{ maxWidth: '900px' }}>
        <div
          className="p-4"
          style={{
            boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'white'
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <input
                  name="name"
                  value={info.name}
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  name="email"
                  value={info.email}
                  type="email"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                name="subject"
                value={info.subject}
                type="text"
                onChange={handleChange}
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                value={info.message}
                className="form-control"
                onChange={handleChange}
                placeholder="Message"
                required
                rows="3"
              ></textarea>
            </div>

            {
              info.validate && <div className="alert alert-success" role="alert">
              Your message has been sent successfully!
            </div>
            }

            <button type="submit" className="btn btn-primary mx-auto d-block">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
