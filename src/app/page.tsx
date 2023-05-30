'use client'

import { easeOut, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const page = useSelector((state: any) => state.slice.page)

  useEffect(() => {
    console.log(page)
  }, [page])

  return (
    <>
      <div className="absolute top-0 z-0 h-screen w-full">
        <TextMain />
      </div>
    </>
  )
}

function TextMain() {
  const animation = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 20 },
    transition: { duration: 1.5, mass: 7, ease: easeOut },
  }

  return (
    <div className="z-10 flex h-full w-full flex-col items-start justify-center text-8xl font-extrabold text-white">
      <div className="pl-32">
        <motion.div {...animation} className="h-20 leading-10 tracking-tight">
          <motion.span
            initial={{ height: 110 }}
            animate={{ height: 0 }}
            transition={{ ...animation.transition }}
          >
            Let&apos;s
          </motion.span>
        </motion.div>
        <motion.div
          {...animation}
          transition={{ ...animation.transition, delay: 0.3 }}
          className="h-20 leading-10 tracking-tight"
        >
          <motion.span
            initial={{ height: 110 }}
            animate={{ height: 0 }}
            transition={{ ...animation.transition, delay: 0.3 }}
          >
            Program!
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}

/*
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Home() {
  const router = useRouter()

  const handleClick = (event: any) => {
    event.preventDefault()
    console.log('oi')
    setTimeout(() => {
      router.push('/members')
    }, 1000)
  }

  return (
    <Link href="/members" onClick={handleClick}>
      a
    </Link>
  )
} 
*/
