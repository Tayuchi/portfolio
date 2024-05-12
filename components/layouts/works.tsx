import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const Works = () => {
  return (
		<div className='flex flex-col items-center justify-between mt-40 p-20'>
			<h1 className="text-2xl font-semibold text-center mb-5">Works</h1>
			<Carousel opts={{ align:"start", loop:true, }} className="w-full max-w-xl card">
				<CarouselContent>
					{Array.from({ length: 3 }).map((_, index) => (
						<CarouselItem key={index}>
							<div>
								<Card className='card'>
									<CardContent className="flex aspect-square items-center justify-center">
										<span className="text-4xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
  )
}

export default Works;