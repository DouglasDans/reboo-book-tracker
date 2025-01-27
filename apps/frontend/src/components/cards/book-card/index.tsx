import styles from './index.module.scss'
import { Book } from '@/api/reboo-api/api.types'
import Link from 'next/link'
import BookCardPlaceholder from './placeholder'

type Props = {
  book: Book
}

export default function BookCard({ book }: Props) {
  const percentPages: number = (book.pagesRead / book.totalPages) * 100

  if (!book) {
    return (
      <div className={styles.cardContainer}>
        <BookCardPlaceholder />
      </div>
    )
  }

  return (
    <div className={styles.cardContainer} style={{ backgroundColor: book.highlightColor }}>
      <div className={styles.cardContent} >
        <div>
          <span>Leitura mais recente</span>
          <h4>{book.title}</h4>
        </div>
        <div>
          <span>{percentPages.toFixed(0)}% Concluído</span>
          <span>{book.pagesRead} / {book.totalPages} Páginas Lidas</span>
        </div>
        {/* <Link href={`/${book.userId}/stats/session/add?bookId=${book.id}`}>
          <Button textColor={book.highlightColor} startDecorator={<Icon name='timer_play' />}>Nova Sessão</Button>
        </Link> */}
      </div>
      <Link href={`/${book.userId}/library/book/${book.id}`}>
        <img className={styles.imageElement} src={book.coverImage ? book.coverImage : "/book-image-placeholder.png"} alt="" />
      </Link>
    </div >
  )
}