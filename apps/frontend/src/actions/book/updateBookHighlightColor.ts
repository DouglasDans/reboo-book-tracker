"use server"

import { bookApiService } from "@/services/reboo-api"

export default async function updateBookHighlightColor(
  bookId: number,
  hexColor: string,
) {
  await bookApiService.updateBookHighlightColor(bookId, hexColor)
}
