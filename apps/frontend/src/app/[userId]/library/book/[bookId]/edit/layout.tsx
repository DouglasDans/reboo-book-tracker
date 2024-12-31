import { createBook } from '@/actions/book.action'
import { bookApiService } from '@/api/reboo-api'
import Icon from '@/components/icon'
import TabbedMenuLayout from '@/layout/tabbed-menu-layout'
import { FormBook } from '@/types/forms.types'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  params: {
    bookId: number
    userId: number
  }
}

export default async function Layout({ children, params }: Props) {
  const book = await bookApiService.getBookById(params.bookId)

  const initialDataForm: FormBook = {
    id: book.id,
    title: book.title || "",
    authors: book.authors?.map(item => item.author.name).join(", ") || "",
    publicationDate: book.publicationDate && new Date(book.publicationDate).toISOString().split('T')[0],
    publisher: book.publisher?.name || "",
    totalPages: book.totalPages.toString() || "0",
    isbn: `${book.isbn_10 || ""}, ${book.isbn_13 || ""}`,
    categories: book.categories?.map(item => item.category.name).join(", ") || "",
    language: book.language || "",
    description: book.description || "",
    status: book.status || "NOT_STARTED",
    pagesRead: book.pagesRead.toString() || "0",

    coverImage: book.coverImage || "",
    highlightColor: book.highlightColor || "",
    userId: params.userId.toString()
  };

  console.log(book);


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
      title='Editar Livro'
      tabs={tabs}
      blankFormObject={initialDataForm}
      requiredFields={['title', 'authors', 'totalPages']}
      submitFunction={createBook}
    >
      {children}
    </TabbedMenuLayout>
  )
}