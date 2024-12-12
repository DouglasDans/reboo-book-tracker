"use server"

import { bookApiService } from "@/api/reboo-api"
import { BookStatus } from "@/api/reboo-api/api.types"
import { redirect } from "next/navigation"

export default async function updateBookStatus(bookId: number, data: FormData) {
  await bookApiService.updateBookStatus(bookId, data.get("bookStatus") as BookStatus)

  redirect("./" + bookId)
}
