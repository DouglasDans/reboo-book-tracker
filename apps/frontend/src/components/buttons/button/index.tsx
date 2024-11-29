import React, { ReactNode } from 'react';
import styles from "./index.module.scss"

type Props = {
  children?: ReactNode
  startDecorator?: ReactNode
  endDecorator?: ReactNode
  variant?: "primary" | "secondary"
  notRounded: boolean
  textColor?: string | null
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  fullWidth?: boolean
}

export default function Button({
  children,
  startDecorator,
  endDecorator,
  variant = "primary",
  notRounded = false,
  textColor,
  onClick,
  fullWidth = false
}: Props) {

  return (
    <button
      className={`
        ${styles.button} ${styles[variant]} 
        ${!children ? (styles.fixedWidth) : (styles.fitContentWidth)} 
        ${fullWidth ? styles.fullWidth : ""}
        ${notRounded ? styles.notRounded : ""}
      `}
      style={{ color: `${variant === 'primary' && textColor !== null ? textColor : ''}` }}
      onClick={onClick}
    >
      {startDecorator}
      {children}
      {endDecorator}
    </button>
  )

}
