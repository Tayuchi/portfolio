'use client'

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"

const AboutCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip() {
    if (!isAnimating) {
      setIsAnimating(true)
      setIsFlipped(!isFlipped)
    }
  }

  return (
    <div className='flex flex-col items-center justify-between mt-40'>
      <motion.div 
        className="flip-card-inner cursor-pointer" 
        initial={false} 
        animate={{ rotateY: isFlipped ? 180 : 360}}
        transition={{ duration: 0.5, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <Image
          src="/header.png"
          alt="Tayu's header image"
          width={600}
          height={400}
          className="flip-card-front card rounded-md object-cover mt-5"
          onClick={handleFlip}
        />
        <div onClick={handleFlip} className="flip-card-back card rounded-md object-cover mt-5 flex flex-col items-center justify-between p-20">
          <h1 className="text-2xl font-semibold text-center">Hi, there</h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0">
              <Image
                src="/profile.jpeg"
                alt="profile"
                width={200}
                height={200}
                className="rounded-full max-w-full h-auto align-middle border-none"
              />
            </div>
            <div className="flex flex-col items-center space-y-5">
              <div className="mt-4 md:mt-0 md:ml-6">
                <p className="text-center">A college student, as well as a web developer based in Japan.</p>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/tayuchi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://twitter.com/tayu_not_found" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="https://www.linkedin.com/feed/?trk=snapple" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutCard;