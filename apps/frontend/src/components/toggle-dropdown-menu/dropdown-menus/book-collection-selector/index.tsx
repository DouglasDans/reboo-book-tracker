'use client'

import React, { useContext, useEffect, useState } from 'react'
import styles from './index.module.scss'
import ListItemButton from '@/components/buttons/list-item-button'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import { UserContext } from '@/context/user/UserProvider'
import { getAllBooksAndAuthors } from '@/services/rebooAPI/api.services'
import { Book } from '@/services/rebooAPI/api.types'

export default function MenuBookCollectionSelector() {
  const userId = useContext(UserContext) as number

  const [userBooks, setUserBooks] = useState<Book[]>([])
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([])

  async function getUserBooks() {
    const books = await getAllBooksAndAuthors(userId)
    setUserBooks(books)
  }

  function handleSelectBook(book: Book) {
    setSelectedBooks([...selectedBooks, book])
  }

  useEffect(() => {
    getUserBooks()
  }, []);

  return (
    <div className={styles.container}>
      <h6>Adicionar Livros</h6>
      <input type='text' placeholder='Pesquisar nos seus livros' />

      <div className={styles.listItems}>
        {userBooks.map((book, index) => {
          if (index < 3) {
            return (
              <ListItemButton
                key={book.id}
                startDecorator={<Icon name='book' color={book.highlightColor} />}
                endDecorator={<Icon name='check_box_outline_blank' />}
                onClick={() => { handleSelectBook(book) }}
              >
                {book.title}
              </ListItemButton>
            )
          }
        })}
      </div>

      <div className={styles.listItems}>
        <h6>Livros que serão adicionados</h6>
        {selectedBooks.map((book, index) => {
          return (
            <ListItemButton
              key={book.id}
              startDecorator={<Icon name='book' color={book.highlightColor} />}
              endDecorator={<Icon name='check_box' />}
            >
              {book.title}
            </ListItemButton>
          )
        })}
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