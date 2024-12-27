import Link from "next/link"
import styles from "./index.module.scss"
import { ReactNode } from "react"

type Props = {
  title: string
  icon: ReactNode
  isActive: boolean
  href: string
}

export default function NavLinkButton({ title, icon, isActive, href }: Props) {
  return (
    <Link href={href} className={`${styles.container} ${isActive ? styles.active : ""}`}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.span}>{title}</span>
    </Link>
  )
}
