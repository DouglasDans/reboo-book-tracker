'use client'

import styles from './index.module.scss'
import Input from '@/components/forms/input'
import Button from '@/components/buttons/button'
import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import { FormBook } from '@/types/forms.types'
import { useEffect, useState } from 'react'
import { getBookByISBN } from '@/api/GoogleBooksAPI/api.services'

export default function SearchBookContainer() {
  const bookData = MenuFormData.useMenuFormData<FormBook>()[0]
  const [isbnState, setIsbnState] = useState('')

  async function getApiData() {
    const bookByISBN = await getBookByISBN(isbnState)
    console.log(bookByISBN);
  }

  useEffect(() => {
    console.log(bookData);
  }, [bookData]);

  return (
    <div className={styles.container}>
      <div className={styles.titleSearchISBN}>
        <h5>Buscar informações do livro</h5>
        <small>
          Busque informações do livro automaticamente informando seu ISBN
        </small>
      </div>

      <div className={styles.formInput}>
        <Input
          title='ISBN'
          subtitle='O ISBN geralmente está localizado no código de barras na parte de trás do livro ou em suas primeiras páginas'
          placeholder="978-90-274-3964-2"
          name='ISBNSearch'
          value={isbnState}
          onChange={(e) => { setIsbnState(e.target.value) }}
        />
        <Button onClick={getApiData}>Pesquisar por informações</Button>
      </div>
    </div>
  )
}