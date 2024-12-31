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
  requiredFields: Array<keyof Type>
  blankFormObject: Type
  submitFunction?: ((arg: Type) => void) | undefined
}

export default function TabbedMenuLayout<Type>({ children, title, tabs, blankFormObject, requiredFields, submitFunction }: Props<Type>) {
  return (
    <MenuFormData.Provider initialState={blankFormObject}>
      <MenuDataForm submitFunction={submitFunction} requiredFields={requiredFields}>
        <div className={styles.container}>
          <TabMenuContainer tabs={tabs} title={title} haveSubmit={submitFunction ? true : false} />
          <div className={styles.contentContainer}>
            {children}
          </div>
        </div>
      </MenuDataForm>
    </MenuFormData.Provider>
  )
}