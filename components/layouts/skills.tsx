import React from 'react'
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '../ui/card';
 
const Skills = () => {
  return (
    <div className='lg:w-[30%] md:w-[60%] sm:w-[80%] mx-auto mb-20'>
      <h1 className="text-2xl font-semibold text-center">Skills</h1>
      <Card className='card mx-auto flex pt-10 pb-10'>
        <CardTitle >Tech Stack</CardTitle>
        <CardTitle >Qualifications</CardTitle>
        <CardContent>

        </CardContent>
      </Card>
    </div>
  )
}

export default Skills;