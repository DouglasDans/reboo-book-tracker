'use client'

import InputColorSelector from '@/components/forms/input-color-selector'
import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import { FormBook } from '@/types/forms.types'
import BookCover from './book-cover'
import Input from '@/components/forms/input'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import { Fragment } from 'react'
import { createHandleChange } from '@/utils/form.utils'

export default function BookCoverColorForm() {
  const [bookData, setBookData] = MenuFormData.useMenuFormData<FormBook>()
  const handleChange = createHandleChange(setBookData)

  return (
    <Fragment>
      <div className={styles.container}>
        <BookCover imageUrl={bookData.coverImage} />
        <div className={styles.imageInputWrapper}>
          <Input
            title='Adicionar capa do livro'
            placeholder='URL da capa...'
            name='coverImage'
            value={bookData.coverImage}
            onChange={handleChange}
          />
          <span>Ou</span>
          <Button fullWidth notRounded variant='secondary'>Carregar Imagem</Button>
        </div>
      </div>
      <InputColorSelector value={bookData.highlightColor} setState={setBookData} name='highlightColor' />
    </Fragment>
  )
}