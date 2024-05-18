import React from 'react'
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '../ui/card';
 
const Skills = () => {
  return (
    <div className='lg:w-[30%] md:w-[60%] sm:w-[80%] mx-auto mb-20'>
      <h1 className="text-2xl font-semibold text-center mb-5">Skills</h1>
      <Card className='card mx-auto flex flex-col items-center pt-10 space-y-5 pb-5'>
        <CardTitle >Tech Stack</CardTitle>
        <CardContent>
          
        </CardContent>
        <CardTitle>Qualifications</CardTitle>
        <CardContent className='space-y-5'>
          <p>TOEIC L&R score 935</p>
          <p>実用英語技能検定1級</p>
          <p>ITパスポート</p>
          <p>基本情報技術者試験</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Skills;