import React from 'react'
import styles from './index.module.scss'
import BookItemButton from '@/components/buttons/book-item-button'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'

export default function MenuBookCollectionSelector({ }: Props) {
  return (
    <div className={styles.container}>
      <h6>Adicionar Livros</h6>
      <input type='text' placeholder='Pesquisar nos seus livros' />

      <div>
        <BookItemButton />
      </div>

      <Button
        notRounded
        fullWidth
        variant='secondary'
        startDecorator={<Icon name='bookmark_add' />}
      >
        Adicionar Livros
      </Button>
    </div>
  )
}