import React, { Fragment } from 'react'
import BookStatsAndButtons from './book-stats-buttons-wrapper'
import { getAllBooksAndAuthors } from '@/api/reboo-api/services/book.service'
import BookList from '@/components/lists/book-list'

type Props = {
  params: {
    userId: number
  }
}

export default async function LibraryPage({ params }: Props) {
  const books = await getAllBooksAndAuthors(params.userId)
  return (
    <Fragment>
      <BookStatsAndButtons params={params} />
      <BookList title='Todos os livros' books={books} />
    </Fragment>
  )
}