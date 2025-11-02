import React from "react";
import Image from "next/image";

const AboutCreative = () => {
  const features = [
    { title: "Global Coverage", desc: "Stay informed with news from around the world.", img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2xvYmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" },
    { title: "Verified Sources", desc: "We ensure all news is accurate and credible.", img: "https://images.unsplash.com/photo-1614064642261-3ccbfafa481b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVyaWZpZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" },
    { title: "Real-Time Updates", desc: "Never miss breaking news with instant notifications.", img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMHRpbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" },
    { title: "Community Insights", desc: "Engage with readers and share perspectives.", img: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" },
  ];

  return (
    <div className="container my-5" style={{paddingTop:"100px"}}>
      <header className="text-center mb-5">
        <h1 className="display-4">About NewsPulse</h1>
        <p className="lead">
          Innovating the way you consume news – insightful, engaging, and always on time.
        </p>
      </header>

      <div className="row">
        {features.map((feature, idx) => (
          <div key={idx} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 text-center shadow border-0">
              <div className="card-body">
                <div className="mb-3">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="img-fluid rounded"
                  />
                </div>
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text">{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-5 text-center">
        <h2>Our Mission</h2>
        <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
          To create a platform where news is not just delivered but experienced. We
          combine technology, credible journalism, and community engagement to ensure
          our readers get the most out of every story.
        </p>
      </section>
    </div>
  );
};

export default AboutCreative;
