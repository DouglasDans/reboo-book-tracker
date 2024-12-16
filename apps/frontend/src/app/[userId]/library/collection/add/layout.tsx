import TabbedMenuLayout from '@/layout/tabbed-menu-layout'
import { FormCollection } from '@/types/forms.types'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
  params: {
    userId: number
  }
}

export default function Layout({ children, params }: Props) {
  const blankFormObject: FormCollection = {
    name: "",
    backgroundColors: "",
    userId: params.userId
  }

  const tabs = [
    {
      title: "Adicionar Coleção",
      icon: "add",
      link: "https://google.com"
    }
  ]


  return (
    <TabbedMenuLayout
      title='Adicionar Coleção'
      tabs={tabs}
      blankFormObject={blankFormObject}
    >
      {children}
    </TabbedMenuLayout>
  )
}