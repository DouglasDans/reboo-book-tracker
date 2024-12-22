"use server"

import {
  addBooksOnCollection,
  createNewCollection,
} from "@/api/reboo-api/services/collection.service"
import { FormCollection } from "@/types/forms.types"
import { redirect } from "next/navigation"

export async function createCollection(data: FormCollection) {
  const collection = await createNewCollection({
    name: data.name,
    backgroundColors: data.backgroundColors,
    userId: parseInt(data.userId.toString()),
  })

  if (data.books) {
    const bookIds = data.books.map(book => book.id)
    await addBooksOnCollection(collection.id, { bookIds })
  }

  redirect(`/${collection.userId}/library/collection/${collection.id}`)
}
