import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-between p-20'>
      <h1 className="text-2xl font-semibold text-center mb-5">Profile</h1>
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
            名前：Tayu（本名：武市勇気）<br />
            2001年1月20日生 東京都出身<br />
            2019年9月 ロンドン大学キングスカレッジ 入学<br />
            2020年1月 ロンドン大学キングスカレッジ 中途退学<br />
            2021年4月 情報科学専門学校 情報セキュリティ学科 入学<br />
            趣味:プログラミング、麻雀、映画鑑賞、英語学習<br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;