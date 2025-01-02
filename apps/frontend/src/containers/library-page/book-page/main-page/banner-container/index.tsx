'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import { formatDate } from '@/utils/library.utils'
import Link from 'next/link'
import { Book } from '@/api/reboo-api/api.types'
import BookStatusTag from '@/components/book-status-tag'
import { isValidImageUrl } from '@/utils/form.utils'
import { convertStringDateToDate } from '@/utils/book.utils'

type Props = {
  book: Book
}

export default function BookBannerContainer({ book }: Props) {
  const createdAtFormatted = formatDate(book.createdAt)
  const updatedAtFormatted = formatDate(book.updatedAt)

  const imgRef = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState<number | null>(null);
  const [coverImage, setCoverImage] = useState<string | null>(null)

  useEffect(() => {
    if (imgRef.current) {
      setWidth(imgRef.current.offsetWidth);
    }
  }, [coverImage]);

  useEffect(() => {
    setCoverImage(null)
    isValidImageUrl(book.coverImage).then((res) => {
      if (res) {
        setCoverImage(book.coverImage)
      }
    })
  }, [book.coverImage])


  return (
    <div className={styles.container}>
      {coverImage && <img ref={imgRef} src={coverImage} className={styles.coverImage} alt="" style={{ opacity: (width ? 1 : 0) }} />}

      <div className={styles.bannerBackground} style={{ backgroundColor: book.highlightColor }}>
        <Link href={`/${book.userId}/stats/session/add?bookId=${book.id}`}>
          <Button textColor={book.highlightColor} startDecorator={<Icon name='timer_play' />}>Nova Sessão</Button>
        </Link>
      </div>

      <div className={styles.bannerInfo} >
        <div className={styles.titleContainer} style={{ marginLeft: (width ? width + 15 : 0) }}>
          <h1>{book.title}</h1>
          <small className={styles.authorName}>
            {book.authors?.length && book.authors[0]?.author?.name ? `Por ${book.authors[0].author.name}` : ""}
            {book.authors?.length && book.publicationDate && " · "}
            {book.publicationDate ? convertStringDateToDate(book.publicationDate).getFullYear() : ""}
          </small>
        </div>
        <div className={styles.infoWrapper}>
          <BookStatusTag status={book.status} />
          <span>Criado em {createdAtFormatted}</span>
          <span>Última edição em {updatedAtFormatted}</span>
        </div>
      </div>
    </div>
  )
}
