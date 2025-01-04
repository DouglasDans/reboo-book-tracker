'use client'

import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import React, { ReactNode } from 'react'

type Props<Type> = {
  children: ReactNode
  requiredFields: Array<keyof Type>
  submitFunction: ((arg: Type) => void) | undefined
}

export default function MenuDataForm<Type>({ children, submitFunction, requiredFields }: Props<Type>) {
  const state = MenuFormData.useMenuFormData()[0] as Type

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fildsArr: Array<string> = []

    requiredFields.forEach((item) => {
      if (state[item] === '' || state[item] === null || state[item] == 0) {
        fildsArr.push(item as string)
      }
    })

    if (fildsArr.length > 0) {
      alert(`Os campos "${fildsArr.join(', ')}" estão vazios e são obrigatórios`)
    } else {
      submitFunction && submitFunction(state)
    }

  }

  if (submitFunction) {
    return (
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    )
  } else {
    return <>{children}</>
  }
}