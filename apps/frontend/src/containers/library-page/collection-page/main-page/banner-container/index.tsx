import React from 'react'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'

type Props = {
  name: string
  backgroundColors: string
  createdAt: string
  updatedAt: string
}

export default function CollectionBannerContainer({ name, backgroundColors, createdAt, updatedAt }: Props) {
  return (
    <div className={styles.container} >
      <div className={styles.bannerBackground} style={{ backgroundColor: backgroundColors }}>
        <Button textColor={backgroundColors} startDecorator={<Icon name='collections_bookmark' />}>
          Editar Coleção
        </Button>
      </div>
      <div className={styles.bannerInfo}>
        <h1>{name}</h1>
        <div className={styles.infoWrapper}>
          <span>Criado em {createdAt}</span>
          <span>Ultima edição em {updatedAt}</span>
        </div>
      </div>
    </div>
  )
}