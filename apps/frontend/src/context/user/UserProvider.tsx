"use client"

import { User } from "@/api/reboo-api/api.types"
import { createContext, ReactNode, useContext } from "react"

interface Props {
  value: User
  children: ReactNode
}

export const UserContext = createContext<User | undefined>(undefined)

export function UserProvider({ value, children }: Props) {
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext(): User {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useMenuTabs deve ser usado dentro de um UserProvider');
  }
  return context;
}