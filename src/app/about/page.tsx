'use client'
import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 pt-32">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

      {/* Image Section */}
      <div className="w-full mb-12 flex justify-center">
        <div className="relative w-full h-80 sm:h-96 md:w-3/4 lg:w-2/3">
          <Image
            src="/about-image.jpg" // replace with your image path
            alt="About Us"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mb-12 ">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Story</h2>
        <p className="text-gray-700 leading-relaxed text-center">
          DigitalNews was founded with a mission to provide timely, accurate, and engaging news to our readers. 
          We believe in the power of information and strive to cover topics ranging from technology, sports, fashion, 
          business, and culture. Our team of dedicated journalists ensures that every story is verified, insightful, 
          and presented in a reader-friendly format.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed text-center">
          We aim to keep our audience informed and inspired. By embracing innovation, creativity, and integrity, 
          we deliver news that matters. Whether it is breaking news, in-depth analyses, or feature stories, 
          our mission is to provide a reliable platform for our readers.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team Member */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 relative">
              <Image
                src="/team1.jpg"
                alt="John Doe"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 relative">
              <Image
                src="/team2.jpg"
                alt="Jane Smith"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="font-semibold">Jane Smith</h3>
            <p className="text-gray-500">Editor-in-Chief</p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 relative">
              <Image
                src="/team3.jpg"
                alt="Alice Johnson"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="font-semibold">Alice Johnson</h3>
            <p className="text-gray-500">Senior Journalist</p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-gray-500">
        <p>© {new Date().getFullYear()} DigitalNews. All rights reserved.</p>
      </div>
    </div>
  )
}
