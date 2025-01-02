import { Book } from '@/api/reboo-api/api.types'
import styles from './index.module.scss'
import InfoContainer from './InfoContainer'
import ActionButtonsWrapper from './ActionButtonsWrapper'
import StatsWrapper from './StatsWrapper'
import { BookDataProvider } from '@/context/book/BookDataProvider'

type Props = {
  book: Book
}

export default function BookContentWrapper({ book }: Props) {
  return (
    <BookDataProvider value={book}>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <ActionButtonsWrapper book={book} />
        </div>
        <div className={styles.rightWrapper}>
          <InfoContainer book={book} />
          {/* <StatsWrapper /> */}
        </div>
      </div>
    </BookDataProvider>
  )
}