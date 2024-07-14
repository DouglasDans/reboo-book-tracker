import InputWrapper from '@/components/ui/forms/InputWrapper'
import styles from '@/styles/pages/book/add/form-book.module.scss'
import { GoogleAPIResponseBook } from '@/types/googleBooksApi'

export default function FormBookSection() {
  return (
    <section className={styles.container}>

      <div className={styles.titleGrid}>
        <h5>Informações do livro</h5>
        <h5>Situação do livro</h5>
      </div>

      <form className={styles.formGrid}>
        <div className={styles.rightForm}>
          <InputWrapper />
        </div>
        <div className={styles.leftForm}>
          b
        </div>
      </form>
    </section>
  )
}