import styles from './index.module.scss'
import { Book } from '@/api/reboo-api/api.types'
import { convertAuthorsArrayToString, convertCategoriesArrayToString } from './index.utils'
import { formatDate } from '@/utils/library.utils'
import BookStatusTag from '@/components/book-status-tag'

type Props = {
  book: Book
}

export default function InfoContainer({ book }: Props) {
  const publicationDateFormatted = formatDate(book.publicationDate)

  return (
    <div className={styles.container}>
      <h5>Informações sobre o livro</h5>

      <div className={styles.wrapper}>
        <div className={styles.inlineWrapper}>
          {book.title && (
            <div className={styles.infoItem}>
              <span className={styles.itemTitle}>Nome Completo</span>
              <span className={styles.itemValue}>{book.title}</span>
            </div>
          )}

          {book.authors && book.authors.length !== 0 && (
            <div className={styles.infoItem}>
              <span className={styles.itemTitle}>Autor</span>
              <span className={styles.itemValue}>{convertAuthorsArrayToString(book.authors)}</span>
            </div>
          )}

          {book.publicationDate && (
            <div className={styles.infoItem}>
              <span className={styles.itemTitle}>Data de Publicação</span>
              <span className={styles.itemValue}>{publicationDateFormatted}</span>
            </div>
          )}

          {book.publisher?.name && (
            <div className={styles.infoItem}>
              <span className={styles.itemTitle}>Editora</span>
              <span className={styles.itemValue}>{book.publisher.name}</span>
            </div>
          )}

          {book.totalPages && (
            <div className={styles.infoItem}>
              <span className={styles.itemTitle}>Número de Páginas</span>
              <span className={styles.itemValue}>{book.totalPages}</span>
            </div>
          )}

          {(book.isbn_10 || book.isbn_13) && (
            <div className={styles.infoItem}>
              <span className={styles.itemTitle}>ISBN</span>
              <span className={styles.itemValue}>{`${book.isbn_10 || ''}${book.isbn_10 && book.isbn_13 ? ', ' : ''}${book.isbn_13 || ''}`}</span>
            </div>
          )}

          {book.language && (
            <div className={styles.infoItem}>
              <span className={styles.itemTitle}>Idioma</span>
              <span className={styles.itemValue}>{book.language}</span>
            </div>
          )}

          {book.status && (
            <div className={styles.infoItem}>
              <span className={styles.itemTitle}>Status do Livro</span>
              <span className={styles.itemValue}><BookStatusTag status={book.status} /></span>
            </div>
          )}
        </div>

        {book.categories && book.categories.length !== 0 && (
          <div className={styles.infoItem}>
            <span className={styles.itemTitle}>Categorias</span>
            <span className={styles.itemValue}>{convertCategoriesArrayToString(book.categories)}</span>
          </div>
        )}

        {book.description && (
          <div className={styles.infoItem}>
            <span className={styles.itemTitle}>Descrição</span>
            <span className={styles.itemValue}>{book.description}</span>
          </div>
        )}
      </div>
    </div>
  )
}