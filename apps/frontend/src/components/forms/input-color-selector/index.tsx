import React from 'react'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import ToggleDropdownMenu from '@/components/toggle-dropdown-menu'
import ColorPickerMenu from '@/components/toggle-dropdown-menu/dropdown-menus/ColorPickerMenu'

type Props = {
  title?: string
  color: string
  setState?: () => void
  value?: string | number
}

export default function InputColorSelector({ title = "Cor de Destaque" }: Props) {
  return (
    <div className={styles.container}>
      <label>
        {title}
      </label>
      <div className={styles.inputContainer}>
        <div className={styles.input} style={{ backgroundColor: "fff" }}></div>
        <ToggleDropdownMenu content={"yet"}>
          <Button notRounded variant='secondary' startDecorator={<Icon name='palette' />}>
            Selecionar
          </Button>
        </ToggleDropdownMenu>
      </div>

    </div>
  )
}