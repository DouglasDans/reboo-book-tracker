import { Book } from "@/api/reboo-api/api.types"

export interface FormBook {
  id?: number
  title: string
  authors: string
  publicationDate?: string
  publisher?: string
  totalPages: number
  isbn?: string
  categories?: string
  language: string
  description: string

  status: "BUY" | "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "GIVEN_UP"
  pagesRead: number

  coverImage: string
  highlightColor: string
  userId: number
}

export interface FormCollection {
  id?: number
  name: string
  backgroundColors: string
  userId: number

  books?: Array<Book>
}
