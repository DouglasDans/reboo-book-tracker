import React from 'react'
import styles from './index.module.scss'

type Props = {
  title?: string
  subtitle?: string
  placeholder?: string
  name: string
  id?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  value?: string | number
  className?: string
  required?: boolean
}

export default function TextArea({ title, subtitle, placeholder, name, id, onChange, value, className, required }: Props) {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.titleWrapper}>
        <label>{title}</label>
        <small>{subtitle}</small>
      </div>
      <textarea
        className={styles.input}
        placeholder={placeholder}
        required={required}
        name={name}
        id={id}
        rows={4}
        onChange={onChange}
      >
        {value}
      </textarea>
    </div>
  )
}
