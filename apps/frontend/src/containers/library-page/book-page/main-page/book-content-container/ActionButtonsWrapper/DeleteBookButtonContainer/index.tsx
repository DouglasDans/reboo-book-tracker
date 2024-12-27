'use client'

import { deleteBook } from '@/actions/book.action'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import { BookDataContext } from '@/context/book/BookDataProvider'
import { Book } from '@/api/reboo-api/api.types'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function DeleteBookButtonContainer() {
  const router = useRouter()
  const book = useContext(BookDataContext) as Book

  async function removeBook() {
    if (confirm("Deseja realmente deletar o livro selecionado? Essa ação é irreversível!")) {
      const deletedBook = await deleteBook(book.id) as Book

      if (!deletedBook.id) {
        alert("houve um problema para deletar o livro, tente novamente mais tarde.")
      }
      router.push("../")
    }
  }

  return (
    <Button onClick={removeBook} variant='secondary' startDecorator={<Icon name='delete' />}>
      Deletar Livro
    </Button>
  )
}