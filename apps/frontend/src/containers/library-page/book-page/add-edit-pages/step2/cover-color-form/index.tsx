'use client'

import InputColorSelector from '@/components/forms/input-color-selector'
import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import { FormBook } from '@/types/forms.types'
import BookCover from './book-cover'
import Input from '@/components/forms/input'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import { Fragment, useEffect } from 'react'
import { createHandleChange, getHighlightColorFromCoverImage, isValidImageUrl } from '@/utils/form.utils'
import Icon from '@/components/icon'

export default function BookCoverColorForm() {
  const [bookData, setBookData] = MenuFormData.useMenuFormData<FormBook>()
  const handleChange = createHandleChange(setBookData)

  async function updateHighlightColor() {
    if (await isValidImageUrl(bookData.coverImage)) {
      setBookData({ highlightColor: await getHighlightColorFromCoverImage(bookData.coverImage) })
    }
  }

  useEffect(() => {
    if (bookData.highlightColor === '') {
      updateHighlightColor()
    }
  }, [bookData.coverImage]);

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
      <div className={styles.imageInputWrapper}>
        <InputColorSelector value={bookData.highlightColor} setState={setBookData} name='highlightColor' />
        <span>Ou</span>
        <Button
          fullWidth
          notRounded
          variant='secondary'
          onClick={() => updateHighlightColor()}
          startDecorator={<Icon name='colorize' />}
        >
          Extrair cor da capa
        </Button>
      </div>
    </Fragment>
  )
}