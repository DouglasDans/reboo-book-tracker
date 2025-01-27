'use client'

import Link from "next/link"
import styles from "./index.module.scss"
import Icon from "@/components/icon"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { UserContext } from "@/context/user/UserProvider"
import { User } from "@/api/reboo-api/api.types"
import ToggleDropdownMenu from "@/components/toggle-dropdown-menu"
import UserOptionsMenu from "@/components/toggle-dropdown-menu/dropdown-menus/UserOptionsMenu"


export default function Header() {
  const user = useContext(UserContext) as User
  const pathname = usePathname()

  function getPageTitle(pathname: string) {
    if (pathname.includes(`/${user.id}/dashboard`)) {
      return "Dashboard"
    } else {
      if (pathname.includes(`/${user.id}/library`)) {
        return "Minha Estante"
      }
      if (pathname.includes(`/${user.id}/stats`)) {
        return "Estatísticas"
      }
    }
  }

  return (
    <div className={styles.container}>
      <h5>{getPageTitle(pathname)}</h5>

      <div className={styles.shortcutsWrapper}>
        <Link href={`/${user.id}/library/collection/add`}>
          <Icon name="library_add" />
        </Link>
        <Link href={`/${user.id}/library/book/add`}>
          <Icon name="bookmark_add" />
        </Link>
        {/* <Link href={"#"}>
          <Icon name="notifications" />
        </Link> */}
        <ToggleDropdownMenu content={<UserOptionsMenu user={user} />}>
          <Link href={"#"}>
            <Icon name="person" />
          </Link>
        </ToggleDropdownMenu>
      </div>
    </div>
  )
}
