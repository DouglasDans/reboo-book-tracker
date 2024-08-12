import { Book, User } from '.'

export class readingSession {
  id: number
  startDate: Date
  endDate: Date
  PagesRead: number
  createdAt: Date
  updatedAt: Date
  bookId: number
  userId: number

  book?: Book
  user?: User
}
