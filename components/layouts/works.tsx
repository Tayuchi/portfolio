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
											<p>使用技術：Next.js, NextAuth, Django, Chat-GPT4</p>
										</CardContent>
										<CardContent>
											<p>Code：
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
											<p>使用技術：Next.js, MUI, Firebase, Chat-GPT4</p>
										</CardContent>
										<CardContent>
											<p>Code：
												<a href="https://github.com/Tayuchi/TESNS" target="_blank" rel="noopener noreferrer">
													https://github.com/Tayuchi/TESNS
												</a>
											</p>
										</CardContent>
									</div>
								</Card>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div>
								<Card className='card flex flex-col aspect-square items-center justify-center m-5 p-5'>
									<CardContent>
										<CardTitle>Photo Pickle</CardTitle>
									</CardContent>
									<CardContent>
										<Image 
											src="/works/photopickle.png"
											width={150}
											height={500}
											alt='photo-pickle'
											/>
									</CardContent>
									<div>
										<CardContent>
											<p>Google Street Viewの画像と同じ写真を現地で取り、2枚の画像の類似度でスコアを出すゲームアプリ。技育博にて出展。企業賞(DeNA, ゆめみ)受賞。</p>
										</CardContent>
										<CardContent>
											<p>制作期間：1ヶ月</p>
										</CardContent>
										<CardContent>
											<p>使用技術：Next.js, MUI, NextAuth, Prisma, Supabase, GCP, Vercel</p>
										</CardContent>
										<CardContent>
											<p>Code：
												<a href="https://github.com/Kabuto0421/PhotoPickle" target="_blank" rel="noopener noreferrer">
													https://github.com/Kabuto0421/PhotoPickle
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
										<CardTitle>Portfolio Site</CardTitle>
									</CardContent>
									<CardContent>
										<Image 
											src="/works/portfolio.png"
											width={200}
											height={500}
											alt='photo-pickle'
											/>
									</CardContent>
									<div>
										<CardContent>
											<p>概要：当ポートフォリオサイトです。</p>
										</CardContent>
										<CardContent>
											<p>制作期間：1ヶ月</p>
										</CardContent>
										<CardContent>
											<p>使用技術：Next.js, shadcn/ui, framer-motion, emailjs, Vercel</p>
										</CardContent>
										<CardContent>
											<p>Code：
												<a href="https://github.com/Tayuchi/portfolio" target="_blank" rel="noopener noreferrer">
													https://github.com/Tayuchi/portfolio
												</a>
											</p>
										</CardContent>
										<CardContent>
											<p>Link：
												<a href="https://portfolio-72weoviql-tayuchis-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
													https://portfolio-72weoviql-tayuchis-projects.vercel.app/
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