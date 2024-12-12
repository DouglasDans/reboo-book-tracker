import React, { Fragment } from 'react'
import BookStatsAndButtons from './book-stats-buttons-wrapper'
import CollectionBookList from '@/components/lists/collection-book-list'
import { getAllBooksAndAuthors } from '@/services/reboo-api/services/book.service'

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
      <CollectionBookList title='Todos os livros' books={books} />
    </Fragment>
  )
}