import React, { ReactNode } from 'react'
import Button from '../button'
import Link from 'next/link'
import styles from './index.module.scss'

type Props = {
  children: ReactNode
  startDecorator?: ReactNode
  endDecorator?: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  link?: string
}

export default function ListItemButton({ children, endDecorator, link, onClick, startDecorator }: Props) {

  const button = (
    <Button
      startDecorator={startDecorator}
      endDecorator={endDecorator}
      onClick={onClick}
      variant='secondary'
      fullWidth
      notRounded
      textAlign='left'
      className={styles.button}
    >{children}</Button>
  )

  if (link) {
    return (
      <Link href={link}>
        {button}
      </Link>
    )
  }

  return button
}