import { createCollection, updateCollection } from '@/actions/collection.action'
import Icon from '@/components/icon'
import TabbedMenuLayout from '@/layout/tabbed-menu-layout'
import { FormCollection } from '@/types/forms.types'
import React, { ReactNode } from 'react'
import { collectionApiService } from '@/api/reboo-api';
import { Collection } from '@/api/reboo-api/api.types'

type Props = {
  children: ReactNode,
  params: {
    collectionId: number
    userId: number
  }
}

export default async function Layout({ children, params }: Props) {
  const collection: Collection = await collectionApiService.getCollectionById(params.collectionId)

  const initialDataForm: FormCollection = {
    id: collection.id,
    name: collection.name,
    backgroundColors: collection.backgroundColors,
    userId: collection.userId,
    books: collection.books?.map(item => item.book) || []
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
      title='Editar Coleção'
      tabs={tabs}
      blankFormObject={initialDataForm}
      submitFunction={updateCollection}
    >
      {children}
    </TabbedMenuLayout>
  )
}