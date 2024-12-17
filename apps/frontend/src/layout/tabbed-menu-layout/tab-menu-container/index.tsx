import React, { ReactNode } from 'react'
import style from './index.module.scss'
import NavLinkButton from '@/components/buttons/navlink-button'
import { useSearchParams } from 'next/navigation'

type Props = {
  title: string
  tabs: Array<{
    title: string
    icon: ReactNode
    link: string
  }>
}

export default function TabMenuContainer({ title, tabs }: Props) {

  const searchParams = useSearchParams()
  const step = parseInt(searchParams.get("step") || '0')

  return (
    <aside className={style.container}>
      <h6>{title}</h6>
      <div className={style.itemsWrapper}>
        {tabs.map((tab, index) => {
          return (
            <NavLinkButton
              href={tab.link}
              icon={tab.icon}
              title={tab.title}
              key={index}
              isActive={step === index + 1 || (step === 0 && index === 0)}
            />
          )
        })}
      </div>
    </aside>
  )
}