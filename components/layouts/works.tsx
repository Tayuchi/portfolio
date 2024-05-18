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

import Autoplay from "embla-carousel-autoplay"

const Works = () => {
	const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: false}))
  return (
    <div className='w-full max-w-lg mx-auto flex flex-col items-center justify-between '>
      <h1 className="text-2xl font-semibold text-center mb-5">Works</h1>
      <Card className='card h-[650px]'>
        <Carousel 
          opts={{ align:"start", loop:true, }} 
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-lg mx-auto relative p-4 sm:p-8"
          >
          <CarouselContent>
            <CarouselItem className='w-full'>
              <div>
                <div className='flex flex-col items-center justify-center'>
                  <CardContent>
                    <CardTitle>夢ニキ Yumeniki</CardTitle>
                  </CardContent>
                  <CardContent>
                    <Image 
                      src="/works/yumeniki.png"
                      width={400}
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
                      <p>開発人数：2人</p>
                    </CardContent>
                    <CardContent>
                      <p>使用技術：Next.js, NextAuth, Django, Docker, Chat-GPT4</p>
                    </CardContent>
                    <CardContent>
                      <p>Code：
                        <a href="https://github.com/5skip/yumeniki" target="_blank" rel="noopener noreferrer">
                          https://github.com/5skip/yumeniki
                        </a>
                      </p>
                    </CardContent>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <div className='flex flex-col items-center justify-center'>
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
                      <p>概要：投稿した内容（画像とテキスト）をAIが再生成し、適切な表現に直してくれる「炎上しないSNS」。2024年 技育CAMP vol.2で作成。努力賞受賞。</p>
                    </CardContent>
                    <CardContent>
                      <p>制作期間：1週間</p>
                    </CardContent>
                    <CardContent>
                      <p>開発人数：4人</p>
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
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <div className='flex flex-col items-center justify-center'>
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
                      <p>概要：Google Street Viewの画像と同じ写真を現地で取り、2枚の画像の類似度でスコアを出すゲームアプリ。技育博にて出展。企業賞(DeNA, ゆめみ)受賞。</p>
                    </CardContent>
                    <CardContent>
                      <p>制作期間：1ヶ月</p>
                    </CardContent>
                    <CardContent>
                      <p>開発人数：4人</p>
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
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <div className='postion-absolute flex flex-col items-center justify-center'>
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
                      <p>概要：当ポートフォリオサイト。</p>
                    </CardContent>
                    <CardContent>
                      <p>制作期間：1ヶ月</p>
                    </CardContent>
                    <CardContent>
                      <p>開発人数：1人</p>
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
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Card>
    </div>
  )
}

export default Works;