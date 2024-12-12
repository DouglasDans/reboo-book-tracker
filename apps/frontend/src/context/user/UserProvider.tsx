"use client"

import { User } from "@/api/reboo-api/api.types"
import { createContext, ReactNode } from "react"

interface Props {
  value: User | number
  children: ReactNode
}

export const UserContext = createContext({})

export function UserProvider({ value, children }: Props) {
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
