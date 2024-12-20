import React from 'react'
import styles from './index.module.scss'

type Props = {
  title?: string
  placeholder?: string
  name: string
  id?: string
  type: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string | number
}

export default function Input({ title, placeholder, name, id, type, onChange, value }: Props) {
  return (
    <div className={styles.container}>
      <label>
        {title}
      </label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}