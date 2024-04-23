import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-between p-20'>
      <h1 className="text-2xl font-semibold text-center mb-5">About me</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpeg"
            alt="profile"
            width={200}
            height={200}
            className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <p className="text-base">
            名前：Tayu<br />
            趣味:プログラミング、麻雀、映画鑑賞、英語学習<br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;