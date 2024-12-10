import React, { ReactNode } from 'react';
import styles from "./index.module.scss"

type Props = {
  children?: ReactNode
  startDecorator?: ReactNode
  endDecorator?: ReactNode
  textAlign?: "left" | "right" | "center"
  variant?: "primary" | "secondary"
  notRounded?: boolean
  textColor?: string | null
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  fullWidth?: boolean
  className?: string
}

export default function Button({
  children,
  startDecorator,
  endDecorator,
  textAlign = "center",
  variant = "primary",
  notRounded = false,
  textColor,
  onClick,
  fullWidth = false,
  className = ""
}: Props) {

  return (
    <button
      className={`
        ${styles.button} ${styles[variant]} 
        ${!children ? (styles.fixedWidth) : (styles.fitContentWidth)} 
        ${fullWidth ? styles.fullWidth : ""}
        ${fullWidth && styles["align" + textAlign]}
        ${notRounded ? styles.notRounded : ""}
        ${className}
      `}
      style={{ color: `${textColor !== null ? textColor : ''}` }}
      onClick={onClick}
    >
      {startDecorator &&
        <div className={styles.startDecorator}>{startDecorator}</div>
      }

      {children &&
        <div className={`
          ${styles.children}
          ${fullWidth && styles["align" + textAlign]}
        `}>{children}</div>
      }

      {endDecorator &&
        <div className={styles.endDecorator}>{endDecorator}</div>
      }
    </button>
  )

}
