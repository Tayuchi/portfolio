import React from 'react'
import Image from 'next/image'
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
		<div className='flex flex-col items-center justify-between mt-20 p-20'>
			<h1 className="text-2xl font-semibold text-center mb-5">Works</h1>
			<Carousel opts={{ align:"start", loop:true, }} className="w-full max-w-xl">
				<CarouselContent>
						<CarouselItem className='w-full'>
							<div>
								<Card className='card flex flex-col aspect-square items-center justify-center p-10'>
									<CardContent>
										<CardTitle>夢ニキ Yumenki</CardTitle>
									</CardContent>
									<CardContent>
										<Image 
											src="/works/yumeniki.png"
											width={500}
											height={500}
											alt='yumeniki'
											/>
									</CardContent>
									<div>
										<CardContent>
											<p>概要：昨日見た夢をAIに診断してもらう夢日記アプリ。2024年 技育CAMP vol.2で作成。</p>
										</CardContent>
										<CardContent>
											<p>制作期間：1週間</p>
										</CardContent>
										<CardContent>
											<p>仕様技術：Next.js, Django, Chat-GPT4</p>
										</CardContent>
										<CardContent>
											<p>Link：
												<a href="https://github.com/5skip/yumeniki" target="_blank" rel="noopener noreferrer">
													https://github.com/5skip/yumeniki
												</a>
											</p>
										</CardContent>
									</div>
								</Card>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div>
								<Card className='card flex flex-col aspect-square items-center justify-center p-10'>
									<CardContent>
										<CardTitle>Parrotter</CardTitle>
									</CardContent>
									<CardContent>
										<Image 
											src="/works/parrotter.png"
											width={200}
											height={500}
											alt='parrotter'
											/>
									</CardContent>
									<div>
										<CardContent>
											<p>投稿した内容（画像を含む）をAIが再生成し、適切な表現に直してくれる「炎上しないSNS」。2024年 技育CAMP vol.2で作成。努力賞受賞。</p>
										</CardContent>
										<CardContent>
											<p>制作期間：1週間</p>
										</CardContent>
										<CardContent>
											<p>仕様技術：Next.js, Django, Chat-GPT4</p>
										</CardContent>
										<CardContent>
											<p>Link：
												<a href="https://github.com/5skip/yumeniki" target="_blank" rel="noopener noreferrer">
													https://github.com/5skip/yumeniki
												</a>
											</p>
										</CardContent>
									</div>
								</Card>
							</div>
						</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
  )
}

export default Works;