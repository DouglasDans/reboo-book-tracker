import { MenuTabsProvider } from '@/context/tabbed-menu-layout/MenuTabsProvider'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  tabs: Array<{
    title: string
    icon: ReactNode
    link: string
  }>
}

export default function TabbedMenuLayout({ children, tabs }: Props) {
  return (
    <MenuTabsProvider value={tabs}>
      {children}
    </MenuTabsProvider>
  )
}