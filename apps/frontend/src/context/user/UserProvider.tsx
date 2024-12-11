"use client"

import { User } from "@/services/rebooAPI/api.types"
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
