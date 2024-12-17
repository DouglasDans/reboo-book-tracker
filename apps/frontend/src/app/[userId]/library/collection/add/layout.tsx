import Icon from '@/components/icon'
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
      title: "Informações",
      icon: <Icon name='collections_bookmark' />,
      link: "?step=1"
    },
    {
      title: "Gerenciar Livros",
      icon: <Icon name='book' />,
      link: "?step=2"
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