import { createBook } from '@/actions/book.action'
import Icon from '@/components/icon'
import TabbedMenuLayout from '@/layout/tabbed-menu-layout'
import { FormBook } from '@/types/forms.types'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode,
  params: {
    userId: number
  }
}

export default function Layout({ children, params }: Props) {

  const blankFormObject: FormBook = {
    title: "",
    authors: "",
    publicationDate: "",
    publisher: "",
    totalPages: "0",
    isbn: "",
    categories: "",
    language: "",
    description: "",
    status: "NOT_STARTED",
    pagesRead: "0",

    coverImage: "",
    highlightColor: "",
    userId: params.userId.toString()
  }

  const tabs = [
    {
      title: "Informações",
      icon: <Icon name='book' />,
      link: "?step=1"
    },
    {
      title: "Capa e Cores",
      icon: <Icon name='palette' />,
      link: "?step=2"
    },
    {
      title: "Situação",
      icon: <Icon name='play_lesson' />,
      link: "?step=3"
    },
    {
      title: "Pré-vizualizção",
      icon: <Icon name='preview' />,
      link: "?step=4"
    },
  ]

  return (
    <TabbedMenuLayout
      title='Adicionar Livro'
      tabs={tabs}
      blankFormObject={blankFormObject}
      submitFunction={createBook}
    >
      {children}
    </TabbedMenuLayout>
  )
}