import React from 'react';

export default function Contact() {
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
          <form>
            <div className="row mb-3">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Message"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mx-auto d-block">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
