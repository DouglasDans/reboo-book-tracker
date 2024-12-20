'use client'

import { HexColorPicker } from "react-colorful";
import styles from './index.module.scss'
import Button from "@/components/buttons/button";
import { useState } from "react";
import Input from "@/components/forms/input";

type Props<T> = {
  value: string
  setState: (data: Partial<T>) => void
  name: string
}

export default function ColorPickerMenu<T>({ value, setState, name }: Props<T>) {
  const [color, setColor] = useState(value || "#000")

  function handleSaveColor() {
    setState({ [name]: color } as Partial<T>)
  }

  return (
    <div className={styles.container}>
      <HexColorPicker color={color} onChange={setColor} />

      <Input
        className={styles.input}
        value={color}
        onChange={(e) => { setColor(e.target.value) }}
        name={name}
        type="text"
        placeholder="Digite a cor em Hex"
      />

      <Button
        fullWidth
        notRounded
        variant="secondary"
        onClick={() => { handleSaveColor() }}
      >Salvar</Button>
    </div>
  )
}