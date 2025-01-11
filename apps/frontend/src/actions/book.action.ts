"use server"

import { bookApiService } from "@/api/reboo-api"
import { BookDataRequest, BookStatus } from "@/api/reboo-api/api.types"
import { FormBook } from "@/types/forms.types"
import { redirect } from "next/navigation"

export async function createBook(bookData: FormBook) {
  "use server"

  const cleanAndSplit = (input: string, delimiter = ",") => {
    return input.replaceAll(/\s*,\s*/g, delimiter).split(delimiter)
  }

  const extractIsbn = (isbn: string, index: number) => {
    return isbn.replace(/\s+/g, "").split(",")[index] || null
  }

  const bookRequest: BookDataRequest = {
    title: bookData.title,
    author: cleanAndSplit(bookData.authors),
    publicationDate: bookData.publicationDate
      ? new Date(bookData.publicationDate).toISOString()
      : null,
    publisher: bookData.publisher || null,
    totalPages: parseInt(bookData.totalPages),
    isbn_10: (bookData.isbn && extractIsbn(bookData.isbn, 0)) || null,
    isbn_13: (bookData.isbn && extractIsbn(bookData.isbn, 1)) || null,
    category: (bookData.categories && cleanAndSplit(bookData.categories)) || null,
    language: bookData.language,
    description: bookData.description,
    status: bookData.status,
    pagesRead: parseInt(bookData.pagesRead),
    coverImage: bookData.coverImage,
    highlightColor: bookData.highlightColor,
    userId: parseInt(bookData.userId),
  }

  let bookId: number | null = null

  try {
    const book = await bookApiService.createBook(bookRequest)
    bookId = book.id
  } catch (error) {
    console.error("Error creating book:", error)
    throw new Error(
      "Ocorreu um erro para criar o livro, tente novamente mais tarde!",
    )
  }

  if (bookId) {
    redirect(`../../library/book/${bookId}`)
  }
}

export default async function updateBook(bookData: FormBook) {
  "use server"

  const cleanAndSplit = (input: string, delimiter = ",") => {
    return input.replaceAll(/\s*,\s*/g, delimiter).split(delimiter)
  }

  const extractIsbn = (isbn: string, index: number) => {
    return isbn.replace(/\s+/g, "").split(",")[index] || null
  }

  const bookRequest: BookDataRequest = {
    title: bookData.title,
    author: cleanAndSplit(bookData.authors),
    publicationDate: bookData.publicationDate
      ? new Date(bookData.publicationDate).toISOString()
      : null,
    publisher: bookData.publisher || null,
    totalPages: parseInt(bookData.totalPages),
    isbn_10: (bookData.isbn && extractIsbn(bookData.isbn, 0)) || null,
    isbn_13: (bookData.isbn && extractIsbn(bookData.isbn, 1)) || null,
    category: (bookData.categories && cleanAndSplit(bookData.categories)) || null,
    language: bookData.language,
    description: bookData.description,
    status: bookData.status,
    pagesRead: parseInt(bookData.pagesRead),
    coverImage: bookData.coverImage,
    highlightColor: bookData.highlightColor,
    userId: parseInt(bookData.userId),
  }

  let bookId: number | null = null

  try {
    const book = await bookApiService.updateBook(
      parseInt(bookData.id?.toString() as string),
      bookRequest,
    )
    bookId = book.id
  } catch (error) {
    console.error("Error creating book:", error)
    throw new Error(
      "Ocorreu um erro para criar o livro, tente novamente mais tarde!",
    )
  }

  if (bookId) {
    redirect(`../../../library/book/${bookId}`)
  }
}

export async function deleteBook(bookId: number) {
  const book = await bookApiService.deleteBook(bookId)
  return book
}

export async function updateBookHighlightColor(bookId: number, hexColor: string) {
  await bookApiService.updateBookHighlightColor(bookId, hexColor)
}

export async function updateBookStatus(bookId: number, data: FormData) {
  await bookApiService.updateBookStatus(bookId, data.get("bookStatus") as BookStatus)

  redirect("./" + bookId)
}
