import React from 'react'
import styles from './index.module.scss'

type Props = {
  title?: string
  placeholder?: string
  name?: string
  id?: string
  type: string
  setState?: () => void
  value?: string | number
}

export default function Input({ title, placeholder, name, id, type, setState, value }: Props) {
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
        onClick={setState}
      />
    </div>
  )
}