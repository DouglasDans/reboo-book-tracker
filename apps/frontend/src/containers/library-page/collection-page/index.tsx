import React from 'react'
import CollectionBannerContainer from './banner-container'
import { Book, Collection } from '@/api/reboo-api/api.types'
import ListItems from '@/components/lists/book-list'

type Props = {
  collection: Collection
}

export default function CollectionPage({ collection }: Props) {

  const books: Book[] = collection.books?.map(item => item.book) || [];

  return (
    <div>
      <CollectionBannerContainer {...collection} />
      <ListItems
        title='Livros Adicionados'
        data={books}
      />
    </div>
  )
}