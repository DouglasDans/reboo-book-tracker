'use client'

import styles from './index.module.scss'
import { useContext } from 'react'
import { BookURLParamsContext } from '@/context/book/BookURLParamsProvider'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import ToggleDropdownMenu from '@/components/toggle-dropdown-menu'
import BookColorPickerMenu from '@/components/toggle-dropdown-menu/dropdown-menus/BookColorPickerMenu'
import BookUploadMenu from '@/components/toggle-dropdown-menu/dropdown-menus/BookUploadMenu'
import BookCover from '../../../add-edit-pages/step2/cover-color-form/book-cover'
import { URLBookData } from '../../../index.types'

export default function BookCoverContainer() {
  const urlParams = useContext(BookURLParamsContext) as URLBookData
  return (
    <div className={styles.editImgContainer}>
      <div className={styles.dropdownButtonsContainer}>
        <ToggleDropdownMenu content={<BookColorPickerMenu />}>
          <Button variant='secondary' startDecorator={<Icon name='palette' />} />
        </ToggleDropdownMenu>

        <ToggleDropdownMenu content={<BookUploadMenu />}>
          <Button variant='secondary' startDecorator={<Icon name='add_photo_alternate' />} />
        </ToggleDropdownMenu>
      </div>

      <BookCover imageUrl={urlParams.imageLinks} />
    </div>
  )
}