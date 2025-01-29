"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const MyPhoto = () => {
  return (
    <div className="w-full h-full relative flex justify-end items-start mt-8">
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 1, duration: 0.2, ease: "easeInOut"}}}
            >
            <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
                <Image
                src="/my_image.png"
                priority
                quality={100}
                fill
                alt=""
                className="object-contain"
                />
            </div>
        </motion.div>
    </div>
  )
}

export default MyPhoto;

