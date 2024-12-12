"use server"

import { bookApiService } from "@/api/reboo-api"

export default async function updateBookHighlightColor(
  bookId: number,
  hexColor: string,
) {
  await bookApiService.updateBookHighlightColor(bookId, hexColor)
}
