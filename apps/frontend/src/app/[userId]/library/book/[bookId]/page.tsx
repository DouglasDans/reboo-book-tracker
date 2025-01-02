
import BookBanner from '@/components/banners/book-banner'
import BookContentWrapper from '@/containers/library-page/book-page/main-page/book-content-container'
import { bookApiService } from '@/api/reboo-api'
import React, { Fragment } from 'react'
import BookBannerContainer from '@/containers/library-page/book-page/main-page/banner-container'

type Props = {
  params: {
    bookId: number
  }
}

export async function generateMetadata({ params }: Props) {
  const book = await bookApiService.getBookById(params.bookId)
  return {
    title: `${book.title}`,
  }
}

export default async function BookPage({ params }: Props) {

  const book = await bookApiService.getBookById(params.bookId)

  return (
    <Fragment>
      <BookBannerContainer book={book} />
      <BookContentWrapper book={book} />
    </Fragment>
  )
}