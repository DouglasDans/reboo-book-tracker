import BookCoverContainer from './book-cover-container'
import styles from './index.module.scss'
import SearchBookContainer from '../../add-edit-pages/step1/search-book-container'

export default function BookSearchAndCoverWrapper() {
  return (
    <section className={styles.wrapperContainer}>
      <SearchBookContainer />
      <BookCoverContainer />
    </ section>
  )
}