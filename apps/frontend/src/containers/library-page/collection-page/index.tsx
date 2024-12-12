import React from 'react'
import CollectionBannerContainer from './banner-container'
import { Collection } from '@/api/reboo-api/api.types'

type Props = {
  collection: Collection
}

export default function CollectionPage({ collection }: Props) {
  return (
    <section>
      <CollectionBannerContainer {...collection} />
    </section>
  )
}