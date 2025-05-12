"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useTheme } from "next-themes"

type StatProps = {
  value: number
  label: string
  suffix?: string
}

const StatItem = ({ value, label, suffix = "" }: StatProps) => {
  const [count, setCount] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const { theme } = useTheme()

  useEffect(() => {
    if (!prefersReducedMotion) {
      let start = 0
      const duration = 2000 // 2 seconds
      const startTime = Date.now()

      const timer = setInterval(() => {
        const elapsedTime = Date.now() - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        const currentCount = Math.floor(progress * value)

        if (currentCount !== start) {
          start = currentCount
          setCount(currentCount)
        }

        if (progress === 1) {
          clearInterval(timer)
        }
      }, 16)

      return () => clearInterval(timer)
    } else {
      setCount(value)
    }
  }, [value, prefersReducedMotion])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <motion.p
        className="text-4xl md:text-5xl font-medium"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(to right, #a5b4fc, #818cf8)"
              : "linear-gradient(to right, #4f46e5, #6366f1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {count}
        {suffix}
      </motion.p>
      <p className="text-muted-foreground mt-2">{label}</p>
    </motion.div>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 border-y border-border"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatItem value={2000000} label="million users impacted" suffix="+" />
        <StatItem value={48} label="Projects Completed" />
        <StatItem value={8} label="Years Experience" />
      </div>
    </motion.section>
  )
}
