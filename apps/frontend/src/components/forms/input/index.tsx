import React from 'react'
import styles from './index.module.scss'

type Props = {
  title?: string
  subtitle?: string
  placeholder?: string
  name: string
  id?: string
  type?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string | number
  className?: string
  required?: boolean

}

export default function Input({ title, subtitle, placeholder, name, id, type = 'text', onChange, value, className, required }: Props) {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.titleWrapper}>
        <label>{title}{required && "*"}</label>
        <small>{subtitle}</small>
      </div>
      <input
        className={styles.input}
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
