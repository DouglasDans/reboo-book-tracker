import React, { Fragment } from 'react'
import styles from './index.module.scss'
import Input from '@/components/forms/input'
import InputColorSelector from '@/components/forms/input-color-selector'
import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import { FormCollection } from '@/types/forms.types'
import { createHandleChange } from '@/utils/form.utils'
import Button from '@/components/buttons/button'

type Props = {
  deleteButton?: boolean
}

export default function Step1CollectionData({ deleteButton = false }: Props) {
  const [collectionState, setCollectionState] = MenuFormData.useMenuFormData<FormCollection>()
  const handleChange = createHandleChange(setCollectionState)

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
          <div>
            <label>Deletar Coleção</label>
            <Button notRounded variant='secondary' textColor={'red'}>
              Deletar Coleção
            </Button>
          </div>
        }
      </div>
    </Fragment>
  )
}