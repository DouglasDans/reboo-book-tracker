"use client"

import { Book } from "@/api/reboo-api/api.types"
import { createContext, ReactNode } from "react"

interface Props {
  value: Book
  children: ReactNode
}

export const BookDataContext = createContext({})

export function BookDataProvider({ value, children }: Props) {
  return (
    <BookDataContext.Provider value={value}>
      {children}
    </BookDataContext.Provider>
  )
}
