'use client'

import { Book, Collection } from '@/api/reboo-api/api.types'
import styles from './index.module.scss'
import BookGridView from './grid-view'
import BookListView from './list-view'
import { Fragment, useState } from 'react'
import ListToggleButton from './list-toggle-button'
import BookListPlaceholder from './placeholder'
import CollectionView from './collection-view'

type Props = {
  title: string
  data: Book[] | Collection[],
  controlsDisabled?: boolean
  listNoWrap?: boolean
  listType?: "books" | "collections"
}

export default function ListItems({
  title = "Sem Título",
  controlsDisabled = false,
  listNoWrap = false,
  listType = "books",
  data
}: Props) {
  const [listSelector, setListSelector] = useState<"list" | "grid">("grid")

  let view = (
    <Fragment>
      {listType === "books" && <BookGridView listNoWrap={listNoWrap} books={data as Book[]} />}
      {listType === "collections" && <CollectionView collections={data as Collection[]} />}
    </Fragment>
  )

  listType === "collections" && (controlsDisabled = true)

  if (!controlsDisabled) {
    view = (
      <Fragment>
        {listSelector === "grid" ? <BookGridView books={data as Book[]} /> : ""}
        {listSelector === "list" ? <BookListView books={data as Book[]} /> : ""}
      </Fragment>
    )
  }

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h5>{title}</h5>
        {!controlsDisabled && (
          <div className={styles.options}>
            <h6>{`${data.length} Livros`}</h6>
            <ListToggleButton listSelector={listSelector} setListSelector={setListSelector} />
          </div>
        )}
      </header>
      {data === null || data.length > 0 ? view : <BookListPlaceholder />}
    </section>
  )
}