import { Book } from '@/api/reboo-api/api.types'
import styles from './index.module.scss'
import ListItemButton from '@/components/buttons/list-item-button'
import Icon from '@/components/icon'
import Link from 'next/link'

type Props = {
  books: Book[]
}

export default function BookListView({ books }: Props) {
  return (
    <div className={styles.content}>
      {books.map(book => (
        <Link
          href={`/${book.userId}/library/book/${book.id}`}
          key={book.id}
        >
          <ListItemButton
            startDecorator={<Icon name="book" color={book.highlightColor} />}
            endDecorator={
              <span className={styles.authorSpan}>
                {book.authors?.length && book.authors[0].author.name}
              </span>
            }
          >
            {book.title}
          </ListItemButton>
        </Link>
      ))}
    </div>
  )
}
