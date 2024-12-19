import React, { Fragment } from 'react'
import styles from './index.module.scss'
import Input from '@/components/forms/input'
import InputColorSelector from '@/components/forms/input-color-selector'

export default function Step1CollectionData() {
  return (
    <Fragment>
      <h6>Informações da Coleção</h6>
      <div className={styles.formContainer}>
        <Input type='text' title='Nome da Coleção' placeholder='Digite o nome da coleção' />
        <InputColorSelector color="#fff" />
      </div>
    </Fragment>
  )
}