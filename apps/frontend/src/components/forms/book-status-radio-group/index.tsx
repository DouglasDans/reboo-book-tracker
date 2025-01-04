import React from 'react'
import styles from './index.module.scss'
import BookStatusTag from '@/components/book-status-tag'
import { BookStatus } from '@/api/reboo-api/api.types'
import { FormBook } from '@/types/forms.types'

type Props = {
  title?: string
  subtitle?: string
  value: BookStatus
  setState: (data: Partial<FormBook>) => void
}

const arrBookStatus: Array<BookStatus> = ['BUY', 'NOT_STARTED', 'IN_PROGRESS', 'GIVEN_UP', 'COMPLETED']

export default function BookStatusRadioGroup({ title = "Status do Livro", subtitle, value, setState }: Props) {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.titleWrapper}>
        <label>{title}</label>
        <small>{subtitle}</small>
      </div>
      <div className={styles.bookStatusContainer}>
        {arrBookStatus.map((item, index) => {
          return (
            <div onClick={() => { setState({ status: item }) }} key={index} className={styles.bookStatusItem}>
              <BookStatusTag status={item} canSelect active={value === item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
