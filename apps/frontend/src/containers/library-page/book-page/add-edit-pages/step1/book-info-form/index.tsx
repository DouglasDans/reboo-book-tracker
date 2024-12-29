'use client'

import Input from '@/components/forms/input'
import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import { FormBook } from '@/types/forms.types'
import { createHandleChange } from '@/utils/form.utils'
import styles from './index.module.scss'
import TextArea from '@/components/forms/textarea'

export default function FormBookInfo() {
  const [bookData, setBookData] = MenuFormData.useMenuFormData<FormBook>()
  const handleChange = createHandleChange(setBookData)

  return (
    <div className={styles.container}>
      <Input
        title='Título'
        placeholder='Ex: O Senhor dos Anéis'
        name='title'
        value={bookData.title}
        onChange={handleChange}
        required
      />

      <Input
        title='Autor'
        subtitle='Insira uma vírgula depois de cada autor'
        placeholder='Ex.: J.R.R. Tolkien'
        name='authors'
        value={bookData.authors}
        onChange={handleChange}
        required
      />

      <div className={styles.inputWrapper}>
        <Input
          title='Data de Publicação'
          name='publicationDate'
          type='date'
          value={bookData.publicationDate}
          onChange={handleChange}
        />

        <Input
          title='Editora'
          placeholder='Ex.: HarperCollins'
          name='publisher'
          value={bookData.publisher}
          onChange={handleChange}
        />

        <Input
          title='Total de Páginas'
          placeholder='Ex.: 123'
          name='totalPages'
          type='number'
          value={bookData.totalPages}
          onChange={handleChange}
          required
        />

        <Input
          title='ISBN'
          placeholder='Ex.: 978-3-16-148410-0'
          name='isbn'
          value={bookData.isbn}
          onChange={handleChange}
        />

        <Input
          title='Categoria'
          subtitle='Insira uma vírgula depois de cada categoria'
          placeholder='Ex.: Fantasia'
          name='categories'
          value={bookData.categories}
          onChange={handleChange}
        />

        <Input
          title='Idioma'
          placeholder='Ex.: pt-BR'
          name='language'
          value={bookData.language}
          onChange={handleChange}
        />
      </div>

      <TextArea
        title='Descrição'
        placeholder='Uma breve descrição do livro...'
        name='description'
        value={bookData.description}
        onChange={handleChange}
      />

    </div>
  )
}