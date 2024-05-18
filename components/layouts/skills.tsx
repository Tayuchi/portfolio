import React from 'react'
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '../ui/card';
 
const Skills = () => {
  return (
    <div className='lg:w-[40%] md:w-[80%] sm:w-[80%] mx-auto mb-20'>
      <h1 className="text-2xl font-semibold text-center mb-5">Skills</h1>
      <Card className='card mx-auto flex flex-col items-center pt-10 space-y-5 pb-5'>
        <CardTitle >Tech Stack</CardTitle>
        <CardContent className='mx-auto flex flex-wrap items-center'>
          <Image src='/skills/icons8-css-144.png' width={50} height={300} alt='css' />
          <Image src='/skills/icons8-css-144.png' width={50} height={300} alt='css' />
          <Image src='/skills/icons8-css-144.png' width={50} height={300} alt='css' />
          <Image src='/skills/icons8-css-144.png' width={50} height={300} alt='css' />
          <Image src='/skills/icons8-css-144.png' width={50} height={300} alt='css' />
          <Image src='/skills/icons8-css-144.png' width={50} height={300} alt='css' />
          <Image src='/skills/icons8-css-144.png' width={50} height={300} alt='css' />
          <Image src='/skills/icons8-css-144.png' width={50} height={300} alt='css' />
          <Image src='/skills/icons8-css-144.png' width={50} height={300} alt='css' />
          <Image src='/skills/icons8-css-144.png' width={50} height={300} alt='css' />
        </CardContent>
        <CardTitle>Licenses</CardTitle>
        <CardContent className='space-y-5'>
          <p>実用英語技能検定1級 (2021, Nov)</p>
          <p>TOEIC L&R score 935 (2022, Feb)</p>
          <p>ITパスポート (2021, Jun)</p>
          <p>基本情報技術者試験 (2023, Nov)</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Skills;