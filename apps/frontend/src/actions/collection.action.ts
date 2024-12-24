"use server"

import { FormCollection } from "@/types/forms.types"
import { redirect } from "next/navigation"
import { collectionApiService } from "@/api/reboo-api"

export async function createCollection(data: FormCollection) {
  const collection = await collectionApiService.createNewCollection({
    name: data.name,
    backgroundColors: data.backgroundColors,
    userId: parseInt(data.userId.toString()),
  })

  if (data.books) {
    const bookIds = data.books.map(book => book.id)
    await collectionApiService.addBooksOnCollection(collection.id, { bookIds })
  }

  redirect(`/${collection.userId}/library/collection/${collection.id}`)
}

export async function updateCollection(collection: FormCollection) {
  await collectionApiService.updateCollection({
    id: collection.id,
    name: collection.name,
    backgroundColors: collection.backgroundColors,
    userId: collection.userId,
    books: collection.books.map(book => book.id),
  })
  redirect(`/${collection.userId}/library/collection/${collection.id}`)
}

export async function deleteCollection(collectionId: number) {
  await collectionApiService.deleteCollectionById(collectionId)
  redirect("../../")
}
