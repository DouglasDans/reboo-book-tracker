import React, { Fragment } from 'react'
import BookStatsAndButtons from './book-stats-buttons-wrapper'
import ListItems from '@/components/lists/book-list'
import { bookApiService, collectionApiService } from '@/api/reboo-api';

type Props = {
  params: {
    userId: number
  }
}

export default async function LibraryPage({ params }: Props) {
  const books = await bookApiService.getAllBooksAndAuthors(params.userId)
  const collections = await collectionApiService.getAllCollectionsByUserId(params.userId)
  return (
    <Fragment>
      <BookStatsAndButtons params={params} />
      <ListItems title='Suas Coleções' listType='collections' data={collections} />
      <ListItems title='Todos os livros' data={books} />
    </Fragment>
  )
}