import React, { ReactNode } from 'react';
import styles from "./index.module.scss"

type Props = {
  value: string
  decorator?: ReactNode
  image?: string
  color?: string
  bgcolor?: string
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ColorButton({
  value,
  decorator,
  image,
  color,
  disabled,
  onClick
}: Props) {

  return (
    <button disabled={disabled} className={`${styles.button}`} onClick={onClick} style={{ backgroundColor: color }}>
      <div className={styles.iconImageCover}>
        <div className={styles.icon}>{decorator}</div>
        {image ? <img src={image} alt="" /> : ""}
      </div>
      <div className={styles.textButton}>
        <h5 className={styles.title}>{value}</h5>
      </div>
    </button>
  )
}
