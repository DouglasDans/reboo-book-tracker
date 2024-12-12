"use server"

import { rebooApiService } from "@/services/reboo-api"

export default async function updateBookHighlightColor(
  bookId: number,
  hexColor: string,
) {
  await rebooApiService.updateBookHighlightColor(bookId, hexColor)
}
