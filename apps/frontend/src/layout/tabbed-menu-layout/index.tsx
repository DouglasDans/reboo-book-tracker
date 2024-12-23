"use client"

import { MenuFormData } from '@/context/tabbed-menu-layout/MenuFormDataProvider'
import React, { ReactNode } from 'react'
import styles from './index.module.scss'
import TabMenuContainer from './tab-menu-container'
import MenuDataForm from './form'

type Props<Type> = {
  children: ReactNode
  title: string
  tabs: Array<{
    title: string
    icon: ReactNode
    link: string
  }>
  blankFormObject: Type
  submitFunction?: ((arg: Type) => void) | undefined
}

export default function TabbedMenuLayout<Type>({ children, title, tabs, blankFormObject, submitFunction }: Props<Type>) {
  return (
    <MenuFormData.Provider initialState={blankFormObject}>
      <div className={styles.container}>
        <TabMenuContainer tabs={tabs} title={title} haveSubmit={submitFunction ? true : false} />
        <div className={styles.contentContainer}>
          <MenuDataForm submitFunction={submitFunction}>
            {children}
          </MenuDataForm>
        </div>
      </div>
    </MenuFormData.Provider>
  )
}