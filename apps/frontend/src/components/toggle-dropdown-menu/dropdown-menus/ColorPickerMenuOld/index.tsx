'use client'

import { HexColorPicker } from "react-colorful";
import styles from './index.module.scss'
import Button from "@/components/buttons/button";
import { useEffect, useState } from "react";

type Props = {
  handleSaveColor?: (arg0: string) => void,
  highlightColorState: {
    highlightColor: string | null,
    setHighlightColor: React.Dispatch<React.SetStateAction<string | null>>;
  }
}

export default function ColorPickerMenu({ highlightColorState, handleSaveColor }: Props) {
  const [color, setColor] = useState(highlightColorState.highlightColor || "#000")

  useEffect(() => {
    highlightColorState.setHighlightColor(color)
  }, [color]);

  return (
    <div className={styles.container}>
      <h6>Cor do banner</h6>

      <HexColorPicker color={color} onChange={setColor} />

      <input
        className={styles.input}
        value={color}
        onChange={(e) => { setColor(e.target.value) }}
        type="text"
        placeholder="Digite a cor em Hex"
      />

      {handleSaveColor &&
        <Button
          fullWidth
          notRounded
          variant="secondary"
          onClick={() => { handleSaveColor(color) }}
        >Salvar</Button>
      }
    </div>
  )
}