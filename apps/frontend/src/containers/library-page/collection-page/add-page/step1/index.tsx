'use client'

import React, { Fragment } from 'react'
import styles from './index.module.scss'
import Input from '@/components/forms/input'
import InputColorSelector from '@/components/forms/input-color-selector'
import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import { FormCollection } from '@/types/forms.types'
import { createHandleChange } from '@/utils/form.utils'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import { deleteCollection } from '@/actions/collection.action'

type Props = {
  deleteButton?: boolean
}

export default function Step1CollectionData({ deleteButton = false }: Props) {
  const [collectionState, setCollectionState] = MenuFormData.useMenuFormData<FormCollection>()
  const handleChange = createHandleChange(setCollectionState)

  function handleDelete() {
    if (confirm(`Você tem certeza que deseja deletar a coleção ${collectionState.name}? Isso é uma ação irreversível. Seus livros serão mantidos.`)) {
      collectionState.id && deleteCollection(collectionState.id)
    }
  }

  return (
    <Fragment>
      <h6>Informações da Coleção</h6>
      <div className={styles.formContainer}>
        <Input
          type='text'
          title='Nome da Coleção'
          placeholder='Digite o nome da coleção'
          name='name'
          value={collectionState.name}
          onChange={handleChange}
        />
        <InputColorSelector
          value={collectionState.backgroundColors}
          name='backgroundColors'
          setState={setCollectionState}
        />

        {deleteButton &&
          <div className={styles.deleteContainer}>
            <div>
              <label>Deletar Coleção</label><br />
              <small>Delete esta coleção da sua conta, os livros serão mantidos.</small>
            </div>
            <Button onClick={handleDelete} startDecorator={<Icon name='delete' />} notRounded variant='secondary' textColor={'#FF4949'}>
              Deletar Coleção
            </Button>
          </div>
        }
      </div>
    </Fragment>
  )
}