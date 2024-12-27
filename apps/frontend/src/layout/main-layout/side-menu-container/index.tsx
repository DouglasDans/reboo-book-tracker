'use client'

import React, { useContext } from "react"
import styles from "./index.module.scss"
import Image from "next/image"
import Icon from "@/components/icon"
import NavLink from "../../../components/buttons/navlink-button"
import { UserContext } from "@/context/user/UserProvider"
import { User } from "@/api/reboo-api/api.types"
import { usePathname } from "next/navigation"

export default function SideMenu() {
  const user = useContext(UserContext) as User
  const pathname = usePathname()

  function isActiveUrl(href: string): boolean {
    return pathname.includes(href) ? true : false
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageLogo}>
        <Image
          src={"/reboo-logo-text.svg"}
          alt="Logo do Reboo"
          width={"117"}
          height={"40"}
        />
      </div>

      <div className={styles.navLinkWrapper}>
        <NavLink
          isActive={isActiveUrl(`/${user.id}/dashboard`)}
          href={`/${user.id}/dashboard`}
          icon={<Icon name="home" />}
          title={"Dashboard"}
        />
        <NavLink
          isActive={isActiveUrl(`/${user.id}/library`)}
          href={`/${user.id}/library`}
          icon={<Icon name="book" />}
          title={"Minha Estante"}
        />
        <NavLink
          isActive={isActiveUrl(`/${user.id}/stats`)}
          href={`/${user.id}/stats`}
          icon={<Icon name="bar_chart" />}
          title={"Estatísticas"}
        />
      </div>
    </div>
  )
}
