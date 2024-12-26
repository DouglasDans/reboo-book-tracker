'use client'

import styles from './index.module.scss'
import Icon from '@/components/icon'
import ListItemButton from '@/components/buttons/list-item-button'
import { Book } from '@/api/reboo-api/api.types'
import { useEffect, useState } from 'react'
import { useUserContext } from '@/context/user/UserProvider'
import { bookApiService } from '@/api/reboo-api'
import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import { FormCollection } from '@/types/forms.types'

export default function Step2CollectionBooks() {
  const userData = useUserContext()
  const [collectionState, setCollectionState] = MenuFormData.useMenuFormData<FormCollection>()
  const [userBooks, setUserBooks] = useState<Book[]>([])

  async function getUserBooks() {
    const books = await bookApiService.getAllBooksAndAuthors(userData.id);
    const newBooks = books.filter(book => !collectionState.books.some(collectionBook => collectionBook.id === book.id));
    setUserBooks(newBooks);
  }

  function handleSelectBook(book: Book) {
    if (!(collectionState.books || []).some(selectedBook => selectedBook.id === book.id)) {
      setCollectionState({
        books: [book, ...collectionState.books]
      })
      setUserBooks(userBooks.filter(userBook => userBook.id !== book.id))
    }
  }

  function handleRemoveSelectedBook(book: Book) {
    setCollectionState({
      books: collectionState.books.filter(selectedBook => selectedBook.id !== book.id)
    })
    setUserBooks([book, ...userBooks])
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

      {collectionState.books.length > 0 &&
        <div className={styles.addListContainer}>
          <h6>Livros Adicionados</h6>
          <div className={styles.listItems}>
            {collectionState.books.map((book) => {
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

      {collectionState.books.length === 0 &&
        <div className={styles.addListContainer}>
          <h6>Livros que serão adicionados</h6>
          Selecione livros que podem ser adicionados acima
        </div>
      }
    </div>
  )
}