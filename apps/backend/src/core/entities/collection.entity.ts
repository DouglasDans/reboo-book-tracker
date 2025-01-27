import { Book, User } from '.'

export class Collection {
  id: number
  name: string
  backgroundColors: string
  createdAt: Date
  updatedAt: Date
  userId: number

  books?: Array<{ book: Book }>
  user?: Array<User>
}
