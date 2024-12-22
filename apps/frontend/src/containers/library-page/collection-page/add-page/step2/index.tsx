'use client'

import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import ListItemButton from '@/components/buttons/list-item-button'
import { Book } from '@/api/reboo-api/api.types'
import { useEffect, useState } from 'react'
import { useUserContext } from '@/context/user/UserProvider'
import { bookApiService } from '@/api/reboo-api'
import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import { FormCollection } from '@/types/forms.types'
import Input from '@/components/forms/input'

export default function Step2CollectionBooks() {
  const userData = useUserContext()
  const [collectionState, setCollectionState] = MenuFormData.useMenuFormData<FormCollection>()

  const [userBooks, setUserBooks] = useState<Book[]>([])
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([])

  function pullBooksToCollectionForm() {
    setCollectionState({
      books: selectedBooks
    })
    console.log(collectionState);

  }

  async function getUserBooks() {
    const books = await bookApiService.getAllBooksAndAuthors(userData.id)
    setUserBooks(books)
  }

  function handleSelectBook(book: Book) {
    if (!selectedBooks.some(selectedBook => selectedBook.id === book.id)) {
      setSelectedBooks([book, ...selectedBooks,])
    }
  }

  function handleRemoveSelectedBook(book: Book) {
    setSelectedBooks(selectedBooks.filter(selectedBook => selectedBook.id !== book.id))
  }

  useEffect(() => {
    getUserBooks()
  }, []);

  return (
    <div className={styles.container}>
      <h6>Adicionar Livros</h6>

      {/* <Input type='text' placeholder='Pesquisar nos seus livros' /> */}

      <div className={styles.listItems}>
        {userBooks.map((book) => {
          return (
            <ListItemButton
              key={book.id}
              startDecorator={<Icon name='book' color={book.highlightColor} />}
              endDecorator={<Icon name='add' />}
              onClick={() => { handleSelectBook(book) }}
            >
              {book.title}
            </ListItemButton>
          )
        })}
      </div>

      {selectedBooks.length > 0 &&
        <div className={styles.addListContainer}>
          <h6>Livros que serão adicionados</h6>
          <div className={styles.listItems}>
            {selectedBooks.map((book) => {
              return (
                <ListItemButton
                  key={book.id}
                  startDecorator={<Icon name='book' color={book.highlightColor} />}
                  endDecorator={<Icon name='remove' />}
                  onClick={() => { handleRemoveSelectedBook(book) }}
                >
                  {book.title}
                </ListItemButton>
              )
            })}
          </div>
        </div>
      }

      {selectedBooks.length === 0 &&
        <div className={styles.addListContainer}>
          <h6>Livros que serão adicionados</h6>
          Selecione livros que podem ser adicionados acima
        </div>
      }

      <Button
        notRounded
        fullWidth
        variant='secondary'
        startDecorator={<Icon name='bookmark_add' />}
        onClick={() => { pullBooksToCollectionForm() }}
      >
        Adicionar Livros
      </Button>
    </div>
  )
}