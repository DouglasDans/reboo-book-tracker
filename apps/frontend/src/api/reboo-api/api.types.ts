export interface Book {
  id: number
  title: string
  isbn_10: string
  isbn_13: string
  totalPages: number
  pagesRead: number
  publicationDate: string
  description: string
  status: BookStatus
  coverImage: string
  highlightColor: string
  language: string
  createdAt: string
  updatedAt: string
  publisherId: number
  userId: number

  publisher?: Publisher
  user?: User
  authors?: Array<{ author: Author }>
  categories?: Array<{ category: Category }>
  collections?: Array<Collection>
  readingSessions?: Array<ReadingSession>
}

export interface BookDataRequest {
  id?: string
  userId: number
  title: string
  totalPages: number
  author: string[]
  pagesRead: number
  status: string
  publisher: string | null
  highlightColor: string | null
  coverImage: string | null
  language: string | null
  description: string | null
  publicationDate: string | null
  isbn_10: string | null
  isbn_13: string | null
  category: string[] | null
}

export interface Author {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date

  books?: Array<Book>
}

export interface Publisher {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date

  books?: Array<Book>
}

export interface CollectionRequest {
  id?: number
  name: string
  backgroundColors: string
  userId: number

  books?: number[]
}

export interface Collection {
  id: number
  name: string
  backgroundColors: string
  createdAt: string
  updatedAt: string
  userId: number

  books?: Array<{ book: Book }>
  user?: Array<User>
}

export interface ReadingSession {
  id: number
  startDate: Date
  endDate: Date
  pagesRead: number
  createdAt: Date
  updatedAt: Date
  bookId: number
  userId: number

  book?: Book
  user?: User
}

export interface User {
  id: number
  name: string
  email: string
  password?: string
  bio?: string
  profileImage?: string
  googleId?: string
  createdAt: Date
  updatedAt: Date

  readingSessions?: Array<ReadingSession>
  collections?: Array<Collection>
  books?: Array<Book>
}

export type BookStatus =
  | "BUY"
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "GIVEN_UP"
