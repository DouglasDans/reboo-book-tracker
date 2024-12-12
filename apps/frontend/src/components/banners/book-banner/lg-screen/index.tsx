'use client'

import { Book } from '@/api/reboo-api/api.types'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import { useEffect, useRef, useState } from 'react'
import { convertStringDateToDate, isValidHex, isValidImageUrl } from '../index.utils'

import updateBookHighlightColor from '@/actions/book/updateBookHighlightColor'
import ToggleDropdownMenu from '@/components/toggle-dropdown-menu'
import ColorPickerMenu from '@/components/toggle-dropdown-menu/dropdown-menus/ColorPickerMenu'
import BookStatusTag from '@/components/book-status-tag'
import Link from 'next/link'

type Props = {
  book: Book
}

export default function LargeScreenBanner({ book }: Props) {

  const imgRef = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState<number | null>(null);
  const [highlightColor, setHighlightColor] = useState<string | null>(book.highlightColor)
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

  async function updateHighlightColor(color: string) {
    if (color) {
      if (color !== book.highlightColor && isValidHex(color)) {
        book.highlightColor = color
        await updateBookHighlightColor(book.id, color)
      }
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.backgroundBanner}
        style={(highlightColor ? { backgroundColor: highlightColor } : {})}
      >

        {coverImage && <img ref={imgRef} src={coverImage} className={styles.coverImage} alt="" style={{ opacity: (width ? 1 : 0) }} />}


        <div className={styles.bannerButtons}>
          <ToggleDropdownMenu
            content={<ColorPickerMenu highlightColorState={{ highlightColor, setHighlightColor }} handleSaveColor={updateHighlightColor} />}>
            <Button startDecorator={<Icon name='palette' />} textColor={highlightColor} />
          </ToggleDropdownMenu>

          <Link href={`/${book.userId}/stats/session/add?bookId=${book.id}`}>
            <Button textColor={highlightColor} startDecorator={<Icon name='timer_play' />}>Nova Sessão</Button>
          </Link>
        </div>
      </div>

      <div style={{ marginLeft: (width ? width + 25 : 0) }} className={styles.titleContainer}>
        <div className={styles.title}>
          <h1>{book.title}</h1>
          <span className={styles.authorName}>
            {book.authors?.length && book.authors[0]?.author?.name ? `Por ${book.authors[0].author.name}` : ""}
            {book.authors?.length && book.publicationDate && " · "}
            {book.publicationDate ? convertStringDateToDate(book.publicationDate).getFullYear() : ""}
          </span>
        </div>

        <div className={styles.BookStatus}>
          <BookStatusTag status={book.status} />
        </div>
      </div>
    </div>
  )
}