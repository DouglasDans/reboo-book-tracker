import React from 'react'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import ToggleDropdownMenu from '@/components/toggle-dropdown-menu'
import MenuBookCollectionSelector from '@/components/toggle-dropdown-menu/dropdown-menus/book-collection-selector'

type Props = {
  name: string
  backgroundColors: string
}

export default function CollectionBannerContainer({ name, backgroundColors }: Props) {
  return (
    <div className={styles.container} style={{ backgroundColor: backgroundColors }}>
      <h1>{name}</h1>
      <div className={styles.buttonsWrapper}>
        <Button textColor={backgroundColors} startDecorator={<Icon name='palette' />}></Button>
        <ToggleDropdownMenu content={<MenuBookCollectionSelector />}>
          <Button textColor={backgroundColors} startDecorator={<Icon name='bookmark_add' />}>Adicionar Livro</Button>
        </ToggleDropdownMenu>
      </div>
    </div>
  )
}