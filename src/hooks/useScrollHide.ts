import { useState, useEffect, useRef } from 'react'

export function useScrollHide(threshold = 10) {
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setAtTop(currentY < 10)
      if (Math.abs(currentY - lastScrollY.current) < threshold) return
      setVisible(currentY < lastScrollY.current || currentY < 80)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return { visible, atTop }
}
