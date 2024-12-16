"use client"

import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import { MenuTabsProvider } from '@/context/tabbed-menu-layout/MenuTabsProvider'
import React, { ReactNode } from 'react'
import styles from './index.module.scss'
import TabMenuContainer from './tab-menu-container'

type Props<Type> = {
  children: ReactNode
  title: string
  tabs: Array<{
    title: string
    icon: ReactNode
    link: string
  }>
  blankFormObject: Type
}

export default function TabbedMenuLayout<Type>({ children, title, tabs, blankFormObject }: Props<Type>) {
  return (
    <MenuTabsProvider value={tabs}>
      <MenuFormData.Provider initialState={blankFormObject}>
        <div className={styles.container}>
          <TabMenuContainer tabs={tabs} title={title} />
          <div className={styles.contentContainer}>
            {children}
          </div>
        </div>
      </MenuFormData.Provider>
    </MenuTabsProvider>
  )
}