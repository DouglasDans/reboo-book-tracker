import React from 'react'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import { formatDate } from '@/utils/library.utils'

type Props = {
  name: string
  backgroundColors: string
  createdAt: string
  updatedAt: string
}

export default function CollectionBannerContainer({ name, backgroundColors, createdAt, updatedAt }: Props) {
  const createdAtFormatted = formatDate(createdAt)
  const updatedAtFormatted = formatDate(updatedAt)

  return (
    <div className={styles.container}>
      <div className={styles.bannerBackground} style={{ backgroundColor: backgroundColors }}>
        <Button textColor={backgroundColors} startDecorator={<Icon name="collections_bookmark" />}>
          Editar Coleção
        </Button>
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
