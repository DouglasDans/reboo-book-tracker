"use server"

import api from "../api.config"
import { Book, BookDataRequest, BookStatus } from "../api.types"

export async function getBookById(id: number): Promise<Book> {
  return await api.get(`/book/${id}`)
}

export async function getAllBooksByBookStatus(
  userId: number,
  status: string,
): Promise<Book[]> {
  return await api.get(`book?userId=${userId}&status=${status}`)
}

export async function getAllBooksAndAuthors(userId: number): Promise<Book[]> {
  return await api.get(`book?userId=${userId}&select=authors`)
}

export async function getFirstBookByBookStatus(
  userId: number,
  status: string,
): Promise<Book> {
  return await api.get(`book?userId=${userId}&status=${status}&onlyFirst=true`)
}

export async function createBook(bookData: BookDataRequest): Promise<Book> {
  return await api.post("/book", bookData)
}

export async function updateBook(
  bookId: number,
  bookData: BookDataRequest,
): Promise<Book> {
  return await api.patch(`/book/${bookId}`, bookData)
}

export async function updateBookHighlightColor(
  bookId: number,
  hexColor: string,
): Promise<Book> {
  return await api.patch(
    `/book/${bookId}?highlightColor=${hexColor.replace("#", "%23")}`,
  )
}

export async function updateBookStatus(
  bookId: number,
  bookStatus: BookStatus,
): Promise<Book> {
  return await api.patch(`/book/${bookId}?bookStatus=${bookStatus}`)
}

export async function deleteBook(bookId: number): Promise<Book> {
  return await api.delete(`/book/${bookId}`)
}
