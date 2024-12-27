import styles from './index.module.scss'
import Input from '@/components/forms/input'
import Button from '@/components/buttons/button'

export default function SearchBookContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.titleSearchISBN}>
        <h5>Buscar informações do livro</h5>
        <small>
          Busque informações do livro automaticamente informando seu ISBN
        </small>
      </div>
      <form>
        <label>ISBN</label>
        <div className={styles.formInput}>
          <Input
            subtitle='O ISBN geralmente está localizado no código de barras na parte de trás do livro ou em suas primeiras páginas'
            placeholder="978-90-274-3964-2"
            id="searchISBN"
            name="searchISBN"
          />
          <Button>Pesquisar por informações</Button>
        </div>
      </form>
    </div>
  )
}