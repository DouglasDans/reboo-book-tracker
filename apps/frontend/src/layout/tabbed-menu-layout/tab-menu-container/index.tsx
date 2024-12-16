import React, { ReactNode } from 'react'
import style from './index.module.scss'

type Props = {
  title: string
  tabs: Array<{
    title: string
    icon: ReactNode
    link: string
  }>
}

export default function TabMenuContainer({ title, tabs }: Props) {
  return (
    <aside className={style.container}>
      <h6>{title}</h6>
      <div className={style.itemsWrapper}>
        {tabs.map(tab => {
          return (
            <div key={tab.link}>
              {tab.title}
            </div>
          )
        })}
      </div>
    </aside>
  )
}