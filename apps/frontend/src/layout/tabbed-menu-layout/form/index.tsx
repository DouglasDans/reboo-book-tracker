import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import React, { ReactNode } from 'react'

type Props<Type> = {
  children: ReactNode
  submitFunction: ((arg: Type) => void) | undefined
}

export default function MenuDataForm<Type>({ children, submitFunction }: Props<Type>) {
  const state = MenuFormData.useMenuFormData()[0] as Type
  if (submitFunction) {
    return (
      <form action={() => { submitFunction(state) }}>
        {children}
      </form>
    )
  } else {
    return children
  }
}