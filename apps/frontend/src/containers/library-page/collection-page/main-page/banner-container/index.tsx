import React from 'react'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import { formatDate } from '@/utils/library.utils'
import Link from 'next/link'

type Props = {
  id: number
  name: string
  backgroundColors: string
  createdAt: string
  updatedAt: string
}

export default function CollectionBannerContainer({ name, backgroundColors, createdAt, updatedAt, id }: Props) {
  const createdAtFormatted = formatDate(createdAt)
  const updatedAtFormatted = formatDate(updatedAt)

  return (
    <div className={styles.container}>
      <div className={styles.bannerBackground} style={{ backgroundColor: backgroundColors }}>
        <Link href={`${id}/edit`}>
          <Button textColor={backgroundColors} startDecorator={<Icon name="collections_bookmark" />}>
            Editar Coleção
          </Button>
        </Link>
      </div>
      <div className={styles.bannerInfo}>
        <h1>{name}</h1>
        <div className={styles.infoWrapper}>
          <span>Criado em {createdAtFormatted}</span>
          <span>Última edição em {updatedAtFormatted}</span>
        </div>
      </div>
    </div>
  )
}
