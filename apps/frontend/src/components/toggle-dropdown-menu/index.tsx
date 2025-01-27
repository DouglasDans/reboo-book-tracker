"use client"

import React, { useState, useEffect, useRef } from "react"
import styles from "./index.module.scss"

type Props = {
  content: React.ReactNode
  children: React.ReactNode
  fullWidth?: boolean
}

export default function ToggleDropdownMenu({ children, content, fullWidth = false }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownMargin, setDropdownMargin] = useState<string>()
  const cardRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [cardRef])

  useEffect(() => {
    if (buttonRef.current) {
      const buttonHeight = buttonRef.current.offsetHeight;
      setDropdownMargin(`${buttonHeight + 10}px`);
    }
  }, [buttonRef]);

  return (
    <div ref={cardRef} className={`${styles.cardContainer} ${fullWidth && styles.fullWidth}`}>
      <div onClick={() => setIsOpen(!isOpen)} ref={buttonRef} className={styles.cardOpener}>
        {children}
      </div>
      {isOpen && <div className={styles.card} style={{ marginTop: dropdownMargin }}>
        {content}
      </div>}
    </div>
  )
}
