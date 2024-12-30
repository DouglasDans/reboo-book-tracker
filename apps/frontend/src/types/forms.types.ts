import { Book } from "@/api/reboo-api/api.types"

export interface FormBook {
  id?: string
  title: string
  authors: string
  publicationDate?: string
  publisher?: string
  totalPages: string
  isbn?: string
  categories?: string
  language: string
  description: string

  status: "BUY" | "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "GIVEN_UP"
  pagesRead: string

  coverImage: string
  highlightColor: string
  userId: string
}

export interface FormCollection {
  id?: number
  name: string
  backgroundColors: string
  userId: number
  books: Array<Book>
}
