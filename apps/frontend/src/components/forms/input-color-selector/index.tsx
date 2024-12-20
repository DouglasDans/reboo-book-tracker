import React from 'react'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import ToggleDropdownMenu from '@/components/toggle-dropdown-menu'
import ColorPickerMenu from '@/components/toggle-dropdown-menu/dropdown-menus/ColorPickerMenu'

type Props<T> = {
  title?: string
  name: string
  setState: (data: Partial<T>) => void
  value: string
}

export default function InputColorSelector<T>({ title = "Cor de Destaque", name, setState, value }: Props<T>) {
  return (
    <div className={styles.container}>
      <label>
        {title}
      </label>
      <div className={styles.inputContainer}>
        <div className={styles.input} style={{ backgroundColor: value }}></div>
        <ToggleDropdownMenu content={<ColorPickerMenu name={name} setState={setState} value={value} />}>
          <Button notRounded variant='secondary' startDecorator={<Icon name='palette' />}>
            Selecionar
          </Button>
        </ToggleDropdownMenu>
      </div>

    </div>
  )
}