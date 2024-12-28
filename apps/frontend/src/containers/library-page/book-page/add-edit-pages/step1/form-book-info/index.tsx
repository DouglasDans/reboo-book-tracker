'use client'

import Input from '@/components/forms/input'
import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import { FormBook } from '@/types/forms.types'
import { createHandleChange } from '@/utils/form.utils'
import styles from './index.module.scss'

export default function FormBookInfo() {
  const [bookData, setBookData] = MenuFormData.useMenuFormData<FormBook>()
  const handleChange = createHandleChange(setBookData)

  return (
    <div className={styles.container}>
      <Input
        title='Título'
        placeholder='título do livro'
        name='title'
        value={bookData.title}
        onChange={handleChange}
      />

      <Input
        title='Autor'
        placeholder='título do livro'
        name='authors'
        value={bookData.authors}
        onChange={handleChange}
      />

      <div className={styles.inputWrapper}>
        <Input
          title='Data de Publicação'
          placeholder='título do livro'
          name='publicationDate'
          type='date'
          value={bookData.publicationDate}
          onChange={handleChange}
        />

        <Input
          title='Editora'
          placeholder='título do livro'
          name='publisher'
          value={bookData.publisher}
          onChange={handleChange}
        />

        <Input
          title='Total de Páginas'
          placeholder='0'
          name='totalPages'
          type='number'
          value={bookData.totalPages}
          onChange={handleChange}
        />

        <Input
          title='ISBN'
          placeholder='o'
          name='isbn'
          value={bookData.isbn}
          onChange={handleChange}
        />


      </div>

    </div>
  )
}