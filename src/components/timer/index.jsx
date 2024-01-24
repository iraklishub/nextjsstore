'use client'

import { useState, useEffect } from 'react'
import clsx from 'clsx'

const Timer = ({ className }) => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const deadline = 'January, 30, 2024'

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now()

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
    setMinutes(Math.floor((time / 1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={clsx(
        'w-[280px] h-[60px] bg-[#B1B1B1] flex items-center justify-around',
        className
      )}
    >
      <div className="flex flex-col">
        <span className="text-2xl">{days}</span>
        <span>Days</span>
      </div>
      :
      <div className="flex flex-col">
        <span className="text-2xl">{hours}</span>
        <span>Hours</span>
      </div>
      :
      <div className="flex flex-col">
        <span className="text-2xl">{minutes}</span>
        <span>Minutes</span>
      </div>
      :
      <div className="flex flex-col">
        <span className="text-2xl">{seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  )
}

export default Timer
