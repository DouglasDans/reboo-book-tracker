import React from 'react'
import styles from './index.module.scss'

type Props = {
  title: string
  subtitle?: string
  placeholder?: string
  name: string
  id?: string
  type?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string | number
  className?: string
  required?: boolean
  error?: boolean
  errorSubtitle?: string
}

export default function Input({ title, subtitle, placeholder, name, id, type = 'text', onChange, value, className, required, error, errorSubtitle }: Props) {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.titleWrapper}>
        <label>{title}{required && "*"}</label>
        <small>{subtitle}</small>
        <small style={{ color: 'red' }}>{errorSubtitle}</small>
      </div>
      <input
        className={`${styles.input} ${error && styles.error}`}
        type={type}
        placeholder={placeholder}
        required={required}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
